import type { Tag } from "@prisma/client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

import { TagLink } from "./TagLink";

type Props = {
  tags: Tag[];
  onChange: (tags: Tag[]) => void;
};

type LTag = Tag & { selected: boolean };

export const Tags = ({ tags, onChange }: Props) => {
  const defTags: LTag[] = tags.map((el) => ({ ...el, selected: false }));

  const [all, setAll] = useState(true);
  const [counter, setCounter] = useState<number>(0);
  const [lTags, setLTags] = useState<LTag[]>(defTags);
  const [opened, setOpened] = useState(false);
  const [prevState, setPrev] = useState({
    tags: defTags,
    counter,
  });

  const onClick = (t: LTag) => {
    if (counter + 1 < lTags.length || t.selected) {
      setCounter((p) => (!t.selected ? p + 1 : p - 1));
      setLTags((prev) => {
        return prev.map((el) => (el.id === t.id ? { ...el, selected: !el.selected } : el));
      });
    } else {
      setPrev({ tags: lTags, counter });
      setLTags(defTags);
      setCounter(0);
    }
  };

  const clickAll = () => {
    setPrev({ tags: lTags, counter });

    if (all) {
      setLTags(prevState.tags);
      setCounter(prevState.counter);
    } else {
      setLTags(defTags);
      setCounter(0);
    }
  };

  useEffect(() => {
    setAll(!counter || counter === lTags.length);
  }, [counter, lTags, setAll]);

  useEffect(() => {
    let t: Tag[] = [];
    if (!all) t = lTags.filter((el) => el.selected);
    onChange(t);
  }, [all, lTags]);

  return (
    <ul className="scrollbar-hide whitespace-nowrap w-full py-6 sm:py-8 border-b border-b-gray-300 border-solid flex grow gap-x-3 overflow-x-auto select-none">
      <TagLink title="Все" selected={all} onClick={clickAll} />
      {lTags.length > 1 &&
        lTags
          .slice(0, !opened ? 5 : undefined)
          .map((t) => (
            <TagLink
              key={t.id}
              title={t.title}
              selected={!all && t.selected}
              onClick={() => onClick(t)}
            />
          ))}
      {lTags.length > 5 && (
        <li
          onClick={() => setOpened((prev) => !prev)}
          className={clsx(
            opened ? "bg-warning hover:bg-primary" : "bg-primary hover:bg-warning",
            "h-9 rounded py-1.5 px-5 border text-white transition duration-100 ease-in-out cursor-pointer"
          )}
        >
          {opened ? "Скрыть" : "Ещё"}
        </li>
      )}
    </ul>
  );
};

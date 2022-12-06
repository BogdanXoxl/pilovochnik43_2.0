import Link from "next/link";
import React from "react";
import { SlSocialVkontakte } from "react-icons/sl";
import { TbBrandTelegram, TbBrandWhatsapp } from "react-icons/tb";

export const Footer = () => {
  return (
    <footer className="pt-10 min-h-[826px] sm:min-h-[512px] lg:min-h-[269px] w-full bg-secondary text-white text-base font-normal">
      <div className="px-8 gap-y-6 flex container mx-auto justify-between flex-wrap flex-col sm:flex-row">
        <div>
          <h3 className="font-bold mb-3 uppercase">Помощь</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
              >
                Доставка и возврат
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
              >
                Частые вопросы
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
              >
                Отслеживание заказа
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
              >
                О нас
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 uppercase">Каталог</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
              >
                Новинки
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
              >
                Популярное
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
              >
                Скидки
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 uppercase">Всегда на связи</h3>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-3">
              Телефон:
              <div className="flex flex-col">
                <Link
                  href="tel:+7 (999) 164-25-90"
                  className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
                >
                  +7 (999) 164-25-90
                </Link>
                <Link
                  href="tel:+7 (996) 047-51-77"
                  className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
                >
                  +7 (996) 047-51-77
                </Link>
              </div>
            </li>
            <li className="flex items-center gap-3">
              Почта:
              <Link
                href="mailto:pilovo43nik@mail.ru"
                className="hover:underline opacity-60 hover:opacity-100 transition-all duration-100"
              >
                pilovo43nik@mail.ru
              </Link>
            </li>
            <li className="flex items-center gap-3 mt-3.5">
              <Link
                href=""
                className="transition-all duration-300 rounded w-8 h-8 hover:bg-primary bg-white/10 flex items-center justify-center"
              >
                <TbBrandTelegram className="w-4 h-4" />
              </Link>
              <Link
                href=""
                className="transition-all duration-300 rounded w-8 h-8 hover:bg-primary bg-white/10 flex items-center justify-center"
              >
                <SlSocialVkontakte className="w-4 h-4" />
              </Link>
              <Link
                href=""
                className="transition-all duration-300 rounded w-8 h-8 hover:bg-primary bg-white/10 flex items-center justify-center"
              >
                <TbBrandWhatsapp className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 uppercase">Как нас найти</h3>
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="sm:w-[152px] h-[128px] bg-blue-200 w-full">map</div>
            <div className="sm:max-w-[216px] text-sm w-full">
              <ul className="list-disc list-inside mb-2">
                <li>Авиастроительная</li>
                <li>Северный вокзал</li>
                <li>Яшьлек</li>
              </ul>
              <p>Россия, Республика Татарстан, Казань, Теплично-Комбинатская улица</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

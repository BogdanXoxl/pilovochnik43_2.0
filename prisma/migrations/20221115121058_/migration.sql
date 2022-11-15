/*
  Warnings:

  - You are about to drop the column `productId` on the `DeliveryType` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DeliveryType" DROP CONSTRAINT "DeliveryType_productId_fkey";

-- AlterTable
ALTER TABLE "DeliveryType" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_DeliveryTypeToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DeliveryTypeToProduct_AB_unique" ON "_DeliveryTypeToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_DeliveryTypeToProduct_B_index" ON "_DeliveryTypeToProduct"("B");

-- AddForeignKey
ALTER TABLE "_DeliveryTypeToProduct" ADD CONSTRAINT "_DeliveryTypeToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "DeliveryType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeliveryTypeToProduct" ADD CONSTRAINT "_DeliveryTypeToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - Made the column `orderId` on table `ProductOrder` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ProductOrder" DROP CONSTRAINT "ProductOrder_orderId_fkey";

-- AlterTable
ALTER TABLE "ProductOrder" ALTER COLUMN "orderId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductOrder" ADD CONSTRAINT "ProductOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

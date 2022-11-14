-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "seo_description" TEXT,
ADD COLUMN     "seo_title" TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "seo_description" TEXT,
ADD COLUMN     "seo_title" TEXT;

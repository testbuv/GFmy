/*
  Warnings:

  - You are about to drop the column `stripeSessionId` on the `purchases` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "purchases_stripeSessionId_key";

-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "stripeSessionId";

/*
  Warnings:

  - A unique constraint covering the columns `[stripeSessionId]` on the table `purchases` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stripeSessionId` to the `purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "purchases" ADD COLUMN     "stripeSessionId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "purchases_stripeSessionId_key" ON "purchases"("stripeSessionId");

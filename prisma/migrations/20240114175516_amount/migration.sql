/*
  Warnings:

  - Added the required column `eurAmount` to the `purchases` table without a default value. This is not possible if the table is not empty.
  - Made the column `creditAmount` on table `purchases` required. This step will fail if there are existing NULL values in that column.
  - Made the column `credits` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "purchases" ADD COLUMN     "eurAmount" INTEGER NOT NULL,
ALTER COLUMN "creditAmount" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "credits" SET NOT NULL;

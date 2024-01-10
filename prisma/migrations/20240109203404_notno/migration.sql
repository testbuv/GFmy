/*
  Warnings:

  - Made the column `creditAmount` on table `purchases` required. This step will fail if there are existing NULL values in that column.
  - Made the column `credits` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "purchases" ALTER COLUMN "creditAmount" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "credits" SET NOT NULL;

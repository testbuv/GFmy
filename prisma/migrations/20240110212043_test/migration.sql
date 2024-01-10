/*
  Warnings:

  - You are about to drop the column `stripe_current_period_end` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_customer_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_price_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_subscription_id` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_stripe_customer_id_key";

-- DropIndex
DROP INDEX "users_stripe_subscription_id_key";

-- AlterTable
ALTER TABLE "purchases" ALTER COLUMN "creditAmount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "stripe_current_period_end",
DROP COLUMN "stripe_customer_id",
DROP COLUMN "stripe_price_id",
DROP COLUMN "stripe_subscription_id";

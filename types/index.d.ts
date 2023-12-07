import { User } from "@prisma/client";

export interface FileWithPreview extends File {
  preview: string;
}

export interface OutputImgSlider {
  previewURL: string;
  outputURL: string;
}

export type UserWithTokenBalance = Pick<User, "email" | "name" | "id"> & {
  tokenBalance: number; // Assuming you have a field for token balance in your User model
};

// If you are no longer using the subscription fields, you can remove them
// If you still need them for any reason, keep them in the type
export type UserSubscriptionPlan = Pick<
  User,
  | "stripeCustomerId"
  | "stripeSubscriptionId"
  | "stripePriceId"
  | "stripeCurrentPeriodEnd"
> & {
  isPro: boolean;  // 'isPro' might be used if you have features locked behind a Pro status
};

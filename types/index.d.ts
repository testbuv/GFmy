import { Purchase, User } from "@prisma/client";

export interface FileWithPreview extends File {
  preview: string;
}

export interface OutputImgSlider {
  previewURL: string;
  outputURL: string;
}

export type UserWithTokenBalance = Pick<User, "email" | "name" | "id" | "purchases" | "credits"
>  & {
  isPro: boolean;  // 'isPro' might be used if you have features locked behind a Pro status
};

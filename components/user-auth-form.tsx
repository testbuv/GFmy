"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { HTMLAttributes, useState } from "react";

import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader2Icon } from "lucide-react";
import { GoogleIcon } from "@/components/custom-icons";
import { toast } from "react-hot-toast";

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

type Input = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  const form = useForm<Input>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
  } = form;

  async function onSubmit(data: Input) {
    console.log(data);

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: "/dashboard",
    });

    if (!signInResult?.ok) {
      console.log("[EMAIL VERIFICATION FRONTEND ERROR]");
      return toast.error("Your sign in request failed. Please try again.");
    }
    console.log("[EMAIL VERIFICATION FRONTEND SUCCESS]");
    return toast.success(
      "Please check your email or spam for verification instructions.",
    );
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Sign in
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isGoogleLoading || isLoading}
        onClick={() => {
          setIsGoogleLoading(true);
          signIn("google", {
            callbackUrl: "/dashboard",
          }).then(() => setIsGoogleLoading(false));
        }}
      >
        {isGoogleLoading ? (
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GoogleIcon className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}

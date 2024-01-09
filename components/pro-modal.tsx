"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { usePromodal } from '@/store/promodal-store';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from "next/navigation";
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";

export const ProModal = () => {
  const proModal = usePromodal();
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  const redirectToPricingTable = () => {
    router.push('/dashboard/billing'); 
  };
  return (
    <>
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent className="w-full max-h-screen overflow-y-auto rounded-md bg-white/50 backdrop-blur transition-opacity dark:bg-slate-900/50 md:bg-white/30">
          <h1 className="mb-4 text-center text-2xl font-bold">
            Choose Your Package
          </h1>
          {resolvedTheme === "dark" ? (
            <Image
              src="/pro-dark.png"
              alt="pro"
              width={300}
              height={300}
              className="m-auto"
            />
          ) : (
            <Image
              src="/pro.png"
              alt="pro"
              width={200}
              height={200}
              className="m-auto"
            />
          )}
          <p className="mb-4 text-center text-gray-600 dark:text-white">
            Select a package that fits your needs.
          </p>
          <div className="w-full md:w-3/4 mx-auto">
          <Button onClick={redirectToPricingTable}>
            Buy Credits
          </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
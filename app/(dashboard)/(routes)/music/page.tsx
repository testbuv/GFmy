"use client";


import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loaders";
import { usePromodal } from "@/store/promodal-store";
import { sleep } from "@/lib/utils";

import { formSchema } from "./constants";
import { HeadingShell } from "@/components/shell";
import { z } from "zod";

type Input = z.infer<typeof formSchema>;

const MusicPage = () => {
  const proModal = usePromodal();
  const router = useRouter();
  const [music, setMusic] = useState<string[]>([]);
  const form = useForm<Input>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt_a: "", // Use prompt_a as per your constants
    },
  });

  const isLoading = form.formState.isSubmitting;

const onSubmit = async (data: Input) => {
        try {
          setMusic([]);
          let response = await axios.post("/api/music", data);
          let { generation_id, status } = response.data;
          console.log(generation_id, status);
          while (status !== "succeeded" && status !== "failed") {
            await sleep(1000);
            response = await axios.get("api/music/" + generation_id);
            status = response.data.status;
            console.log(status);
          }
          if (status === "failed") {
            return toast.error("Server Error.Please try after some time");
          }
          console.log(response.data);
          setMusic(response.data.outputURL);
          form.reset();
        } catch (err: any) {
          console.log("[QR_CODE_CLIENT_ERROR]");
          if (err?.response?.status === 403) {
            proModal.onOpen();
          } else toast.error("Internal Server Error.");
        } finally {
          router.refresh();
        }
      };

  return (
    <>
      <HeadingShell>
        <Heading heading="Music Generator" subHeading="Create tunes using AI" />
      </HeadingShell>

      <div className="mx-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full grid-cols-12 gap-2">
            <FormField name="prompt_a" render={({ field }) => (
              <FormItem className="col-span-12">
                <FormControl>
                  <Input {...field} placeholder="Enter a music prompt" disabled={isLoading} />
                </FormControl>
              </FormItem>
            )} />
            <FormItem className="col-span-12">
              <Button type="submit" disabled={isLoading}>
                Generate Music
              </Button>
            </FormItem>
          </form>
        </Form>

        {isLoading && <Loader className="mt-10 h-48" />}

        {music && (
          <div className="mt-8">
            <audio controls className="w-full">
              <source src={music[0]} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </>
  );
};

export default MusicPage;

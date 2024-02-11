"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { HeadingShell } from "@/components/shell";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectContent } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loaders";
import { PageCard } from "@/components/page-card";
import { sleep } from "@/lib/utils";

import { formSchema, amountOptions } from "./constants";
import * as z from "zod";

type FormData = z.infer<typeof formSchema>;

const ImageGenerationPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "a vision of paradise. unreal engine",
      height: 1024,
      width: 1024,
      num_outputs: 1
    },
  });

  const isLoading = form.formState.isSubmitting;
  const bottomOfPanelRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (data: FormData) => {
    try {
      setImages([]);
      let response = await axios.post("/api/stable-diffusion", data);
      let { generation_id, status } = response.data;

      while (status !== "succeeded" && status !== "failed") {
        await sleep(1000);
        response = await axios.get("/api/stable-diffusion/" + generation_id);
        status = response.data.status;
      }

      if (status === "failed") {
        toast.error("Server Error. Please try after some time");
        return;
      }

      setImages(response.data.outputURL);
    } catch (err: any) {
      console.error("[IMAGE_GEN_CLIENT_ERROR]", err);
      if (err?.response?.status === 403 || err?.response?.status === 503 || err?.response?.status === 500){
        toast.error("Credit limit reached. Please purchase more to continue.");
      } else toast.error("Internal Server Error.");
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <HeadingShell>
        <Heading heading="Image Generator" subHeading="Create images using Stable Diffusion" />
      </HeadingShell>

      <div className="mx-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 grid w-full grid-cols-12 gap-2 space-y-2">
            <FormField name="prompt" render={({ field }) => (
              <FormItem className="col-span-12">
                <FormControl>
                  <Input {...field} placeholder="Enter a prompt" disabled={isLoading} />
                </FormControl>
              </FormItem>
            )} />

          <FormField name="num_outputs" render={({ field }) => (
              <FormItem className="col-span-6">
                <FormControl>
                  <Select {...field} disabled={isLoading}>
                    <SelectContent>
                      {amountOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )} />

            <FormItem className="col-span-12">
              <Button type="submit" disabled={isLoading}>
                Generate
              </Button>
            </FormItem>
          </form>
        </Form>

        {isLoading && <Loader />} 

        {images.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <PageCard key={index} src={image} alt="Generated Image" downloadBtn={true}
              />
            ))}
          </div>
        )}

        <div ref={bottomOfPanelRef}></div>        
      </div>
    </>
  );
};

export default ImageGenerationPage;

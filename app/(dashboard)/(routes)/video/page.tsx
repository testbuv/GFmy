"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { HeadingShell } from "@/components/shell";

import { Heading,  } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loaders";
import { usePromodal } from "@/store/promodal-store";

import { formSchema } from "./constants";

type VideoFormData = z.infer<typeof formSchema>;

const VideoPage = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const router = useRouter();
  const proModal = usePromodal();
  const form = useForm<VideoFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "A macro video of a bee pollinating a flower",
      fps: 8,
      width: 576,
      height: 320,
      num_frames: 27,
      guidance_scale: 7.5,
      num_inference_steps: 50
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: VideoFormData) => {
    try {
      setVideoUrl(null);
      const response = await axios.post("/api/video", data);
      setVideoUrl(response.data.url); // Assuming the response contains the video URL
      toast.success("Video generated successfully!");
    } catch (error: any) {
      console.error("[VIDEO_GENERATION_ERROR]", error);
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else toast.error("Internal Server Error.");    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <HeadingShell>
        <Heading heading="Video Generation" subHeading="Create videos using AI" />
      </HeadingShell>

      <div className="mx-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full grid-cols-12 gap-2">
            <FormField name="prompt" render={({ field }) => (
              <FormItem className="col-span-12">
                <FormControl>
                  <Input {...field} placeholder="Enter a video prompt" disabled={isLoading} />
                </FormControl>
              </FormItem>
            )} />
            {/* Additional fields for fps, width, height, etc. */}
            {/* Implement these fields similar to the prompt field using Select for fps and num_frames */}
            <FormItem className="col-span-12">
              <Button type="submit" disabled={isLoading}>
                Generate Video
              </Button>
            </FormItem>
          </form>
        </Form>

        {isLoading && <Loader />} 

        {videoUrl && (
          <div className="mt-8">
            <video controls className="w-full aspect-video">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPage;

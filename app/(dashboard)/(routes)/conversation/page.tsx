"use client";


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { HeadingShell } from "@/components/shell";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loaders";
import { sleep } from "@/lib/utils";
import { usePromodal } from "@/store/promodal-store";

import { formSchema } from "./constants";

const ConversationPage = () => {
  const router = useRouter();
  const proModal = usePromodal();
  const [conversation, setConversation] = useState<string[]>([]);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;
  
  const onSubmit = async (values: { prompt: string }) => {
    try {
      const response = await axios.post('/api/conversation', { messages: values.prompt });
      setConversation([...conversation, values.prompt, response.data.message]);
      
      form.reset();
    } catch (error: any) {
      console.error("[CONVERSATION_GENERATION_ERROR]", error);
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else toast.error("Error generating conversation.");
    } finally {
      router.refresh();
    }
  };

  return ( 
    <>
      <HeadingShell>
        <Heading heading="Conversation Generator" subHeading="Interact with AI" />
      </HeadingShell>

      <div className="mx-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full grid-cols-12 gap-2">
            <FormField name="prompt" render={({ field }) => (
              <FormItem className="col-span-12">
                <FormControl>
                  <Input {...field} placeholder="Start a conversation" disabled={isLoading} />
                </FormControl>
              </FormItem>
            )} />
            <FormItem className="col-span-12">
              <Button type="submit" disabled={isLoading}>
                Send Message
              </Button>
            </FormItem>
          </form>
        </Form>

        {isLoading && <Loader />} 

        {conversation.length > 0 && (
          <div className="mt-8 space-y-4">
            {conversation.map((message, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg">
                {message}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ConversationPage;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(10, {
      message: "Please enter a message at least 10 characters long",
    })
    .max(500, {
      message: "Please enter a message less than 500 characters",
    }),
});

export const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const endpoint = "/api/email";

    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((response) => {
        toast({
          title: "Message sent successfully.",
          description: "I will get back to you as soon as possible.",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error sending message.",
          variant: "destructive",
          description: err,
        });
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 md:w-[450px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormDescription>
                This is the email I&#39;ll use to get back to you
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormDescription>
                Message must be between 10 and 500 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="gap-2">
          Send <PaperPlaneIcon />
        </Button>
      </form>
    </Form>
  );
};

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Button } from "../ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import { LINKS } from "@/lib/data";
import Image from "next/image";
import { useToast } from "../ui/use-toast";

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

export const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Message sent successfully.",
      description: "I will get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact">
      <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
        Contact
      </h1>
      <h2 className="mt-3 mb-12">Let&#39;s get in touch!</h2>

      <section className="flex flex-wrap gap-20">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[450px] max-w-[85dvw]"
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

        <section className="flex flex-col gap-4 md:mt-5">
          {LINKS.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <Button variant="ghost" className="h-16 flex items-start gap-3">
                <Image
                  src={link.icon}
                  alt={link.title}
                  height={20}
                  width={20}
                  className="mt-1"
                />
                <div className="flex flex-col items-start">
                  <span className="text-xl">{link.title}</span>
                  <span className="text-gray-400 dark:text-gray-500">
                    {link.description}
                  </span>
                </div>
              </Button>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
};

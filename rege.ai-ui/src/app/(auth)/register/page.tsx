"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import BottomGradient from "@/components/shared/BottomGradient";
import { useRouter } from "next/navigation";
import { showCustomToast } from "@/lib/toast";
import { useResumeStore } from "@/lib/store";
import { useAuthStore } from "@/lib/authStore";
import { DEFAULT_RESUME } from "@/lib/constants";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters",
  }),
  email: z.string().email("This is not a valid email"),
});

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const initResume = useResumeStore((state) => state.initResume);
  const logIn = useAuthStore((state) => state.logIn);

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      // TODO: Fetch Resume of user
      logIn({
        username: DEFAULT_RESUME.bio.username,
        email: DEFAULT_RESUME.bio.email,
        userId: DEFAULT_RESUME.bio.userId,
      });
      initResume(DEFAULT_RESUME);
      showCustomToast("success", "Welcome to rege.ai");
      router.push(`/users/${DEFAULT_RESUME.bio.username}`);
    } catch (error) {
      console.log(error);
      showCustomToast("failure", "Unable to register");
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3 space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="jack-sparrow" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="****" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            onClick={() => { }}
            className="cursor-pointer group relative block h-11 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Register
            <ArrowRight className="inline ml-1 size-4 transform transition-transform group-hover:translate-x-1 duration-200" />
            <BottomGradient />
          </Button>
        </form>
      </Form>

      <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      <div className="text-muted-foreground text-xs mt-2 text-center">
        <b>FYI:</b> Already have an account?
        <Link href="/login" className="mx-1 underline text-blue-500">
          Login
        </Link>
        instead
      </div>
    </>
  );
}

"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastname: z
    .string()
    .min(2, {
      message: "Lastname must be at least 2 characters.",
    })
    .max(255, {
      invalid_type_error: "sdjhgsj",
    }),
});

const Enquiry = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "dealkjfh",
      lastname: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                    {/* <div class="w-56 relative group mt-[30px]">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        // placeholder="last name"
                        {...field}
                        className="w-full h-10 px-4 text-sm peer bg-gray-100 outline-none focus:border-black border-b border-gray-500"
                        // required
                      />
                      <label
                        for="username"
                        class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
                      >
                        Username
                      </label>
                    </div> */}
                    <div class="w-56 relative group mt-[30px]">
                      <input
                        type="text"
                        id="lastname"
                        {...field}
                        required
                        className="w-full h-10 px-4 text-sm peer bg-gray-100 outline-none focus:border-black border-b border-gray-500"
                      />
                      <label
                        htmlFor="lastname"
                        className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
                      >
                        lastname
                      </label>
                    </div>
                    {/* <Input placeholder="last name" {...field} /> */}
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Enquiry;

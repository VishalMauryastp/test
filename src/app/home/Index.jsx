"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Enquiry from "@/components/Enquiry";



const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        className="bg-blue-500"
        onClick={() => {
          setOpen(true);
        }}
      >
        btn1
      </Button>
      <Button className="bg-blue-500 ml-6">btn2</Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <div>open</div>
        </SheetTrigger>
        <SheetContent side="left" className="w-full">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            ipsa unde vitae minus libero illo culpa dicta iusto magnam
            necessitatibus. Veniam est fugit molestias ea cupiditate
            voluptatibus dolorem eveniet non consectetur ut quas recusandae
            corporis vero sit mollitia voluptatum tempore, rem molestiae soluta
            repellendus quos numquam sed! Deserunt, accusamus corrupti.
          </div>
          <div class="w-56 relative group mt-[30px]">
            <input
              type="text"
              id="username"
              required
              class="w-full h-10 px-4 text-sm peer bg-gray-100 outline-none focus:border-black border-b border-gray-500"
            />
            <label
              for="username"
              class="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Username
            </label>
          </div>
        </SheetContent>
      </Sheet>
      <Enquiry />
    </div>
  );
};

export default Index;

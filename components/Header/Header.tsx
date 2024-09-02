"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { AiOutlineSpotify } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "bg-gradient-to-r from-[#efefbb] to-[#d4d3dd] shadow-lg"
          : ""
      } fixed left-0 right-0 top-0 flex justify-between items-center px-3 sm:px-6 md:px-12 py-2 z-50`}
    >
      {/* Logo */}
      <div className="w-[120px]">
        <Image
          src={Logo}
          alt="chizzi podcast"
          height={200}
          width={400}
          className="w-full object-contain "
        />
      </div>
      {/* Nav */}
      <div className="hidden lg:flex justify-center items-center gap-10 ">
        <Link
          href={"#episodes"}
          className={`${
            isScrolled ? "text-amber-400" : "text-white"
          } font-semibold text-2xl`}
        >
          Episodes
        </Link>
        <Link
          href={"#merchandise"}
          className={`${
            isScrolled ? "text-amber-400" : "text-white"
          } font-semibold text-2xl`}
        >
          Merch
        </Link>
        <Link
          href={"#guests"}
          className={`${
            isScrolled ? "text-amber-400" : "text-white"
          } font-semibold text-2xl`}
        >
          Guests
        </Link>
      </div>
      {/* Channels */}
      <div className="flex justify-center items-center gap-4">
        <Button className="rounded-xl" variant={"outline"}>
          <AiOutlineSpotify size={20} />
        </Button>
        <Button className="rounded-xl" variant={"outline"}>
          <Youtube />
        </Button>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import React from "react";
import Logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex justify-between items-center px-12 py-2">
      {/* Logo */}
      <div className="w-[150px]">
        <Image
          src={Logo}
          alt="chizzi podcast"
          height={200}
          width={400}
          className="w-full object-contain "
        />
      </div>
      {/* Nav */}
      <ul className="flex justify-center items-center gap-4">
        <li className="font-semibold text-lg">Episodes</li>
        <li className="font-semibold text-lg">Merch</li>
        <li className="font-semibold text-lg">Guests</li>
      </ul>
      {/* Channels */}
      <div className="flex justify-center items-center gap-4">
        <Button variant="outline">Spotify</Button>
        <Button>Youtube</Button>
      </div>
    </div>
  );
};

export default Header;

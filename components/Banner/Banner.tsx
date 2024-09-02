import React from "react";
import BannerImg from "@/public/rapcha4_batcheditor_fotor (1).png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Facebook, Instagram, Mic, Youtube } from "lucide-react";
import { AiOutlineSpotify } from "react-icons/ai";
import { IoMdMicrophone } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-400 h-screen w-full rounded-lg relative overflow-hidden">
      <Image
        src={
          //BannerImg
          "https://images.unsplash.com/photo-1581547848545-a75a2634ba23?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // "https://images.unsplash.com/photo-1622098152051-fcb9904099a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="banner"
        height={400}
        width={400}
        className="absolute w-full h-full object-cover "
      />

      <div className="absolute w-full h-full bg-gradient-to-b  from-[#F2C94C] to-transparent"></div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <h1 className="text-6xl font-bold text-white mb-2 z-10 text-center">
          <span className="inline-block p-1 bg-black text-white skew-y-2 transform">
            Chizzi
          </span>
          Podcast
        </h1>
        <p className="font-semibold text-white text-shadow text-xl mb-8 z-10">
          Educate, Entertain!
        </p>
        <IoMdMicrophone
          size={55}
          className="z-10 hidden md:block text-white font-bold mb-4"
        />
        <div className="flex flex-wrap justify-center items-center gap-4 z-10 ">
          <Button className="text-md rounded-xl p-2 w-[150px]">
            <AiOutlineSpotify className="mr-2" size={15} /> Spotify
          </Button>
          <Button className="text-md rounded-xl p-2 w-[150px]">
            <Youtube className="mr-2" size={15} /> Youtube
          </Button>
          <Button className="text-md rounded-xl p-2 w-[150px]">
            {" "}
            <Facebook className="mr-2" size={15} /> Facebook
          </Button>
          <Button className="text-md rounded-xl p-2 w-[150px]">
            <Instagram className="mr-2" size={15} /> Instagram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

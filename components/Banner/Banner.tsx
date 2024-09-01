import React from "react";
import BannerImg from "@/public/rapcha4_batcheditor_fotor (1).png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-400 h-screen w-full rounded-lg relative overflow-hidden">
      <Image
        src={
          BannerImg
          // "https://images.unsplash.com/photo-1622098152051-fcb9904099a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="banner"
        height={400}
        width={400}
        className="absolute w-full h-full object-cover "
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-amber-400 to-transparent"></div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <h1 className="text-6xl font-bold text-white mb-2 z-10 ">
          Chizzi Podcast
        </h1>
        <p className="font-semibold text-white mb-8 z-10">
          Welcome to EduTainment Podcast, where learning meets fun! Join us as
          we explore the latest trends in education, share inspiring stories,
          and bring you the best of both worlds—knowledge and entertainment.
          Whether you're a lifelong learner or just curious, we've got something
          for everyone.
        </p>
        <div className="flex justify-center items-center gap-4 z-10 ">
          <Button>Spotify</Button>
          <Button>Youtube</Button>
          <Button>Facebook</Button>
          <Button>Instagram</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

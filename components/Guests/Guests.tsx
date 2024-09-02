import React from "react";
import { Card, CardContent } from "../ui/card";
import JimwatImg from "@/public/rapcha_jimwatt.jpeg";
import MorrisImg from "@/public/morris_rapcha.jpg";
import GeraldImg from "@/public/rapcha_gerald.jpeg";
import JuliusImg from "@/public/julius_rapcha.jpeg";
import GrongiImg from "@/public/rapcha_grongi.jpg";
import Image from "next/image";
import IllustrationImg from "@/public/Appreciation-bro-removebg-preview.png";

const guests = [
  { imgSrc: JimwatImg, name: "jimwat" },
  { imgSrc: MorrisImg, name: "morris the actor" },
  { imgSrc: GeraldImg, name: "gerald ndegwa" },
  { imgSrc: JuliusImg, name: "julius the activist" },
  { imgSrc: GrongiImg, name: "G-Rongi" },
];

const Guests = () => {
  return (
    <div className="px-3 sm:px-6 md:px-12 py-12 bg-gradient-to-r from-[#fffbe6] to-[#f0f0f0]">
      <h2 className="text-4xl font-bold text-amber-400 mb-2">
        Some of our Guests
      </h2>
      <p className="mb-8 max-w-lg text-slate-500">
        Each episode features unique voices and experiences, bringing you
        powerful insights and captivating narratives from leaders, creators, and
        change-makers.
      </p>
      <div className="w-full flex justify-center items-center">
        <div className="hidden md:block w-1/3">
          <Image
            src={IllustrationImg}
            alt="guests"
            height={300}
            width={300}
            className="w-full object-contain"
          />
        </div>
        <div className="relative w-full md:w-2/3 overflow-hidden">
          <div className="flex gap-4 animate-slide">
            {guests.concat(guests).map((guest, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0">
                <Card className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src={guest.imgSrc}
                    alt="Episode Thumbnail"
                    className="h-[400px] w-full object-cover"
                    width="600"
                    height="400"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <CardContent className="absolute inset-x-0 bottom-0 py-4 px-6 text-white">
                    <div className="flex items-center justify-end">
                      <p className="text-sm font-medium">{guest.name}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;

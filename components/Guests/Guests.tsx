import React from "react";
import { Card, CardContent } from "../ui/card";
import BannerImg from "@/public/rapcha5.jpg";
import Image from "next/image";
import IllustrationImg from "@/public/Appreciation-bro-removebg-preview.png";

const guests = [
  { imgSrc: BannerImg, name: "jimwat" },
  { imgSrc: BannerImg, name: "pili pili" },
  { imgSrc: BannerImg, name: "jua cali" },
  { imgSrc: BannerImg, name: "seiku kone" },
  { imgSrc: BannerImg, name: "asalem aleikum" },
  { imgSrc: BannerImg, name: "karatasi" },
];

const Guests = () => {
  return (
    <div className="px-12 py-12 bg-neutral-200">
      <h2 className="text-4xl font-bold text-amber-400 mb-2">
        Some of our Guests
      </h2>
      <p className="mb-8">inspiring stories</p>
      <div className="w-full flex justify-center items-center">
        <div className="w-1/3">
          <Image
            src={IllustrationImg}
            alt="guests"
            height={300}
            width={300}
            className="w-full object-contain"
          />
        </div>
        <div className="relative w-2/3 overflow-hidden">
          <div className="flex gap-4 animate-slide">
            {guests.concat(guests).map((guest, index) => (
              <div key={index} className="w-1/3 flex-shrink-0">
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

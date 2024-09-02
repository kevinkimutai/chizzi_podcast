import React from "react";

import BannerImg from "@/public/rapcha5.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EpisodesItems = [
  {
    id: 1,
    imageSrc: "https://i3.ytimg.com/vi/AIBtUbPCHvE/maxresdefault.jpg",
    nums: 10,
    title: "Jimwat's Addiction story",
    link: "https://www.youtube.com/watch?v=AIBtUbPCHvE",
  },
  {
    id: 2,
    imageSrc: "https://i3.ytimg.com/vi/kqKTUWqY3D4/maxresdefault.jpg",
    nums: 9,
    title: "Chris Kimaru's Addiction story",
    link: "https://www.youtube.com/watch?v=kqKTUWqY3D4&t=17s",
  },
  {
    id: 3,
    imageSrc: "https://i3.ytimg.com/vi/UAOc4jpkVP4/maxresdefault.jpg",
    nums: 8,
    title: "Joseph Weche",
    link: "https://www.youtube.com/watch?v=UAOc4jpkVP4&t=2967s",
  },
  {
    id: 4,
    imageSrc: "https://i3.ytimg.com/vi/mKXVv0sCPNs/maxresdefault.jpg",
    nums: 7,
    title: "Gerald Ndegwa",
    link: "https://www.youtube.com/watch?v=mKXVv0sCPNs&t=2s",
  },
  {
    id: 5,
    imageSrc: "https://i3.ytimg.com/vi/LjUzPguCd28/maxresdefault.jpg",
    nums: 6,
    title: "Julius Kamau Activist",
    link: "https://www.youtube.com/watch?v=LjUzPguCd28&t=1295s",
  },
  {
    id: 6,
    imageSrc: "https://i3.ytimg.com/vi/QrmML0dW5ts/maxresdefault.jpg",
    nums: 5,
    title: "G-Rongi",
    link: "https://www.youtube.com/watch?v=QrmML0dW5ts&t=345s",
  },
];

const Episodes = () => {
  return (
    <div className="px-3 sm:px-6 md:px-12 py-12">
      <h2 className="text-4xl font-bold text-amber-400 mb-2">
        Latest Episodes
      </h2>
      <p className="mb-8 max-w-lg text-slate-500">
        Stay up to date with the latest episodes of our podcast, where we dive
        deep into intriguing topics, share expert insights, and engage in
        thought-provoking conversations
      </p>
      <div className="w-full flex gap-4 overflow-scroll px-4">
        {EpisodesItems.map((eps) => (
          <Link
            href={eps.link}
            key={eps.id}
            className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0"
          >
            <Card className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src={eps.imageSrc}
                alt="Episode Thumbnail"
                className="h-[400px] w-full object-cover"
                width="600"
                height="400"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <CardContent className="absolute inset-x-0 bottom-0 py-4 px-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Episode {eps.nums}</p>
                    <p className="text-sm font-medium">{eps.title}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white">
                    <PlayIcon className="h-6 w-6" />
                    <span className="sr-only">Play</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Episodes;

import React from "react";

import BannerImg from "@/public/rapcha5.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayIcon } from "lucide-react";
import Image from "next/image";

const Episodes = () => {
  return (
    <div className="px-12 py-12">
      <h2 className="text-4xl font-bold text-amber-400 mb-2">
        Latest Episodes
      </h2>
      <p className="mb-8">stay upto date with the latest episodes</p>
      <div className="w-full flex gap-4 overflow-scroll px-4">
        {/*  */}
        <div className="w-1/4 flex-shrink-0">
          <Card className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src={BannerImg}
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
                  <p className="text-sm font-medium">Episode 12</p>
                  <p className="text-sm font-medium">
                    Jimwat's Addiction Story
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-white">
                  <PlayIcon className="h-6 w-6" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/*  */}
        <div className="w-1/4 flex-shrink-0">
          <Card className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src={BannerImg}
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
                  <p className="text-sm font-medium">Episode 12</p>
                  <p className="text-sm font-medium">
                    Jimwat's Addiction Story
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-white">
                  <PlayIcon className="h-6 w-6" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/*  */}
        <div className="w-1/4 flex-shrink-0">
          <Card className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src={BannerImg}
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
                  <p className="text-sm font-medium">Episode 12</p>
                  <p className="text-sm font-medium">
                    Jimwat's Addiction Story
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-white">
                  <PlayIcon className="h-6 w-6" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/*  */}
        <div className="w-1/4 flex-shrink-0">
          <Card className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src={BannerImg}
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
                  <p className="text-sm font-medium">Episode 12</p>
                  <p className="text-sm font-medium">
                    Jimwat's Addiction Story
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-white">
                  <PlayIcon className="h-6 w-6" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/*  */}
        <div className="w-1/4 flex-shrink-0">
          <Card className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src={BannerImg}
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
                  <p className="text-sm font-medium">Episode 12</p>
                  <p className="text-sm font-medium">
                    Jimwat's Addiction Story
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-white">
                  <PlayIcon className="h-6 w-6" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/*  */}
        <div className="w-1/4 flex-shrink-0">
          <Card className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src={BannerImg}
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
                  <p className="text-sm font-medium">Episode 12</p>
                  <p className="text-sm font-medium">
                    Jimwat's Addiction Story
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-white">
                  <PlayIcon className="h-6 w-6" />
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Episodes;

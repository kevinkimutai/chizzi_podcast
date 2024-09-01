import Image from "next/image";

import Logo from "../public/logo.png";

import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import BannerImg from "../public/rapcha5.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayIcon } from "lucide-react";
import Episodes from "@/components/Episodes/Episodes";
import Link from "next/link";
import Merchandise from "@/components/Merch/Merchandise";
import Guests from "@/components/Guests/Guests";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Episodes */}
      <Episodes />
      {/* Merch */}
      <Merchandise />
      {/* Guests */}
      <Guests />

      {/* Footer */}
      <Footer />
    </main>
  );
}

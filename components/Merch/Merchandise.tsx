import React from "react";

import MerchImg from "@/public/rapchashirt1.webp";
import Image from "next/image";
import Link from "next/link";

const merchItems = [
  {
    indx: 1,
    price: 1000,
    name: "chizzi white shirt",
    desc: " Soft and comfortable shirt for everyday wear.",
  },
  {
    indx: 2,
    price: 1000,
    name: "chizzi sweatshirt",
    desc: " Soft and comfortable shirt for everyday wear.",
  },
  {
    indx: 3,
    price: 1000,
    name: "chizzi hoodie",
    desc: " Soft and comfortable shirt for everyday wear.",
  },
  {
    indx: 4,
    price: 1000,
    name: "chizzi track suit",
    desc: " Soft and comfortable shirt for everyday wear.",
  },
  {
    indx: 5,
    price: 1000,
    name: "chizzi gray shirt",
    desc: " Soft and comfortable shirt for everyday wear.",
  },
  {
    indx: 6,
    price: 1000,
    name: "chizzi croptop",
    desc: " Soft and comfortable shirt for everyday wear.",
  },
  {
    indx: 7,
    price: 1000,
    name: "chizzi leggings",
    desc: " Soft and comfortable shirt for everyday wear.",
  },
  {
    indx: 8,
    price: 1000,
    name: "chizzi brown shirt",
    desc: " Soft and comfortable shirt for everyday wear.",
  },
];

const Merchandise = () => {
  return (
    <div className="px-3 sm:px-6 md:px-12 py-12">
      <h2 className="text-4xl font-bold text-amber-400 mb-2">Merchandise</h2>
      <p className="mb-8 max-w-lg text-slate-500">
        Source our exclusive merch and show your support for the podcast! From
        stylish apparel to unique accessories, each item is crafted with our
        listeners in mind. Grab your favorites today and carry a piece of the
        podcast with you.
      </p>

      <div className="w-4/5 mx-auto">
        <div className="flex justify-center items-center mx-auto">
          <p className="p-4 w-[500px] border rounded-xl font-semibold text-center">
            ordering via website coming soon
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {merchItems.map((m) => (
            <div
              key={m.indx}
              className="relative overflow-hidden rounded-lg bg-amber-200 group "
            >
              <Link href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View</span>
              </Link>
              <Image
                src={MerchImg}
                alt="Sweatshirt"
                width={400}
                height={400}
                className="object-cover w-full h-80 group-hover:bg-amber-150 transition-opacity"
                style={{ aspectRatio: "400/500", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{m.desc}</p>
                <h4 className="text-base font-semibold">kshs {m.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;

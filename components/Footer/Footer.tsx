/**
 * v0 by Vercel.
 * @see https://v0.dev/t/erRPQtYSr22
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LogoImg from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#fffbe6] to-[#f0f0f0] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="flex justify-center items-center space-y-4">
            <Image
              src={LogoImg}
              alt="logo"
              height={400}
              width={400}
              className="object-contain max-w-[200px]"
            />
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Newsletter</h4>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-muted-foreground">
              Stay up to date with our latest episodes and news.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Social</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Copyright</h4>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Podcast Channel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

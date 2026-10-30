import Image from "next/image";
import Link from "next/link";

import { MediaLinks } from "@/app/components/media/MediaLinks";

import logo from "@/public/logo.png";

export function Header() {
  return (
    <header className="fixed top-0 z-20 flex h-header w-full items-center justify-between px-2.5 pt-4 pb-2.5 animate-header-in">
      <Link href="/" aria-label="Home">
        <Image src={logo} alt="DH logo" width={100} height={55} className="h-[55px] w-[100px] object-scale-down" priority />
      </Link>
      <MediaLinks className="mr-5" />
    </header>
  );
}

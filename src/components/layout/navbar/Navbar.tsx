import React from "react";
import Image from "next/image";
import logoImg from "@/assets/img/logo.png";
import Link from "next/link";
import NavStat from "./NavStat";
import NavList from "./NavList";

function Navbar() {
  return (
    <nav className="py-4 bg-gray-950 border-b border-gray-900 sticky top-0">
      <div className="container-center flex justify-between">
        {/* logo */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src={logoImg} alt="fit log logo" height="24" />
            <p className="text-[18px] font-bold font-oswald uppercase tracking-wide">
              FitLog
            </p>
          </Link>
        </div>

        {/* NavList */}
        <NavList className="order-2 md:order-1" />

        {/* NavStats */}
        <div className="flex items-center order-1 md:order-2">
          <NavStat href="/my-plan" label="plan" isActive />
          <NavStat href="/my-plan" label="saved" />
        </div>

        {/* Hamburger */}
      </div>
    </nav>
  );
}

export default Navbar;

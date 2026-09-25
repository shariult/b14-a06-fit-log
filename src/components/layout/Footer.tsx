import React from "react";
import { IconFooterLogo } from "@/components/ui/Icons";

function Footer() {
  return (
    <footer className="border-t border-t-gray-800">
      <div className="container-center flex justify-between py-6">
        <div className="flex justify-center items-center gap-2 tracking-wider">
          <IconFooterLogo className="text-pr" />
          <span className="text-sm uppercase font-black">FitLog</span>
        </div>
        <p className="text-xs text-gray-600">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import NavLink from "@/components/ui/navbar/NavLink";
import IconMenu from "@/components/icons/IconMenu";

type NavListProps = {
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function NavList(props: NavListProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { className, ...otherProps } = props;
  let classes = " " + className;

  let navListClasses = "scale-y-0 md:scale-y-100";

  function navToggleHandler() {
    setIsNavOpen(!isNavOpen);
  }
  if (isNavOpen) {
    navListClasses = "scale-y-100";
  }

  return (
    <div className={classes} {...otherProps} onClick={() => navToggleHandler()}>
      <p className="p-1 ml-4 border border-gray-500 rounded hover:bg-pr hover:text-pd cursor-pointer md:hidden">
        <IconMenu className="w-6 h-6" />
      </p>

      <ul
        className={`list-none gap-2 w-full md:w-[initial] flex flex-col md:flex-row items-end px-6 py-4 md:p-0 bg-gray-900 md:bg-transparent absolute md:static top-full right-0 origin-top transition ${navListClasses}`}
      >
        <NavLink href="/">Workouts</NavLink>
        <NavLink href="/my-plan">My Plan</NavLink>
      </ul>
    </div>
  );
}

export default NavList;

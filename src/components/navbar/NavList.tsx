"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import NavLink from "./NavLink";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
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

"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

function NavLink(props: NavLinkProps) {
  const urlPath = usePathname();
  const { href, className, children, ...otherProps } = props;

  let classes = "text-sm md:text-xs py-2 px-4 text-gray-300 rounded-full";

  if (className) {
    classes = `${classes} ${className}`;
  }

  if (urlPath === "/" && href === "/workouts") {
    classes = `${classes} text-pr bg-pd`;
  } else if (urlPath.startsWith(href.toString())) {
    classes = `${classes} text-pr bg-pd`;
  }

  return (
    <Link href={href} className={classes} {...otherProps}>
      {children}
    </Link>
  );
}

export default NavLink;

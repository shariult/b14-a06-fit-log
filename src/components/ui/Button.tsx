import Link, { LinkProps } from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type LinkElProps = {
  el: "link";
} & LinkProps;

type ButtonElProps = {
  el: "btn";
} & ComponentPropsWithoutRef<"button">;

type ButtonProps = {
  variant:
    | "primary"
    | "primary-rounded"
    | "border"
    | "border-rounded"
    | "disabled";
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
  className?: string;
} & (LinkElProps | ButtonElProps);

function Button(props: ButtonProps) {
  const { el, variant, size = "lg", className } = props;

  let classes = "inline-block text-xs font-bold transition-all";

  if (size === "lg") {
    classes += " px-8 py-4";
  } else if (size === "sm") {
    classes += " px-4 py-2";
  } else {
    classes += " px-6 py-3";
  }

  if (variant === "primary") {
    classes += " bg-pr hover:bg-gray-100 text-pd rounded-lg cursor-pointer";
  } else if (variant === "primary-rounded") {
    classes += " bg-pr hover:bg-gray-100 text-pd rounded-full cursor-pointer";
  } else if (variant === "border") {
    classes +=
      " bg-transparent hover:bg-gray-100 hover:text-gray-900 border border-gray-500 rounded-lg cursor-pointer";
  } else if (variant === "disabled") {
    classes += " bg-gray-500 rounded-xl cursor-not-allowed";
  } else {
    classes +=
      " bg-transparent hover:bg-gray-100 hover:text-gray-900 border border-gray-500 rounded-full cursor-pointer";
  }

  if (el === "link") {
    const { href, children, ...otherProps } = props;
    return (
      <Link href={href} {...otherProps} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  if (el === "btn") {
    const { children, ...otherProps } = props;
    return (
      <button className={`${classes}`} {...otherProps}>
        {children}
      </button>
    );
  }
}

export default Button;

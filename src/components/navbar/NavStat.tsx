import React, { ComponentPropsWithoutRef } from "react";
type NavStatProps = {
  stat: number;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function NavStat(props: NavStatProps) {
  const {
    stat = 0,
    isActive = false,
    className,
    children,
    ...otherProps
  } = props;
  let classes = `text-xs ${isActive ? "text-gray-300" : "text-gray-400"} flex gap-2 items-center ${className}`;

  return (
    <div className={classes} {...otherProps}>
      <span>{children}</span>
      <span
        className={`w-6 h-6 flex justify-center items-center rounded-full border border-gray-800 text-xs ${isActive ? "bg-pr text-pd border-0" : ""}`}
      >
        {stat}
      </span>
    </div>
  );
}

export default NavStat;

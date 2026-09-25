import React, { ComponentPropsWithoutRef } from "react";

type TagProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function Tag(props: TagProps) {
  const { children, className, ...otherProps } = props;

  let classes =
    "bg-pr text-pd text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full";
  if (className) {
    classes = `${classes} ${className}`;
  }
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}

export default Tag;

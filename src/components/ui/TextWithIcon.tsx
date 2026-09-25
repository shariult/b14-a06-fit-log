import React, { ComponentPropsWithoutRef } from "react";

type TextWithIconProps = {
  iconEl: React.ReactNode;
  label: string;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function TextWithIcon(props: TextWithIconProps) {
  const { iconEl, label, className, ...otherProps } = props;

  let classes =
    "flex gap-1.5 justify-center items-center text-gray-400 hover:text-pr text-sm";
  if (className) {
    classes = `${classes} ${className}`;
  }

  return (
    <div className={classes} {...otherProps}>
      {iconEl}
      <span>{label}</span>
    </div>
  );
}

export default TextWithIcon;

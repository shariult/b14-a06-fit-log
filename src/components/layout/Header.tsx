import React, { ComponentPropsWithoutRef } from "react";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"header">;

function Header(props: HeaderProps) {
  const { className, children, ...otherProps } = props;

  return (
    <header className={`container-center ${className}`} {...otherProps}>
      {children}
    </header>
  );
}

export default Header;

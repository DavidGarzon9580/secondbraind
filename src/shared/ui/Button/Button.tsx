"use client"; 

import React from "react";
import { Link } from "@/i18n/navigation"; 
import { clsx } from "clsx"; 

type ButtonProps = {
  children?: React.ReactNode;
  href?: string; 
  className?: string; 
  type?: "button" | "submit" | "reset";
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;



export default function Button({ children, href, className, type = "button", ...props }: ButtonProps) {
  
  const baseStyles = "mt-12 py-4 px-8 text-[1.3rem] rounded-full bg-[#B3B2AE] text-black border-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#D5DBDB] hover:text-[#333333]";

  if (href) {
    return (
      <Link
        href={href}
        className={clsx(baseStyles, className)}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={clsx(baseStyles, className)}
      {...props} 
    >
      {children}
    </button>
  );
}
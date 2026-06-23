import { ButtonHTMLAttributes } from "react";
import { cn } from "@/core/lib/utils";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md bg-black text-white hover:opacity-90",
        className
      )}
      {...props}
    />
  );
}
import { InputHTMLAttributes } from "react";
import { cn } from "@/core/lib/utils";

type InputProps =
  InputHTMLAttributes<HTMLInputElement>;

export function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "w-full border rounded-md px-3 py-2",
        className
      )}
      {...props}
    />
  );
}
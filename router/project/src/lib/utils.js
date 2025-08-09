import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export default function Cn(...inputs) {
  return twMerge(clsx(inputs));
}

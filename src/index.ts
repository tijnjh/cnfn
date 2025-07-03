import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * combines class names using clsx for conditional logic and twMerge to resolve
 * tailwind css class conflicts. useful for dynamic and conflict-free class name
 * composition.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export type { ClassValue };

"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-lg)] text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--azure-blue)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px] min-w-[44px]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--gradient-primary)] text-white shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)] hover:-translate-y-0.5",
        secondary:
          "bg-[var(--gray-100)] text-[var(--text-primary)] hover:bg-[var(--gray-200)]",
        outline:
          "border border-[var(--border-default)] text-[var(--text-primary)] bg-transparent hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]",
        ghost:
          "text-[var(--text-secondary)] hover:bg-[var(--gray-100)] hover:text-[var(--text-primary)]",
        link: "text-[var(--text-link)] underline-offset-4 hover:underline hover:text-[var(--text-link-hover)]",
        success:
          "bg-[var(--success)] text-white hover:bg-[#047857]",
        danger:
          "bg-[var(--error)] text-white hover:bg-[#B91C1C]",
        white:
          "bg-white text-[var(--luna-purple)] hover:bg-[var(--gray-50)]",
        "outline-white":
          "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/60",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

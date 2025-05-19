// src/components/ui/pharmacy-button.tsx
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PharmacyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const PharmacyButton = forwardRef<HTMLButtonElement, PharmacyButtonProps>(
  ({ className, variant = "primary", size = "default", iconLeft, iconRight, children, ...props }, ref) => {
    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        whileHover={{ 
          boxShadow: variant !== "ghost" && variant !== "link" ? "0 10px 15px -3px rgba(230, 27, 128, 0.1), 0 4px 6px -4px rgba(230, 27, 128, 0.1)" : "none" 
        }}
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E61B80] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          
          // Size variants
          {
            "h-11 px-5 py-2.5 text-sm": size === "default",
            "h-9 px-3 py-2 text-xs": size === "sm",
            "h-14 px-8 py-4 text-base": size === "lg",
          },
          
          // Color variants
          {
            "bg-[#E61B80] text-white hover:bg-[#d01974]": variant === "primary",
            "bg-[#404E55] text-white hover:bg-[#353f45]": variant === "secondary",
            "border-2 border-[#E61B80]/20 bg-white text-[#404E55] hover:border-[#E61B80]/40 hover:bg-[#E61B80]/5": variant === "outline",
            "bg-transparent text-[#404E55] hover:bg-[#F5F7FA]": variant === "ghost",
            "bg-transparent text-[#E61B80] hover:underline p-0 h-auto": variant === "link",
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </motion.button>
    );
  }
);

PharmacyButton.displayName = "PharmacyButton";

export { PharmacyButton };
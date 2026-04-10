import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  glowing?: boolean;
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      glowing = true,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-semibold rounded-full transition-smooth cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary: full gradient
            "gradient-cosmic text-white glow-hover": variant === "primary",
            // Outline: border with gradient text
            "border border-primary/60 text-primary bg-transparent hover:bg-primary/10":
              variant === "outline",
            // Ghost: subtle
            "text-foreground/80 bg-transparent hover:bg-muted/20 hover:text-foreground":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          glowing && variant === "primary" && "glow-primary",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

GradientButton.displayName = "GradientButton";

export { GradientButton };

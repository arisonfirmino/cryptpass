import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "group/button flex cursor-pointer items-center disabled:cursor-not-allowed justify-center rounded-sm text-sm font-medium transition-all outline-none select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground disabled:bg-muted",
        outline: "border disabled:text-muted-foreground",
        // secondary: "",
        // ghost: "",
        // destructive: "",
        // link: "",
      },
      size: {
        default: "h-8 gap-2 px-3 py-2",
        // xs: "",
        // sm: "",
        // lg: "",
        icon: "size-8 min-w-8",
        // "icon-xs": "",
        // "icon-sm": "",
        // "icon-lg": "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 px-4 py-2 rounded text-sm sm:text-base font-medium shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl",
        destructive:
          "border bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:hover:bg-destructive/80",
        outline:
          "border-b-gradient-to-r bg-background hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/80 dark:hover:text-accent-foreground",
        secondary:
          "border border-b-gradient-to-r rounded-full inline-flex h-full w-50 items-center justify-center  bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/80 dark:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline dark:text-primary-foreground",
        primary: "inline-flex h-12 items-center justify-center rounded-full border border-gray-800 bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
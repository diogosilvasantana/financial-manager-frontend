import * as React from "react"
import { cn } from "@/lib/utils"

interface FinancialBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: "profit" | "loss" | "warning" | "info"
  children: React.ReactNode
}

const FinancialBadge = React.forwardRef<HTMLSpanElement, FinancialBadgeProps>(
  ({ variant, children, className, ...props }, ref) => {
    const getVariantClass = () => {
      switch (variant) {
        case "profit":
          return "bg-profit-light text-profit-foreground border border-profit/20"
        case "loss":
          return "bg-loss-light text-loss-foreground border border-loss/20"
        case "warning":
          return "bg-warning-light text-warning-foreground border border-warning/20"
        case "info":
          return "bg-info-light text-info-foreground border border-info/20"
        default:
          return "bg-info-light text-info-foreground border border-info/20"
      }
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
          getVariantClass(),
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

FinancialBadge.displayName = "FinancialBadge"

export { FinancialBadge }
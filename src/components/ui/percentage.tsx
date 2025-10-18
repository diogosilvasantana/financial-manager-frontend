import * as React from "react"
import { cn } from "@/lib/utils"

interface PercentageProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  variant?: "positive" | "negative" | "neutral"
  showSign?: boolean
  decimals?: number
}

const Percentage = React.forwardRef<HTMLSpanElement, PercentageProps>(
  ({ 
    value, 
    variant = "neutral", 
    showSign = true, 
    decimals = 2, 
    className, 
    ...props 
  }, ref) => {
    const formatValue = (val: number) => {
      const sign = showSign && val > 0 ? "+" : ""
      return `${sign}${val.toFixed(decimals)}%`
    }

    const getVariantClass = () => {
      if (variant !== "neutral") {
        return variant === "positive" ? "text-profit" : "text-loss"
      }
      // Auto-detect based on value
      if (value > 0) return "text-profit"
      if (value < 0) return "text-loss"
      return "text-muted-foreground"
    }

    return (
      <span
        ref={ref}
        className={cn(getVariantClass(), "font-medium text-sm", className)}
        {...props}
      >
        {formatValue(value)}
      </span>
    )
  }
)

Percentage.displayName = "Percentage"

export { Percentage }
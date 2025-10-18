import * as React from "react"
import { cn } from "@/lib/utils"

interface CurrencyProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  variant?: "positive" | "negative" | "neutral"
  prefix?: string
  decimals?: number
}

const Currency = React.forwardRef<HTMLSpanElement, CurrencyProps>(
  ({ 
    value, 
    variant = "neutral", 
    prefix = "R$ ", 
    decimals = 2, 
    className, 
    ...props 
  }, ref) => {
    const formatValue = (val: number) => {
      return val.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    }

    const getVariantClass = () => {
      switch (variant) {
        case "positive":
          return "text-profit font-semibold font-mono"
        case "negative":
          return "text-loss font-semibold font-mono"
        default:
          return "text-foreground font-medium font-mono"
      }
    }

    return (
      <span
        ref={ref}
        className={cn(getVariantClass(), "tabular-nums", className)}
        {...props}
      >
        {prefix}{formatValue(value)}
      </span>
    )
  }
)

Currency.displayName = "Currency"

export { Currency }
import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number | React.ReactNode
  subtitle?: string
  icon?: LucideIcon
  variant?: "default" | "financial" | "metric"
  trend?: "up" | "down" | "neutral"
  trendValue?: string
}

const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ 
    title, 
    value, 
    subtitle, 
    icon: Icon, 
    variant = "default", 
    trend = "neutral",
    trendValue,
    className, 
    ...props 
  }, ref) => {
    const getCardClass = () => {
      switch (variant) {
        case "financial":
          return "border-l-4 border-l-primary bg-gradient-to-r from-card to-primary/5"
        case "metric":
          return "bg-gradient-to-br from-card to-muted/30 shadow-lg"
        default:
          return "hover:shadow-lg transition-all duration-200"
      }
    }

    const getTrendClass = () => {
      switch (trend) {
        case "up":
          return "text-profit"
        case "down":
          return "text-loss"
        default:
          return "text-muted-foreground"
      }
    }

    const getTrendIcon = () => {
      switch (trend) {
        case "up":
          return "↗"
        case "down":
          return "↘"
        default:
          return ""
      }
    }

    return (
      <Card ref={ref} className={cn(getCardClass(), className)} {...props}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold animate-number-count">
            {value}
          </div>
          {(subtitle || trendValue) && (
            <div className="flex items-center justify-between mt-2">
              {subtitle && (
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              )}
              {trendValue && (
                <span className={cn("text-xs font-medium flex items-center", getTrendClass())}>
                  {getTrendIcon() && <span className="mr-1">{getTrendIcon()}</span>}
                  {trendValue}
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
)

MetricCard.displayName = "MetricCard"

export { MetricCard }
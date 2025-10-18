import * as React from "react"
import { cn } from "@/lib/utils"

interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "active" | "inactive" | "pending" | "error" | "success"
  label?: string
  showDot?: boolean
  size?: "sm" | "md" | "lg"
}

const StatusIndicator = React.forwardRef<HTMLDivElement, StatusIndicatorProps>(
  ({ status, label, showDot = true, size = "md", className, ...props }, ref) => {
    const getStatusConfig = () => {
      switch (status) {
        case "active":
          return {
            color: "bg-profit",
            textColor: "text-profit",
            label: label || "Ativo"
          }
        case "inactive":
          return {
            color: "bg-muted-foreground",
            textColor: "text-muted-foreground",
            label: label || "Inativo"
          }
        case "pending":
          return {
            color: "bg-warning",
            textColor: "text-warning",
            label: label || "Pendente"
          }
        case "error":
          return {
            color: "bg-loss",
            textColor: "text-loss",
            label: label || "Erro"
          }
        case "success":
          return {
            color: "bg-profit",
            textColor: "text-profit",
            label: label || "Sucesso"
          }
        default:
          return {
            color: "bg-muted-foreground",
            textColor: "text-muted-foreground",
            label: label || "Desconhecido"
          }
      }
    }

    const getSizeConfig = () => {
      switch (size) {
        case "sm":
          return {
            dotSize: "w-1.5 h-1.5",
            textSize: "text-xs",
            spacing: "space-x-1.5"
          }
        case "lg":
          return {
            dotSize: "w-3 h-3",
            textSize: "text-base",
            spacing: "space-x-3"
          }
        default:
          return {
            dotSize: "w-2 h-2",
            textSize: "text-sm",
            spacing: "space-x-2"
          }
      }
    }

    const statusConfig = getStatusConfig()
    const sizeConfig = getSizeConfig()

    return (
      <div
        ref={ref}
        className={cn("flex items-center", sizeConfig.spacing, className)}
        {...props}
      >
        {showDot && (
          <div 
            className={cn(
              "rounded-full flex-shrink-0",
              sizeConfig.dotSize,
              statusConfig.color
            )} 
          />
        )}
        <span 
          className={cn(
            "font-medium",
            sizeConfig.textSize,
            statusConfig.textColor
          )}
        >
          {statusConfig.label}
        </span>
      </div>
    )
  }
)

StatusIndicator.displayName = "StatusIndicator"

export { StatusIndicator }
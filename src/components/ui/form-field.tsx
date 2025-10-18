import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  error?: string
  required?: boolean
  children: React.ReactNode
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, error, required, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <Label className={cn("text-sm font-medium", error && "text-destructive")}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        {children}
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)

FormField.displayName = "FormField"

export { FormField }
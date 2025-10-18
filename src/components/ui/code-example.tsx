"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeExampleProps {
  title: string
  description?: string
  code: string
  children?: React.ReactNode
  className?: string
}

export function CodeExample({ 
  title, 
  description, 
  code, 
  children,
  className 
}: CodeExampleProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="h-8 w-8 p-0"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {children && (
          <div className="p-4 border rounded-lg bg-muted/50">
            {children}
          </div>
        )}
        <div className="relative">
          <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto">
            <code className="text-foreground">{code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

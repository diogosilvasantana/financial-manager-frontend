"use client"

import * as React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AreaChartData {
  name: string
  [key: string]: string | number
}

interface FinancialAreaChartProps {
  data: AreaChartData[]
  title?: string
  description?: string
  dataKeys?: { key: string; color: string; name: string }[]
  height?: number
  className?: string
}

export function FinancialAreaChart({
  data,
  title = "Gráfico de Área",
  description,
  dataKeys = [{ key: "value", color: "#8884d8", name: "Valor" }],
  height = 300,
  className
}: FinancialAreaChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
              labelFormatter={(label) => `Período: ${label}`}
            />
            <Legend />
            {dataKeys.map(({ key, color, name }) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId="1"
                stroke={color}
                fill={color}
                fillOpacity={0.6}
                name={name}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

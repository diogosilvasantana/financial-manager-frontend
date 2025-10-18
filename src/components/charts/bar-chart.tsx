"use client"

import * as React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BarChartData {
  name: string
  [key: string]: string | number
}

interface BarChartProps {
  data: BarChartData[]
  title?: string
  description?: string
  dataKeys?: { key: string; color: string; name: string }[]
  height?: number
  className?: string
}

export function FinancialBarChart({
  data,
  title = "Gráfico de Barras",
  description,
  dataKeys = [{ key: "value", color: "#8884d8", name: "Valor" }],
  height = 300,
  className
}: BarChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
              labelFormatter={(label) => `Período: ${label}`}
            />
            <Legend />
            {dataKeys.map(({ key, color, name }) => (
              <Bar 
                key={key}
                dataKey={key} 
                fill={color} 
                name={name}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

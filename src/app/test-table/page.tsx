"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable, SortableHeader } from "@/components/ui/data-table";
import { Currency } from "@/components/ui/currency";
import { Percentage } from "@/components/ui/percentage";
import { FinancialBadge } from "@/components/ui/financial-badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Plus } from "lucide-react";
import Link from "next/link";

// Dados de exemplo
const operacoesData = [
  {
    id: "1",
    data: "18/10/2025",
    ativo: "PETR4",
    operacao: "Compra",
    quantidade: 100,
    precoUnitario: 28.50,
    valorTotal: 2850.00,
    corretora: "Clear",
    resultado: 450.00,
    status: "Realizada"
  },
  {
    id: "2",
    data: "17/10/2025",
    ativo: "VALE3",
    operacao: "Venda",
    quantidade: 200,
    precoUnitario: 21.00,
    valorTotal: 4200.00,
    corretora: "Rico",
    resultado: -125.50,
    status: "Realizada"
  },
  {
    id: "3",
    data: "16/10/2025",
    ativo: "ITUB4",
    operacao: "Compra",
    quantidade: 500,
    precoUnitario: 3.50,
    valorTotal: 1750.00,
    corretora: "XP",
    resultado: 320.75,
    status: "Realizada"
  },
  {
    id: "4",
    data: "15/10/2025",
    ativo: "BBDC4",
    operacao: "Venda",
    quantidade: 300,
    precoUnitario: 15.80,
    valorTotal: 4740.00,
    corretora: "Clear",
    resultado: 180.20,
    status: "Pendente"
  },
  {
    id: "5",
    data: "14/10/2025",
    ativo: "WEGE3",
    operacao: "Compra",
    quantidade: 150,
    precoUnitario: 42.30,
    valorTotal: 6345.00,
    corretora: "Rico",
    resultado: -89.40,
    status: "Realizada"
  },
];

const columns = [
  {
    accessorKey: "data",
    header: ({ column }: any) => <SortableHeader column={column}>Data</SortableHeader>,
    cell: ({ row }: any) => (
      <span className="font-mono text-sm">{row.getValue("data")}</span>
    ),
  },
  {
    accessorKey: "ativo",
    header: ({ column }: any) => <SortableHeader column={column}>Ativo</SortableHeader>,
    cell: ({ row }: any) => (
      <span className="font-semibold">{row.getValue("ativo")}</span>
    ),
  },
  {
    accessorKey: "operacao",
    header: "Operação",
    cell: ({ row }: any) => {
      const operacao = row.getValue("operacao")
      return (
        <FinancialBadge variant={operacao === "Compra" ? "info" : "warning"}>
          {operacao}
        </FinancialBadge>
      )
    },
  },
  {
    accessorKey: "quantidade",
    header: ({ column }: any) => <SortableHeader column={column}>Qtd</SortableHeader>,
    cell: ({ row }: any) => (
      <span className="font-mono">{row.getValue("quantidade")}</span>
    ),
  },
  {
    accessorKey: "precoUnitario",
    header: ({ column }: any) => <SortableHeader column={column}>Preço Unit.</SortableHeader>,
    cell: ({ row }: any) => (
      <Currency value={row.getValue("precoUnitario")} variant="neutral" />
    ),
  },
  {
    accessorKey: "valorTotal",
    header: ({ column }: any) => <SortableHeader column={column}>Valor Total</SortableHeader>,
    cell: ({ row }: any) => (
      <Currency value={row.getValue("valorTotal")} variant="neutral" />
    ),
  },
  {
    accessorKey: "corretora",
    header: "Corretora",
    cell: ({ row }: any) => (
      <span className="text-sm">{row.getValue("corretora")}</span>
    ),
  },
  {
    accessorKey: "resultado",
    header: ({ column }: any) => <SortableHeader column={column}>Resultado</SortableHeader>,
    cell: ({ row }: any) => {
      const valor = row.getValue("resultado") as number
      return <Currency value={valor} variant={valor >= 0 ? "positive" : "negative"} />
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: any) => {
      const status = row.getValue("status")
      return (
        <FinancialBadge variant={status === "Realizada" ? "profit" : "warning"}>
          {status}
        </FinancialBadge>
      )
    },
  },
];

export default function TestTablePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Teste de Data Table</h1>
              <p className="text-muted-foreground">
                Tabela avançada com ordenação, filtros e paginação
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nova Operação
              </Button>
            </div>
          </div>
        </div>

        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-muted-foreground">Total Operações</div>
              <div className="text-2xl font-bold">{operacoesData.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-muted-foreground">Lucro Total</div>
              <div className="text-2xl font-bold">
                <Currency 
                  value={operacoesData.reduce((acc, op) => acc + (op.resultado > 0 ? op.resultado : 0), 0)} 
                  variant="positive" 
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-muted-foreground">Prejuízo Total</div>
              <div className="text-2xl font-bold">
                <Currency 
                  value={Math.abs(operacoesData.reduce((acc, op) => acc + (op.resultado < 0 ? op.resultado : 0), 0))} 
                  variant="negative" 
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-muted-foreground">Resultado Líquido</div>
              <div className="text-2xl font-bold">
                <Currency 
                  value={operacoesData.reduce((acc, op) => acc + op.resultado, 0)} 
                  variant={operacoesData.reduce((acc, op) => acc + op.resultado, 0) >= 0 ? "positive" : "negative"} 
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabela */}
        <Card>
          <CardHeader>
            <CardTitle>Operações Financeiras</CardTitle>
            <CardDescription>
              Histórico completo de operações com filtros e ordenação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={columns}
              data={operacoesData}
              searchKey="ativo"
              searchPlaceholder="Buscar por ativo..."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
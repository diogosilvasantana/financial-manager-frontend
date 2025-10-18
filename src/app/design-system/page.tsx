import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Currency } from "@/components/ui/currency";
import { Percentage } from "@/components/ui/percentage";
import { MetricCard } from "@/components/ui/metric-card";
import { FinancialBadge } from "@/components/ui/financial-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeExample } from "@/components/ui/code-example";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FinancialLineChart, FinancialBarChart, FinancialPieChart, FinancialAreaChart } from "@/components/charts";

import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calculator, 
  PieChart, 
  BarChart3,
  Wallet,
  CreditCard,
  FileText,
  Calendar,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Building2,
  Receipt,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Link>
          
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-foreground">Design System</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema de design completo para o Financial Manager - 
              Componentes, cores, tipografia e padrões visuais profissionais.
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="button" className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-[repeat(13,minmax(0,1fr))] min-w-[900px]">
              <TabsTrigger value="button">Button</TabsTrigger>
              <TabsTrigger value="card">Card</TabsTrigger>
              <TabsTrigger value="input">Input</TabsTrigger>
              <TabsTrigger value="select">Select</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
              <TabsTrigger value="currency">Currency</TabsTrigger>
              <TabsTrigger value="percentage">Percentage</TabsTrigger>
              <TabsTrigger value="metric-card">MetricCard</TabsTrigger>
              <TabsTrigger value="badge">Badge</TabsTrigger>
              <TabsTrigger value="alert">Alert</TabsTrigger>
              <TabsTrigger value="form">Form</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
            </TabsList>
          </div>

          {/* Button Tab */}
          <TabsContent value="button" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Button Component</h2>
                <p className="text-muted-foreground">Botões com diferentes variantes e tamanhos</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CodeExample
                  title="Variantes de Botão"
                  description="Diferentes estilos visuais para diferentes ações"
                  code={`import { Button } from "@/components/ui/button";

// Variantes básicas
<Button>Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destrutivo</Button>`}
                >
                  <div className="flex flex-wrap gap-3">
                    <Button>Primário</Button>
                    <Button variant="secondary">Secundário</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destrutivo</Button>
                  </div>
                </CodeExample>

                <CodeExample
                  title="Tamanhos"
                  description="Diferentes tamanhos para diferentes contextos"
                  code={`<Button size="sm">Pequeno</Button>
<Button size="default">Padrão</Button>
<Button size="lg">Grande</Button>
<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Pequeno</Button>
                    <Button size="default">Padrão</Button>
                    <Button size="lg">Grande</Button>
                  </div>
                </CodeExample>

                <CodeExample
                  title="Botões com Ícones"
                  description="Botões com ícones para melhor UX"
                  code={`import { Calculator, FileText, TrendingUp } from "lucide-react";

<Button>
  <Calculator className="w-4 h-4 mr-2" />
  Calcular IR
</Button>
<Button variant="outline">
  <FileText className="w-4 h-4 mr-2" />
  Gerar Relatório
</Button>
<Button variant="secondary">
  <TrendingUp className="w-4 h-4 mr-2" />
  Ver Gráficos
</Button>`}
                >
                  <div className="flex flex-wrap gap-3">
                    <Button>
                      <Calculator className="w-4 h-4 mr-2" />
                      Calcular IR
                    </Button>
                    <Button variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Gerar Relatório
                    </Button>
                    <Button variant="secondary">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Ver Gráficos
                    </Button>
                  </div>
                </CodeExample>
              </div>
            </div>
          </TabsContent>

          {/* Card Tab */}
          <TabsContent value="card" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Card Component</h2>
                <p className="text-muted-foreground">Container para agrupar conteúdo relacionado</p>
              </div>

              <CodeExample
                title="Card Básico"
                description="Estrutura básica de um card com header e content"
                code={`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do conteúdo</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card aqui...</p>
  </CardContent>
</Card>`}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Título do Card</CardTitle>
                    <CardDescription>Descrição do conteúdo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Conteúdo do card aqui...</p>
                  </CardContent>
                </Card>
              </CodeExample>
            </div>
          </TabsContent>

          {/* Input Tab */}
          <TabsContent value="input" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Input Component</h2>
                <p className="text-muted-foreground">Campo de entrada de texto</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CodeExample
                  title="Input Básico"
                  description="Campo de entrada simples"
                  code={`import { Input } from "@/components/ui/input";

<Input placeholder="Digite aqui..." />
<Input type="email" placeholder="email@exemplo.com" />
<Input type="password" placeholder="Senha" />`}
                >
                  <div className="space-y-3">
                    <Input placeholder="Digite aqui..." />
                    <Input type="email" placeholder="email@exemplo.com" />
                    <Input type="password" placeholder="Senha" />
                  </div>
                </CodeExample>

                <CodeExample
                  title="Input com Label"
                  description="Input com label e descrição"
                  code={`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="space-y-2">
  <Label htmlFor="nome">Nome</Label>
  <Input id="nome" placeholder="Seu nome completo" />
</div>`}
                >
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome" placeholder="Seu nome completo" />
                  </div>
                </CodeExample>
              </div>
            </div>
          </TabsContent>

          {/* Currency Tab */}
          <TabsContent value="currency" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Currency Component</h2>
                <p className="text-muted-foreground">Formatação automática de valores monetários</p>
              </div>

              <CodeExample
                title="Variantes de Currency"
                description="Diferentes variantes visuais baseadas no contexto"
                code={`import { Currency } from "@/components/ui/currency";

{/* Valor positivo (lucro) */}
<Currency value={15420.75} variant="positive" className="text-2xl" />

{/* Valor negativo (prejuízo) */}
<Currency value={2840.60} variant="negative" className="text-2xl" />

{/* Valor neutro */}
<Currency value={125430.50} variant="neutral" className="text-2xl" />

{/* Com configurações personalizadas */}
<Currency 
  value={2500.00} 
  prefix="US$ " 
  decimals={2} 
  className="text-lg" 
/>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label>Valor Positivo (Lucro)</Label>
                    <Currency value={15420.75} variant="positive" className="text-2xl" />
                  </div>
                  <div className="space-y-3">
                    <Label>Valor Negativo (Prejuízo)</Label>
                    <Currency value={2840.60} variant="negative" className="text-2xl" />
                  </div>
                  <div className="space-y-3">
                    <Label>Valor Neutro</Label>
                    <Currency value={125430.50} variant="neutral" className="text-2xl" />
                  </div>
                </div>
              </CodeExample>
            </div>
          </TabsContent>

          {/* Percentage Tab */}
          <TabsContent value="percentage" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Percentage Component</h2>
                <p className="text-muted-foreground">Formatação automática de percentuais</p>
              </div>

              <CodeExample
                title="Variantes de Percentage"
                description="Cores automáticas baseadas no valor"
                code={`import { Percentage } from "@/components/ui/percentage";

{/* Ganhos (valores positivos) */}
<Percentage value={25.8} className="text-xl" />
<Percentage value={5.2} className="text-xl" />

{/* Perdas (valores negativos) */}
<Percentage value={-3.1} className="text-xl" />
<Percentage value={-12.7} className="text-xl" />

{/* Com configurações personalizadas */}
<Percentage 
  value={15.5} 
  variant="positive" 
  showSign={true} 
  decimals={1} 
/>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-3">
                    <Label>Ganho Alto</Label>
                    <Percentage value={25.8} className="text-xl" />
                  </div>
                  <div className="space-y-3">
                    <Label>Ganho Moderado</Label>
                    <Percentage value={5.2} className="text-xl" />
                  </div>
                  <div className="space-y-3">
                    <Label>Perda Moderada</Label>
                    <Percentage value={-3.1} className="text-xl" />
                  </div>
                  <div className="space-y-3">
                    <Label>Perda Alta</Label>
                    <Percentage value={-12.7} className="text-xl" />
                  </div>
                </div>
              </CodeExample>
            </div>
          </TabsContent>

          {/* MetricCard Tab */}
          <TabsContent value="metric-card" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">MetricCard Component</h2>
                <p className="text-muted-foreground">Cartões para exibir métricas e KPIs</p>
              </div>

              <CodeExample
                title="MetricCard Básico"
                description="Cartão para exibir métricas importantes"
                code={`import { MetricCard } from "@/components/ui/metric-card";
import { Currency } from "@/components/ui/currency";
import { DollarSign, TrendingUp } from "lucide-react";

{/* Card básico */}
<MetricCard
  title="Saldo Total"
  value={<Currency value={125430.50} variant="positive" />}
  subtitle="Carteira de investimentos"
  icon={DollarSign}
  variant="metric"
  trend="up"
  trendValue="+12.5% no mês"
/>

{/* Card financeiro */}
<MetricCard
  title="IR Pendente"
  value={<Currency value={2840.60} variant="negative" />}
  subtitle="Vencimento: 30/11/2025"
  icon={Calculator}
  variant="financial"
  trend="down"
  trendValue="Atenção"
/>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <MetricCard
                    title="Saldo Total"
                    value={<Currency value={125430.50} variant="positive" />}
                    subtitle="Carteira de investimentos"
                    icon={DollarSign}
                    variant="metric"
                    trend="up"
                    trendValue="+12.5% no mês"
                  />
                  
                  <MetricCard
                    title="IR Pendente"
                    value={<Currency value={2840.60} variant="negative" />}
                    subtitle="Vencimento: 30/11/2025"
                    icon={Calculator}
                    variant="financial"
                    trend="down"
                    trendValue="Atenção"
                  />
                  
                  <MetricCard
                    title="Lucro Mensal"
                    value={<Currency value={8420.30} variant="positive" />}
                    subtitle="Outubro 2025"
                    icon={TrendingUp}
                    trend="up"
                    trendValue="+18.2%"
                  />
                  
                  <MetricCard
                    title="Operações"
                    value="247"
                    subtitle="Este mês"
                    icon={Receipt}
                    trendValue="+23 operações"
                  />
                </div>
              </CodeExample>
            </div>
          </TabsContent>

          {/* Badge Tab */}
          <TabsContent value="badge" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Badge Components</h2>
                <p className="text-muted-foreground">Badges para status e categorias</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CodeExample
                  title="Badge Padrão"
                  description="Badge básico com diferentes variantes"
                  code={`import { Badge } from "@/components/ui/badge";

<Badge>Padrão</Badge>
<Badge variant="secondary">Secundário</Badge>
<Badge variant="destructive">Destrutivo</Badge>
<Badge variant="outline">Outline</Badge>`}
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge>Padrão</Badge>
                    <Badge variant="secondary">Secundário</Badge>
                    <Badge variant="destructive">Destrutivo</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </CodeExample>

                <CodeExample
                  title="FinancialBadge"
                  description="Badge especializado para contextos financeiros"
                  code={`import { FinancialBadge } from "@/components/ui/financial-badge";

{/* Status de operações */}
<FinancialBadge variant="profit">Lucro Realizado</FinancialBadge>
<FinancialBadge variant="loss">Prejuízo</FinancialBadge>
<FinancialBadge variant="warning">Aguardando</FinancialBadge>
<FinancialBadge variant="info">Processando</FinancialBadge>`}
                >
                  <div className="flex flex-wrap gap-2">
                    <FinancialBadge variant="profit">Lucro Realizado</FinancialBadge>
                    <FinancialBadge variant="loss">Prejuízo</FinancialBadge>
                    <FinancialBadge variant="warning">Aguardando</FinancialBadge>
                    <FinancialBadge variant="info">Processando</FinancialBadge>
                  </div>
                </CodeExample>
              </div>
            </div>
          </TabsContent>

          {/* Alert Tab */}
          <TabsContent value="alert" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Alert Components</h2>
                <p className="text-muted-foreground">Alertas para feedback ao usuário</p>
              </div>

              <CodeExample
                title="Diferentes Tipos de Alerta"
                description="Alertas para diferentes tipos de feedback"
                code={`import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, AlertTriangle, XCircle, CheckCircle } from "lucide-react";

{/* Alerta informativo */}
<Alert>
  <Info className="h-4 w-4" />
  <AlertDescription>
    <strong>Informação:</strong> Seus dados foram salvos com sucesso.
  </AlertDescription>
</Alert>

{/* Alerta de aviso */}
<Alert className="border-warning bg-warning-light">
  <AlertTriangle className="h-4 w-4" />
  <AlertDescription>
    <strong>Atenção:</strong> Você possui DARFs com vencimento nos próximos 7 dias.
  </AlertDescription>
</Alert>

{/* Alerta de erro */}
<Alert variant="destructive">
  <XCircle className="h-4 w-4" />
  <AlertDescription>
    <strong>Erro:</strong> Não foi possível processar a operação.
  </AlertDescription>
</Alert>

{/* Alerta de sucesso */}
<Alert className="border-profit bg-profit-light">
  <CheckCircle className="h-4 w-4" />
  <AlertDescription>
    <strong>Sucesso:</strong> Cálculo de IR realizado com sucesso!
  </AlertDescription>
</Alert>`}
              >
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Informação:</strong> Seus dados foram salvos com sucesso no sistema.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-warning bg-warning-light">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Atenção:</strong> Você possui DARFs com vencimento nos próximos 7 dias.
                    </AlertDescription>
                  </Alert>

                  <Alert variant="destructive">
                    <XCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Erro:</strong> Não foi possível processar a operação. Tente novamente.
                    </AlertDescription>
                  </Alert>

                  <Alert className="border-profit bg-profit-light">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Sucesso:</strong> Cálculo de IR realizado com sucesso!
                    </AlertDescription>
                  </Alert>
                </div>
              </CodeExample>
            </div>
          </TabsContent>

          {/* Select Tab */}
          <TabsContent value="select" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Select Component</h2>
                <p className="text-muted-foreground">Seletor dropdown para escolha de opções</p>
              </div>

              <CodeExample
                title="Select Básico"
                description="Componente select básico com opções"
                code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Selecione uma opção" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Opção 1</SelectItem>
    <SelectItem value="option2">Opção 2</SelectItem>
    <SelectItem value="option3">Opção 3</SelectItem>
  </SelectContent>
</Select>`}
              >
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Opção 1</SelectItem>
                    <SelectItem value="option2">Opção 2</SelectItem>
                    <SelectItem value="option3">Opção 3</SelectItem>
                  </SelectContent>
                </Select>
              </CodeExample>
            </div>
          </TabsContent>

          {/* Table Tab */}
          <TabsContent value="table" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Table Component</h2>
                <p className="text-muted-foreground">Tabelas para exibir dados estruturados</p>
              </div>

              <CodeExample
                title="Tabela Básica"
                description="Estrutura básica de uma tabela"
                code={`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Ativo</TableHead>
      <TableHead>Quantidade</TableHead>
      <TableHead>Preço</TableHead>
      <TableHead className="text-right">Total</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>PETR4</TableCell>
      <TableCell>100</TableCell>
      <TableCell>R$ 42,50</TableCell>
      <TableCell className="text-right">R$ 4.250,00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>VALE3</TableCell>
      <TableCell>200</TableCell>
      <TableCell>R$ 68,30</TableCell>
      <TableCell className="text-right">R$ 13.660,00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
              >
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ativo</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>PETR4</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>R$ 42,50</TableCell>
                      <TableCell className="text-right">R$ 4.250,00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>VALE3</TableCell>
                      <TableCell>200</TableCell>
                      <TableCell>R$ 68,30</TableCell>
                      <TableCell className="text-right">R$ 13.660,00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CodeExample>
            </div>
          </TabsContent>

          {/* Charts Tab */}
          <TabsContent value="charts" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Chart Components</h2>
                <p className="text-muted-foreground">Gráficos para visualização de dados financeiros</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CodeExample
                  title="Line Chart"
                  description="Gráfico de linha para mostrar tendências ao longo do tempo"
                  code={`import { FinancialLineChart } from "@/components/charts";

const data = [
  { name: "Jan", value: 40000 },
  { name: "Fev", value: 35000 },
  { name: "Mar", value: 42000 },
  { name: "Abr", value: 38000 },
  { name: "Mai", value: 45000 },
];

<FinancialLineChart
  data={data}
  title="Evolução do Patrimônio"
  description="Crescimento mensal dos investimentos"
  dataKey="value"
  color="#22c55e"
  height={300}
/>`}
                >
                  <FinancialLineChart
                    data={[
                      { name: "Jan", value: 40000 },
                      { name: "Fev", value: 35000 },
                      { name: "Mar", value: 42000 },
                      { name: "Abr", value: 38000 },
                      { name: "Mai", value: 45000 }
                    ]}
                    title="Evolução do Patrimônio"
                    description="Crescimento mensal dos investimentos"
                    dataKey="value"
                    color="#22c55e"
                    height={250}
                  />
                </CodeExample>

                <CodeExample
                  title="Bar Chart"
                  description="Gráfico de barras para comparar categorias"
                  code={`import { FinancialBarChart } from "@/components/charts";

const data = [
  { name: "Ações", valor: 45000, lucro: 5500 },
  { name: "Renda Fixa", valor: 25000, lucro: 1200 },
  { name: "FIIs", valor: 18000, lucro: 900 },
];

<FinancialBarChart
  data={data}
  title="Distribuição por Categoria"
  dataKeys={[
    { key: "valor", color: "#3b82f6", name: "Valor Investido" },
    { key: "lucro", color: "#22c55e", name: "Lucro" }
  ]}
  height={300}
/>`}
                >
                  <FinancialBarChart
                    data={[
                      { name: "Ações", valor: 45000, lucro: 5500 },
                      { name: "Renda Fixa", valor: 25000, lucro: 1200 },
                      { name: "FIIs", valor: 18000, lucro: 900 }
                    ]}
                    title="Distribuição por Categoria"
                    dataKeys={[
                      { key: "valor", color: "#3b82f6", name: "Valor Investido" },
                      { key: "lucro", color: "#22c55e", name: "Lucro" }
                    ]}
                    height={250}
                  />
                </CodeExample>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CodeExample
                  title="Pie Chart"
                  description="Gráfico de pizza para mostrar proporções"
                  code={`import { FinancialPieChart } from "@/components/charts";

const data = [
  { name: "Ações", value: 45000, color: "#3b82f6" },
  { name: "Renda Fixa", value: 25000, color: "#22c55e" },
  { name: "FIIs", value: 18000, color: "#f59e0b" },
  { name: "Crypto", value: 12000, color: "#ef4444" }
];

<FinancialPieChart
  data={data}
  title="Composição da Carteira"
  description="Distribuição percentual dos investimentos"
  height={300}
/>`}
                >
                  <FinancialPieChart
                    data={[
                      { name: "Ações", value: 45000, color: "#3b82f6" },
                      { name: "Renda Fixa", value: 25000, color: "#22c55e" },
                      { name: "FIIs", value: 18000, color: "#f59e0b" },
                      { name: "Crypto", value: 12000, color: "#ef4444" }
                    ]}
                    title="Composição da Carteira"
                    description="Distribuição percentual dos investimentos"
                    height={250}
                  />
                </CodeExample>

                <CodeExample
                  title="Area Chart"
                  description="Gráfico de área para mostrar volumes acumulados"
                  code={`import { FinancialAreaChart } from "@/components/charts";

const data = [
  { name: "Jan", receitas: 40000, despesas: 20000 },
  { name: "Fev", receitas: 38000, despesas: 22000 },
  { name: "Mar", receitas: 45000, despesas: 18000 },
];

<FinancialAreaChart
  data={data}
  title="Fluxo de Caixa"
  dataKeys={[
    { key: "receitas", color: "#22c55e", name: "Receitas" },
    { key: "despesas", color: "#ef4444", name: "Despesas" }
  ]}
  height={300}
/>`}
                >
                  <FinancialAreaChart
                    data={[
                      { name: "Jan", receitas: 40000, despesas: 20000 },
                      { name: "Fev", receitas: 38000, despesas: 22000 },
                      { name: "Mar", receitas: 45000, despesas: 18000 },
                      { name: "Abr", receitas: 42000, despesas: 19000 },
                      { name: "Mai", receitas: 48000, despesas: 21000 }
                    ]}
                    title="Fluxo de Caixa"
                    dataKeys={[
                      { key: "receitas", color: "#22c55e", name: "Receitas" },
                      { key: "despesas", color: "#ef4444", name: "Despesas" }
                    ]}
                    height={250}
                  />
                </CodeExample>
              </div>
            </div>
          </TabsContent>

          {/* Form Tab */}
          <TabsContent value="form" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Form Example</h2>
                <p className="text-muted-foreground">Exemplo de formulário usando os componentes</p>
              </div>

              <CodeExample
                title="Formulário Básico"
                description="Exemplo de formulário com vários componentes"
                code={`import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

<form className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="nome">Nome</Label>
      <Input id="nome" placeholder="Seu nome completo" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="email@exemplo.com" />
    </div>
  </div>
  <div className="space-y-2">
    <Label>Categoria</Label>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecione uma categoria" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="investimento">Investimento</SelectItem>
        <SelectItem value="renda-fixa">Renda Fixa</SelectItem>
        <SelectItem value="acao">Ações</SelectItem>
      </SelectContent>
    </Select>
  </div>
  <Button type="submit">Salvar</Button>
</form>`}
              >
                <div className="max-w-md mx-auto">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome</Label>
                        <Input id="nome" placeholder="Seu nome completo" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@exemplo.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Categoria</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="investimento">Investimento</SelectItem>
                          <SelectItem value="renda-fixa">Renda Fixa</SelectItem>
                          <SelectItem value="acao">Ações</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit">Salvar</Button>
                  </form>
                </div>
              </CodeExample>
            </div>
          </TabsContent>

          {/* Navigation Tab */}
          <TabsContent value="navigation" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Navigation Components</h2>
                <p className="text-muted-foreground">Componentes de navegação</p>
              </div>

              <CodeExample
                title="Tabs Navigation"
                description="Exemplo de navegação por tabs"
                code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<Tabs defaultValue="tab1" className="w-full">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Conteúdo da Tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Conteúdo da Tab 2</p>
  </TabsContent>
  <TabsContent value="tab3">
    <p>Conteúdo da Tab 3</p>
  </TabsContent>
</Tabs>`}
              >
                <Tabs defaultValue="tab1" className="w-full max-w-md mx-auto">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="p-4 border rounded-lg mt-4">
                    <p>Conteúdo da Tab 1</p>
                  </TabsContent>
                  <TabsContent value="tab2" className="p-4 border rounded-lg mt-4">
                    <p>Conteúdo da Tab 2</p>
                  </TabsContent>
                  <TabsContent value="tab3" className="p-4 border rounded-lg mt-4">
                    <p>Conteúdo da Tab 3</p>
                  </TabsContent>
                </Tabs>
              </CodeExample>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
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
      <div className="max-w-7xl mx-auto space-y-12">
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

        {/* Paleta de Cores */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Paleta de Cores</h2>
            <p className="text-muted-foreground">Cores otimizadas para aplicações financeiras</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Cores Primárias */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Primárias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="w-full h-12 bg-primary rounded-md shadow-sm"></div>
                  <p className="text-xs font-mono">Primary</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-secondary rounded-md shadow-sm"></div>
                  <p className="text-xs font-mono">Secondary</p>
                </div>
              </CardContent>
            </Card>

            {/* Cores Financeiras */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Financeiras</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="w-full h-12 bg-profit rounded-md shadow-sm"></div>
                  <p className="text-xs font-mono">Profit (Lucro)</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-loss rounded-md shadow-sm"></div>
                  <p className="text-xs font-mono">Loss (Prejuízo)</p>
                </div>
              </CardContent>
            </Card>

            {/* Cores de Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="w-full h-12 bg-warning rounded-md shadow-sm"></div>
                  <p className="text-xs font-mono">Warning</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-info rounded-md shadow-sm"></div>
                  <p className="text-xs font-mono">Info</p>
                </div>
              </CardContent>
            </Card>

            {/* Cores Neutras */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Neutras</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="w-full h-12 bg-muted rounded-md shadow-sm"></div>
                  <p className="text-xs font-mono">Muted</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-border rounded-md shadow-sm"></div>
                  <p className="text-xs font-mono">Border</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tipografia */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Tipografia</h2>
            <p className="text-muted-foreground">Hierarquia tipográfica otimizada para legibilidade</p>
          </div>
          
          <Card>
            <CardContent className="space-y-8 p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-6xl font-bold">Display - 60px</h1>
                  <p className="text-sm text-muted-foreground">Para títulos principais e hero sections</p>
                </div>
                <div className="space-y-2">
                  <h1 className="text-5xl font-bold">H1 - 48px</h1>
                  <p className="text-sm text-muted-foreground">Títulos de páginas</p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-4xl font-bold">H2 - 36px</h2>
                  <p className="text-sm text-muted-foreground">Títulos de seções</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">H3 - 30px</h3>
                  <p className="text-sm text-muted-foreground">Subtítulos</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base">Body - 16px - Texto padrão para conteúdo principal</p>
                  <p className="text-sm text-muted-foreground">Texto descritivo</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-6">
                <h4 className="text-lg font-semibold">Tipografia Financeira Especializada</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Valores Monetários (JetBrains Mono)</Label>
                    <Currency value={125430.50} className="text-3xl" />
                    <p className="text-xs text-muted-foreground">Fonte monospace para alinhamento perfeito</p>
                  </div>
                  <div className="space-y-3">
                    <Label>Percentuais</Label>
                    <Percentage value={12.5} className="text-xl" />
                    <p className="text-xs text-muted-foreground">Cores automáticas baseadas no valor</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Componentes Financeiros */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Componentes Financeiros</h2>
            <p className="text-muted-foreground">Componentes especializados para aplicações financeiras</p>
          </div>
          
          {/* Metric Cards */}
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

          {/* Currency Component */}
          <Card>
            <CardHeader>
              <CardTitle>Componente Currency</CardTitle>
              <CardDescription>Formatação automática de valores monetários com variantes visuais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Label>Valor Positivo (Lucro)</Label>
                  <Currency value={15420.75} variant="positive" className="text-2xl" />
                  <p className="text-xs text-muted-foreground">Cor verde automática</p>
                </div>
                <div className="space-y-3">
                  <Label>Valor Negativo (Prejuízo)</Label>
                  <Currency value={2840.60} variant="negative" className="text-2xl" />
                  <p className="text-xs text-muted-foreground">Cor vermelha automática</p>
                </div>
                <div className="space-y-3">
                  <Label>Valor Neutro</Label>
                  <Currency value={125430.50} variant="neutral" className="text-2xl" />
                  <p className="text-xs text-muted-foreground">Cor padrão</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Percentage Component */}
          <Card>
            <CardHeader>
              <CardTitle>Componente Percentage</CardTitle>
              <CardDescription>Formatação automática de percentuais com detecção inteligente de cores</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
            </CardContent>
          </Card>

          {/* Financial Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Badges Financeiros</CardTitle>
              <CardDescription>Status e categorias para contextos financeiros</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label>Status de Operações</Label>
                  <div className="flex flex-wrap gap-2">
                    <FinancialBadge variant="profit">Lucro Realizado</FinancialBadge>
                    <FinancialBadge variant="loss">Prejuízo</FinancialBadge>
                    <FinancialBadge variant="warning">Aguardando</FinancialBadge>
                    <FinancialBadge variant="info">Processando</FinancialBadge>
                  </div>
                </div>
                <div className="space-y-3">
                  <Label>Status de Impostos</Label>
                  <div className="flex flex-wrap gap-2">
                    <FinancialBadge variant="profit">Pago</FinancialBadge>
                    <FinancialBadge variant="warning">Vencendo</FinancialBadge>
                    <FinancialBadge variant="loss">Vencido</FinancialBadge>
                    <FinancialBadge variant="info">Calculado</FinancialBadge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Botões */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Sistema de Botões</h2>
            <p className="text-muted-foreground">Hierarquia visual clara para ações do usuário</p>
          </div>
          
          <Card>
            <CardContent className="space-y-8 p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Variantes</Label>
                  <div className="flex flex-wrap gap-3">
                    <Button>Primário</Button>
                    <Button variant="secondary">Secundário</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destrutivo</Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label>Tamanhos</Label>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm">Pequeno</Button>
                    <Button size="default">Padrão</Button>
                    <Button size="lg">Grande</Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Com Ícones</Label>
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
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Iconografia */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Iconografia</h2>
            <p className="text-muted-foreground">Ícones Lucide React otimizados para contexto financeiro</p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {[
                  { icon: TrendingUp, name: "TrendingUp", desc: "Crescimento" },
                  { icon: TrendingDown, name: "TrendingDown", desc: "Queda" },
                  { icon: DollarSign, name: "DollarSign", desc: "Valores" },
                  { icon: Calculator, name: "Calculator", desc: "Cálculos" },
                  { icon: PieChart, name: "PieChart", desc: "Gráficos" },
                  { icon: BarChart3, name: "BarChart3", desc: "Análises" },
                  { icon: Wallet, name: "Wallet", desc: "Carteira" },
                  { icon: CreditCard, name: "CreditCard", desc: "Pagamentos" },
                  { icon: FileText, name: "FileText", desc: "Documentos" },
                  { icon: Calendar, name: "Calendar", desc: "Datas" },
                  { icon: AlertTriangle, name: "AlertTriangle", desc: "Alertas" },
                  { icon: CheckCircle, name: "CheckCircle", desc: "Sucesso" },
                  { icon: XCircle, name: "XCircle", desc: "Erro" },
                  { icon: Info, name: "Info", desc: "Informação" },
                  { icon: Building2, name: "Building2", desc: "Corretoras" },
                  { icon: Receipt, name: "Receipt", desc: "Notas" },
                ].map(({ icon: Icon, name, desc }) => (
                  <div key={name} className="flex flex-col items-center space-y-2 text-center">
                    <Icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                    <span className="text-xs font-medium">{name}</span>
                    <span className="text-xs text-muted-foreground">{desc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Alertas e Feedback */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Alertas e Feedback</h2>
            <p className="text-muted-foreground">Sistema de comunicação visual com o usuário</p>
          </div>
          
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
        </section>

        {/* Footer */}
        <div className="text-center py-12 border-t">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Design System Implementado</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sistema completo de design para o Financial Manager, garantindo consistência visual 
              e experiência de usuário otimizada para aplicações financeiras.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <FinancialBadge variant="profit">v1.0.0</FinancialBadge>
              <FinancialBadge variant="info">Pronto para Produção</FinancialBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
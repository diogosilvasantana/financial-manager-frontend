import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Currency } from "@/components/ui/currency";
import { Percentage } from "@/components/ui/percentage";
import { FinancialBadge } from "@/components/ui/financial-badge";
import { MetricCard } from "@/components/ui/metric-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { 
  TrendingUp, 
  DollarSign, 
  Calculator,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Wifi,
  WifiOff
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Financial Manager</h1>
          <p className="text-xl text-muted-foreground">
            Testando todos os componentes do Design System
          </p>
        </div>

        {/* Status dos Componentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-profit" />
              Status dos Componentes
            </CardTitle>
            <CardDescription>Verificando quais componentes estão funcionando</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatusIndicator status="success" label="Currency ✓" />
              <StatusIndicator status="success" label="Percentage ✓" />
              <StatusIndicator status="success" label="FinancialBadge ✓" />
              <StatusIndicator status="success" label="MetricCard ✓" />
              <StatusIndicator status="success" label="LoadingSpinner ✓" />
              <StatusIndicator status="success" label="StatusIndicator ✓" />
              <StatusIndicator status="success" label="Switch ✓" />
              <StatusIndicator status="success" label="Checkbox ✓" />
              <StatusIndicator status="success" label="Progress ✓" />
            </div>
          </CardContent>
        </Card>

        {/* Teste Completo do StatusIndicator */}
        <Card>
          <CardHeader>
            <CardTitle>Componente StatusIndicator</CardTitle>
            <CardDescription>Indicadores de status com diferentes variantes e tamanhos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Variantes de Status */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Variantes de Status</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <StatusIndicator status="active" label="Sistema Online" />
                  <StatusIndicator status="success" label="Backup Concluído" />
                  <StatusIndicator status="pending" label="Processando Dados" />
                </div>
                <div className="space-y-3">
                  <StatusIndicator status="error" label="Falha na Conexão" />
                  <StatusIndicator status="inactive" label="Serviço Offline" />
                </div>
              </div>
            </div>

            <Separator />

            {/* Tamanhos */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Diferentes Tamanhos</h4>
              <div className="space-y-3">
                <StatusIndicator status="active" label="Pequeno" size="sm" />
                <StatusIndicator status="pending" label="Médio (padrão)" size="md" />
                <StatusIndicator status="success" label="Grande" size="lg" />
              </div>
            </div>

            <Separator />

            {/* Sem Dot */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Apenas Texto (sem dot)</h4>
              <div className="space-y-2">
                <StatusIndicator status="active" label="Status Ativo" showDot={false} />
                <StatusIndicator status="error" label="Status de Erro" showDot={false} />
              </div>
            </div>

            <Separator />

            {/* Contexto Financeiro */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Contexto Financeiro</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <StatusIndicator status="success" label="IR Pago" />
                  <StatusIndicator status="pending" label="DARF Vencendo" />
                  <StatusIndicator status="error" label="DARF Vencido" />
                </div>
                <div className="space-y-3">
                  <StatusIndicator status="active" label="Corretora Conectada" />
                  <StatusIndicator status="inactive" label="Corretora Offline" />
                  <StatusIndicator status="pending" label="Sincronizando Notas" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Teste de Componentes de Interface */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Componentes de Interface</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Switch</label>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <label htmlFor="notifications" className="text-sm">Receber notificações</label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Checkbox</label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">Aceito os termos</label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Progress</label>
                <Progress value={65} className="w-full" />
                <p className="text-xs text-muted-foreground">65% concluído</p>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Loading Spinner</label>
                <div className="flex items-center space-x-4">
                  <LoadingSpinner size="sm" />
                  <LoadingSpinner size="md" />
                  <LoadingSpinner size="lg" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges e Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Financial Badges</label>
                <div className="flex flex-wrap gap-2">
                  <FinancialBadge variant="profit">Lucro</FinancialBadge>
                  <FinancialBadge variant="loss">Prejuízo</FinancialBadge>
                  <FinancialBadge variant="warning">Atenção</FinancialBadge>
                  <FinancialBadge variant="info">Info</FinancialBadge>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Badges Padrão</label>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Status com Ícones</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4 text-profit" />
                    <StatusIndicator status="active" label="Conectado" showDot={false} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <WifiOff className="w-4 h-4 text-loss" />
                    <StatusIndicator status="error" label="Desconectado" showDot={false} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-warning" />
                    <StatusIndicator status="pending" label="Aguardando" showDot={false} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-6">
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
        </div>

        {/* Demonstração de Valores Financeiros */}
        <Card>
          <CardHeader>
            <CardTitle>Componentes Financeiros</CardTitle>
            <CardDescription>Currency e Percentage com formatação automática</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Valores Monetários</h4>
                <div className="space-y-2">
                  <Currency value={15420.75} variant="positive" />
                  <Currency value={2840.60} variant="negative" />
                  <Currency value={125430.50} variant="neutral" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Percentuais</h4>
                <div className="space-y-2">
                  <Percentage value={12.5} />
                  <Percentage value={-5.2} />
                  <Percentage value={0} />
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Combinados</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Lucro:</span>
                    <Currency value={8420.30} variant="positive" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Variação:</span>
                    <Percentage value={18.2} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Status:</span>
                    <StatusIndicator status="success" label="Positivo" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Link para Design System */}
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Design System Completo</h3>
            <p className="text-muted-foreground mb-4">
              Veja todos os componentes e documentação completa
            </p>
            <Button asChild>
              <a href="/design-system">Ver Design System</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
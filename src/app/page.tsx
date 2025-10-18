import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, CheckCircle, DollarSign, Calculator, AlertTriangle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900">Financial Manager</h1>
          <p className="text-xl text-slate-600">
            Sistema completo de gestão financeira para Day Trade e Investimentos
          </p>
        </div>

        {/* Cards de Demonstração Financeira */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Saldo Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">R\$ 125.430,50</div>
              <p className="text-xs text-muted-foreground">
                +12.5% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">IR Pendente</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">R\$ 2.840,60</div>
              <p className="text-xs text-muted-foreground">
                Vencimento: 30/11/2025
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lucro do Mês</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">R\$ 8.420,30</div>
              <p className="text-xs text-muted-foreground">
                Outubro 2025
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Teste Completo de Componentes */}
        <Card>
          <CardHeader>
            <CardTitle>Componentes shadcn/ui</CardTitle>
            <CardDescription>
              Testando componentes instalados
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Botões */}
            <div className="space-y-2">
              <Label>Botões:</Label>
              <div className="flex flex-wrap gap-2">
                <Button>Primário</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secundário</Button>
              </div>
            </div>

            <Separator />

            {/* Badges */}
            <div className="space-y-2">
              <Label>Badges:</Label>
              <div className="flex flex-wrap gap-2">
                <Badge>Pago</Badge>
                <Badge variant="secondary">Pendente</Badge>
                <Badge variant="destructive">Vencido</Badge>
                <Badge variant="outline">Calculado</Badge>
              </div>
            </div>

            <Separator />

            {/* Formulário */}
            <div className="space-y-2">
              <Label>Formulário:</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor</Label>
                  <Input id="valor" placeholder="R\$ 0,00" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status do Setup */}
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Setup concluído com sucesso!</strong> Todos os componentes shadcn/ui estão funcionando.
            Pronto para começar o desenvolvimento das funcionalidades.
          </AlertDescription>
        </Alert>

        {/* Próximos Passos */}
        <Card>
          <CardHeader>
            <CardTitle>Próximos Passos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">✅ Setup básico concluído</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">⏳ Instalar dependências principais</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">⏳ Criar estrutura de pastas</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">⏳ Desenvolver sistema de autenticação</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">⏳ Implementar IR/DARF (funcionalidade principal)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
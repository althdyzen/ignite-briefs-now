import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, Lightbulb, Target, Users } from "lucide-react";

interface BriefingData {
  companyName: string;
  industry: string;
  targetAudience: string;
  problem: string;
  solution: string;
  objectives: string;
  timeline: string;
  budget: string;
}

const steps = [
  {
    id: 1,
    title: "Informações da Startup",
    description: "Dados básicos sobre sua empresa",
    icon: Users,
  },
  {
    id: 2,
    title: "Problema & Solução",
    description: "Defina o problema e sua proposta de valor",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Objetivos & Recursos",
    description: "Metas, cronograma e orçamento",
    icon: Target,
  },
];

export const BriefingGenerator = ({ onBack }: { onBack: () => void }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [briefingData, setBriefingData] = useState<BriefingData>({
    companyName: "",
    industry: "",
    targetAudience: "",
    problem: "",
    solution: "",
    objectives: "",
    timeline: "",
    budget: "",
  });

  const updateData = (field: keyof BriefingData, value: string) => {
    setBriefingData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = () => {
    // Aqui você implementaria a lógica de geração do briefing
    console.log("Generating briefing with data:", briefingData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da Startup *</Label>
              <Input
                id="companyName"
                placeholder="Ex: TechInova"
                value={briefingData.companyName}
                onChange={(e) => updateData("companyName", e.target.value)}
                required
                aria-describedby="companyName-help"
              />
              <p id="companyName-help" className="text-sm text-muted-foreground">
                Como sua startup é conhecida no mercado?
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Setor de Atuação *</Label>
              <Select onValueChange={(value) => updateData("industry", value)}>
                <SelectTrigger id="industry" aria-describedby="industry-help">
                  <SelectValue placeholder="Selecione o setor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="edtech">Edtech</SelectItem>
                  <SelectItem value="healthtech">Healthtech</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="marketplace">Marketplace</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
              <p id="industry-help" className="text-sm text-muted-foreground">
                Em que segmento sua startup atua?
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="targetAudience">Público-Alvo *</Label>
              <Textarea
                id="targetAudience"
                placeholder="Ex: Pequenos empreendedores entre 25-45 anos que buscam soluções financeiras digitais..."
                value={briefingData.targetAudience}
                onChange={(e) => updateData("targetAudience", e.target.value)}
                rows={3}
                required
                aria-describedby="targetAudience-help"
              />
              <p id="targetAudience-help" className="text-sm text-muted-foreground">
                Descreva detalhadamente quem são seus clientes ideais
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="problem">Problema que Resolve *</Label>
              <Textarea
                id="problem"
                placeholder="Descreva o problema principal que sua startup resolve..."
                value={briefingData.problem}
                onChange={(e) => updateData("problem", e.target.value)}
                rows={4}
                required
                aria-describedby="problem-help"
              />
              <p id="problem-help" className="text-sm text-muted-foreground">
                Qual dor do mercado sua startup alivia?
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Sua Solução *</Label>
              <Textarea
                id="solution"
                placeholder="Explique como sua startup resolve esse problema..."
                value={briefingData.solution}
                onChange={(e) => updateData("solution", e.target.value)}
                rows={4}
                required
                aria-describedby="solution-help"
              />
              <p id="solution-help" className="text-sm text-muted-foreground">
                Como vocês entregam valor para o cliente?
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="objectives">Objetivos do Projeto *</Label>
              <Textarea
                id="objectives"
                placeholder="Ex: Aumentar reconhecimento da marca, gerar 1000 leads qualificados..."
                value={briefingData.objectives}
                onChange={(e) => updateData("objectives", e.target.value)}
                rows={3}
                required
                aria-describedby="objectives-help"
              />
              <p id="objectives-help" className="text-sm text-muted-foreground">
                Quais resultados esperam alcançar?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="timeline">Prazo Desejado</Label>
                <Select onValueChange={(value) => updateData("timeline", value)}>
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="Selecione o prazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-month">1 mês</SelectItem>
                    <SelectItem value="3-months">3 meses</SelectItem>
                    <SelectItem value="6-months">6 meses</SelectItem>
                    <SelectItem value="1-year">1 ano</SelectItem>
                    <SelectItem value="flexible">Flexível</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Orçamento Disponível</Label>
                <Select onValueChange={(value) => updateData("budget", value)}>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Faixa de investimento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="up-to-10k">Até R$ 10.000</SelectItem>
                    <SelectItem value="10k-50k">R$ 10.000 - R$ 50.000</SelectItem>
                    <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                    <SelectItem value="100k-plus">Acima de R$ 100.000</SelectItem>
                    <SelectItem value="flexible">A discutir</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const progress = (currentStep / 3) * 100;
  const CurrentIcon = steps[currentStep - 1].icon;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          onClick={onBack}
          aria-label="Voltar para dashboard"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Gerador de Briefing</h1>
          <p className="text-muted-foreground">
            Crie um briefing detalhado para sua startup em 3 passos simples
          </p>
        </div>
      </div>

      {/* Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Progresso</span>
              <span className="text-sm text-muted-foreground">{currentStep}/3</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              {steps.map((step) => (
                <span key={step.id} className={currentStep >= step.id ? "text-primary font-medium" : ""}>
                  {step.title}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <CurrentIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Etapa {currentStep}: {steps[currentStep - 1].title}</CardTitle>
              <CardDescription>{steps[currentStep - 1].description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="h-4 w-4" />
          Anterior
        </Button>

        {currentStep < 3 ? (
          <Button variant="hero" onClick={handleNext}>
            Próximo
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="accent" onClick={handleGenerate}>
            <CheckCircle className="h-4 w-4" />
            Gerar Briefing
          </Button>
        )}
      </div>
    </div>
  );
};
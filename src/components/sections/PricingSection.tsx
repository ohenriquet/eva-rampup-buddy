import { ArrowRight, Check, Clock, Users, Building2, Zap } from 'lucide-react';
import { getRef } from '@/lib/constants';
import { EvidenceInline } from '@/components/EvidenceInline';
import { PricingTimeline } from './PricingTimeline';

export const PricingSection = () => {
  const ref1 = getRef(1); // GetDX (50% faster)
  const ref8 = getRef(8); // Devsu (cost of ramp-up)

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="precos" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container-main">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title mb-4">Planos e preços</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Escolha os módulos que fazem sentido para o seu momento.
            Comece pelo básico ou acelere com o ramp-up completo.
          </p>
        </div>

        {/* Timeline Visual */}
        <div className="animate-fade-up">
          <PricingTimeline />
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>

          {/* Card 1: Onboarding Organizacional */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Para RH
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Onboarding Organizacional</h3>
              <p className="text-muted-foreground text-sm">
                Base comum do D-5 ao D+30, padroniza e automatiza rotinas de acesso e cultura.
              </p>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-foreground">Escala por colaboradores totais</span>
                  <span className="text-xs text-muted-foreground">Preço por volume de licenças</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-foreground">
                    Devolve 20+ horas
                    {/* Generic productivity reference implied or kept clean as per prompt instruction for 20+ hours (no specific ref provided in prompt map, using pattern) */}
                  </span>
                  <span className="text-xs text-muted-foreground">do time interno por novo onboarding</span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToDemo}
              className="w-full py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              Solicitar demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Ramp-up 30/60/90 */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 flex flex-col relative shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg uppercase tracking-widest">
              Recomendado
            </div>

            <div className="mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                Para Tech, Sales, CS
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-2">Ramp-up 30/60/90</h3>
              <p className="text-muted-foreground text-sm">
                Do D0 ao D+90, fluxos personalizados por função e time para acelerar performance.
              </p>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-foreground">Preço por time</span>
                  <span className="text-xs text-muted-foreground">Pacotes de até 10 pessoas por time</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-foreground">
                    Reduz em até 50% o tempo
                    {ref1 && <EvidenceInline sourceName={ref1.sourceName} href={ref1.url} />}
                  </span>
                  <span className="text-xs text-muted-foreground">até o ramp-up total por colaborador</span>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToDemo}
              className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Solicitar demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          Dúvidas sobre qual o melhor plano para o seu tamanho atual? <button onClick={scrollToDemo} className="text-primary hover:underline font-medium">Fale com um especialista.</button>
        </div>
      </div>
    </section>
  );
};

import { Badge } from '@/components/ui/badge';
import { EvidenceInline } from '@/components/EvidenceInline';
import { getRef } from '@/lib/constants';
import { IntegrationLogosRow } from '@/components/IntegrationLogosRow';
import {
  Building2,
  Users,
  UserCircle,
  TrendingUp,
  Zap,
} from 'lucide-react';

export const HowItWorksSection = () => {
  const ref2 = getRef(2);
  const ref4 = getRef(4);

  return (
    <section id="como-funciona" className="section-padding bg-[#F5F5F5]">
      <div className="container-main">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">Como funciona</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="card-elevated p-8 animate-fade-up border-l-4 border-l-primary" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-primary uppercase tracking-widest">Passo 1</span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-1">Pacote de contexto</h3>
              <p className="text-muted-foreground">A Eva aprende seu contexto em 3 níveis</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Envelope A */}
              <div className="bg-white rounded-xl p-5 border border-border flex flex-col h-full shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Contexto da empresa</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Manual do colaborador', 'Políticas', 'Glossário'].map((chip, j) => (
                    <Badge key={j} variant="secondary" className="px-2 py-0.5 text-[10px] font-medium bg-primary/5 text-primary border-primary/10">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Envelope B */}
              <div className="bg-white rounded-xl p-5 border border-border flex flex-col h-full shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Contexto da área</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Processos', 'Rituais', 'Ferramentas'].map((chip, j) => (
                    <Badge key={j} variant="secondary" className="px-2 py-0.5 text-[10px] font-medium bg-primary/5 text-primary border-primary/10">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Envelope C */}
              <div className="bg-white rounded-xl p-5 border border-border flex flex-col h-full shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UserCircle className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Contexto da função</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['manifest.xml', 'readme.txt', 'Golden packs + Runbooks'].map((chip, j) => (
                    <Badge key={j} variant="secondary" className="px-2 py-0.5 text-[10px] font-medium bg-primary/5 text-primary border-primary/10">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="card-elevated p-8 animate-fade-up border-l-4 border-l-primary" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-primary uppercase tracking-widest">Passo 2</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Ramp-up 30/60/90
                  {ref2 && <EvidenceInline sourceName={ref2.sourceName} href={ref2.url} />}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Quick wins (para qualquer área) e exemplos específicos de tecnologia.
                  <span className="block mt-1 font-semibold text-foreground">Do 1º ao 10º PR em menos tempo.</span>
                </p>
                <div className="pt-2">
                  <IntegrationLogosRow />
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="card-elevated p-8 animate-fade-up border-l-4 border-l-primary" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-primary uppercase tracking-widest">Passo 3</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Autonomia total em até 90 dias
                  {ref4 && <EvidenceInline sourceName={ref4.sourceName} href={ref4.url} />}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menos dependência, mais contribuição real e ramp-up replicável para todo o time.
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

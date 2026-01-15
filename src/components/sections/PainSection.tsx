import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getRef } from '@/lib/constants';
import { EvidenceInline } from '@/components/EvidenceInline';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export const PainSection = () => {
  const ref3 = getRef(3);
  const ref8 = getRef(8);
  const ref5 = getRef(5);

  const [salary, setSalary] = useState(10000);
  const [displaySalary, setDisplaySalary] = useState('10.000');
  const [rampMode, setRampMode] = useState('sem-eva');

  const handleSalaryChange = (val: string) => {
    const numericValue = val.replace(/\D/g, '');
    if (numericValue === '') {
      setSalary(0);
      setDisplaySalary('');
      return;
    }
    const parsed = parseInt(numericValue, 10);
    setSalary(parsed);
    setDisplaySalary(parsed.toLocaleString('pt-BR'));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Updated calculations:
  // Sem Eva: 8 months * 50% delivery = Salário * 4
  // Com Eva: 3 months * 50% delivery = Salário * 1.5
  // Economia: Salário * 2.5
  const costSemEva = salary * 4;
  const costComEva = salary * 1.5;
  const economy = salary * 2.5;

  return (
    <section id="dor" className="section-padding bg-transparent py-10 lg:py-16">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Copy */}
          <div className="animate-fade-up max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-[1.1] mb-5 tracking-tight">
              O ramp-up lento custa caro. <br className="hidden lg:block" />
              E a conta aparece todo mês
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-base text-muted-foreground">
                Produtividade plena costuma levar ~8 meses.
                {ref3 && <EvidenceInline sourceName={ref3.sourceName} href={ref3.url} />}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-2 text-foreground/80">
                  <div className="w-1 h-1 rounded-full bg-primary/40 mt-2.5 flex-shrink-0" />
                  <p className="text-[13px] lg:text-sm leading-relaxed">
                    Durante esse período, a entrega média costuma ficar perto de 50%.
                  </p>
                </div>

                <div className="flex items-start gap-2 text-foreground/80">
                  <div className="w-1 h-1 rounded-full bg-primary/40 mt-2.5 flex-shrink-0" />
                  <p className="text-[13px] lg:text-sm leading-relaxed">
                    A Eva reduz esse tempo pela metade e converte delay em economia.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground/70 font-medium text-sm lg:text-base mb-10 italic border-l-2 border-primary/20 pl-4">
              “A Eva encurta o ramp-up e devolve semanas de autonomia para o seu roadmap.”
            </p>

            <button
              onClick={() => scrollToSection('demo')}
              className="btn-primary flex items-center gap-2 group h-10 px-6 text-sm"
            >
              Ver cálculo completo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: Visuals */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="group card-elevated p-5 lg:p-7 bg-card/40 backdrop-blur-sm border-primary/5 shadow-[0_20px_50px_rgba(var(--primary),0.05)] hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)] transition-shadow duration-300 flex flex-col gap-8 relative overflow-hidden">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Descubra economia</h3>
                <p
                  onClick={() => setRampMode('com-eva')}
                  className="text-[11px] text-primary/70 hover:text-primary cursor-pointer mb-4 flex items-center gap-1 transition-colors"
                >
                  Descubra a economia com a Eva <ArrowRight className="w-3 h-3" />
                </p>

                <Tabs value={rampMode} onValueChange={setRampMode} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8 h-10 bg-secondary/30 p-1">
                    <TabsTrigger value="sem-eva" className="text-xs font-bold data-[state=active]:bg-background data-[state=active]:text-foreground transition-all">
                      Sem Eva
                    </TabsTrigger>
                    <TabsTrigger value="com-eva" className="text-xs font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2 justify-center">
                      <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse" />
                      Com Eva
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="relative h-12 flex flex-col justify-end px-4">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[9px] font-black text-muted-foreground/40 uppercase tracking-widest">Início</span>
                    <span className={`text-[9px] font-black uppercase tracking-widest transition-colors duration-300 ${rampMode === 'com-eva' ? 'text-primary' : 'text-muted-foreground/40'}`}>
                      Ramp-up
                    </span>
                  </div>

                  {/* Track */}
                  <div className="absolute bottom-0 left-4 right-4 h-2 bg-secondary/40 rounded-full" />

                  {/* Progress */}
                  <div
                    className={`absolute bottom-0 left-4 h-2 rounded-full transition-all duration-700 ease-out ${rampMode === 'com-eva' ? 'bg-primary shadow-[0_0_15px_rgba(var(--primary),0.4)]' : 'bg-muted-foreground/20'
                      }`}
                    style={{ width: rampMode === 'com-eva' ? 'calc(37.5% - 16px)' : 'calc(100% - 32px)' }}
                  />

                  {/* Marker Label */}
                  <div
                    className="absolute bottom-4 transition-all duration-700 ease-out flex flex-col items-center"
                    style={{ left: rampMode === 'com-eva' ? '37.5%' : '100%', transform: 'translateX(-50%)' }}
                  >
                    <div className={`px-2 py-0.5 rounded-full mb-1 flex items-center justify-center shadow-sm ${rampMode === 'com-eva' ? 'bg-primary text-primary-foreground' : 'bg-background border border-border'}`}>
                      <span className="text-[10px] font-bold whitespace-nowrap">
                        {rampMode === 'com-eva' ? '3 meses' : '8 meses'}
                      </span>
                    </div>
                    <div className={`w-1 h-2 rounded-full ${rampMode === 'com-eva' ? 'bg-primary' : 'bg-foreground/20'}`} />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <div className="flex flex-col gap-6">
                  {/* Salary Input and Economy (same area) */}
                  <div className="space-y-4">
                    <div className="flex-1 w-full">
                      <label htmlFor="salary" className="text-[10px] font-black text-muted-foreground/70 uppercase tracking-widest mb-2 block">Salário médio</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/40 text-sm font-bold">R$</span>
                        <input
                          id="salary"
                          value={displaySalary}
                          onChange={(e) => handleSalaryChange(e.target.value)}
                          className="w-full pl-10 pr-4 font-bold bg-background/40 border-primary/5 h-11 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="0"
                        />
                      </div>
                    </div>

                    {/* Economy Display - Only visible in "Com Eva" mode */}
                    {rampMode === 'com-eva' && (
                      <div className="space-y-3 animate-fade-up">
                        <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/10 rounded-2xl">
                          <span className="text-sm font-bold text-primary">Economia estimada</span>
                          <span className="text-xl font-black text-primary">R$ {economy.toLocaleString('pt-BR')}</span>
                        </div>
                      </div>
                    )}

                    {/* Cost display for "Sem Eva" mode */}
                    {rampMode === 'sem-eva' && (
                      <div className="space-y-2 animate-fade-up">
                        <div className="flex items-center justify-between p-4 bg-muted/10 border border-border/10 rounded-2xl">
                          <span className="text-sm font-bold text-muted-foreground">Custo de delay</span>
                          <span className="text-xl font-black text-foreground">R$ {costSemEva.toLocaleString('pt-BR')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Users, User, Building2, CheckCircle, Clock } from 'lucide-react';
import { getRef } from '@/lib/constants';
import { EvidenceInline } from '@/components/EvidenceInline';

export const SolutionsSection = () => {
  const ref5 = getRef(5);
  const benefits = [
    {
      icon: Users,
      title: 'Para liderança',
      bullets: [
        'Menos interrupções e menos gargalos em sêniores',
        'Mais previsibilidade do ramp-up',
        'Mais execução com o mesmo time'
      ],
    },
    {
      icon: User,
      title: 'Para o novo talento',
      bullets: [
        'Contexto no momento certo',
        'Trilha clara de evolução',
        'Mais autonomia e menos fricção'
      ],
    },
    {
      icon: Building2,
      title: 'Para a empresa',
      bullets: [
        'Roadmap mais rápido com menos retrabalho',
        'Ramp-up replicável (não “tribal”)',
        'Menos desperdício operacional'
      ],
    },
  ];

  return (
    <section id="beneficios" className="section-padding bg-transparent">
      <div className="container-main">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">Benefícios práticos</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-elevated animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-6">
                {benefit.title}
              </h3>

              <ul className="space-y-4 mb-8 flex-1">
                {benefit.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground leading-tight">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border max-w-3xl mx-auto text-left">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Um simples contexto perdido pode custar cerca de <span className="font-bold text-foreground">23 minutos</span>
              {ref5 && <EvidenceInline sourceName={ref5.sourceName} href={ref5.url} />} para recuperar o foco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Check } from 'lucide-react';

export const PricingSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      title: 'Onboarding Organizacional',
      description: 'Fluxo de trabalho automatizado e padronizado para as primeiras 4 semanas',
      price: 'A partir de R$ 490 para startups (até 50 colaboradores)',
      bullets: [
        'Comunicação padronizada',
        'Menos horas do time',
        'Escala sem virar operação manual'
      ],
    },
    {
      title: 'Ramp-up 30/60/90',
      description: 'Fluxo personalizado, automatizado para os primeiros 3 meses',
      price: 'A partir de R$ 890 por equipe (até 10 membros)',
      bullets: [
        'Quick wins nas primeiras semanas',
        'Evolução 30/60/90',
        'Autonomia em até 90 dias'
      ],
    },
  ];


  return (
    <section id="precos" className="section-padding bg-transparent">
      <div className="container-main">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">Planos e preços</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="card-elevated flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <p className="text-lg font-bold gradient-text">{plan.price}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <button
                  onClick={() => scrollToSection('demo')}
                  className="w-full py-3 rounded-xl font-bold transition-all bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Solicitar demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

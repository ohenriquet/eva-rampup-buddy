import { User, Users, UserCheck } from 'lucide-react';

export const DifferentialSection = () => {
  const differentials = [
    {
      icon: User,
      title: 'Colaborador',
      description: 'Próximo passo no tempo certo',
      detail: 'Sem precisar buscar em portais ou documentos.',
    },
    {
      icon: UserCheck,
      title: 'Líder',
      description: 'Checkpoints e progresso visível',
      detail: 'Visão clara de quem precisa de atenção.',
    },
    {
      icon: Users,
      title: 'Time',
      description: 'Menos babysitting, menos retrabalho',
      detail: 'Seniores focam no que importa.',
    },
  ];

  return (
    <section id="diferencial" className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">
            A Eva fica com o colaborador e com o líder.{' '}
            <span className="gradient-text">O tempo todo.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="card-elevated text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-foreground mb-2">
                {item.description}
              </p>
              <p className="text-muted-foreground text-sm">{item.detail}</p>
            </div>
          ))}
        </div>

        <div
          className="text-center animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="inline-block bg-card rounded-full px-6 py-3 text-foreground font-medium shadow-card">
            Não é portal.{' '}
            <span className="gradient-text">
              É acompanhamento no fluxo de trabalho.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

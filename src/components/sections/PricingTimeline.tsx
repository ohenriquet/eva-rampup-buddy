import { Calendar, CheckCircle2, Code2, Flag, Headset, Users, Rocket, Trophy } from 'lucide-react';

export const PricingTimeline = () => {
    const baseSteps = [
        { label: 'D-5', sub: 'Preboarding', icon: Calendar },
        { label: 'Dia 1', sub: 'Acesso & Boas-vindas', icon: CheckCircle2 },
        { label: 'Sem 1', sub: 'Cultura & Rituais', icon: Users },
        { label: 'Mês 1', sub: 'Primeiras entregas', icon: Rocket },
    ];

    const tracks = [
        {
            title: 'Tech',
            icon: Code2,
            color: 'text-blue-600',
            bg: 'bg-blue-100',
            steps: [
                { day: '30', label: 'Quick wins técnicos' },
                { day: '60', label: 'Contribuição assistida' },
                { day: '90', label: 'Autonomia consistente' },
            ]
        },
        {
            title: 'Sales',
            icon: Trophy,
            color: 'text-orange-600',
            bg: 'bg-orange-100',
            steps: [
                { day: '30', label: 'Primeiros contatos' },
                { day: '60', label: 'Pipeline consistente' },
                { day: '90', label: 'Autonomia para meta' },
            ]
        },
        {
            title: 'CS',
            icon: Headset,
            color: 'text-purple-600',
            bg: 'bg-purple-100',
            steps: [
                { day: '30', label: 'Atendimentos guiados' },
                { day: '60', label: 'Reuniões autônomas' },
                { day: '90', label: 'Carteira com metas' },
            ]
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto mb-16">
            {/* Base Timeline (Organizational) */}
            <div className="relative mb-8 lg:mb-12">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10 hidden lg:block" />
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border -z-10 lg:hidden" />

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4 ml-4 lg:ml-0">
                    {/* Header for Mobile only */}
                    <div className="lg:hidden absolute -left-2 -top-10 bg-muted/20 px-3 py-1 rounded-full text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Base Organizacional
                    </div>

                    {baseSteps.map((step, i) => (
                        <div key={i} className="flex lg:flex-col items-center gap-4 lg:gap-3 bg-white lg:bg-transparent p-2 lg:p-0 rounded-lg">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 border-4 border-white z-10">
                                <step.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                            </div>
                            <div className="text-left lg:text-center">
                                <span className="block text-xs font-bold text-primary uppercase tracking-wider">{step.label}</span>
                                <span className="text-sm font-medium text-foreground">{step.sub}</span>
                            </div>
                        </div>
                    ))}

                    <div className="hidden lg:flex flex-col items-center">
                        <div className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-md whitespace-nowrap z-20">
                            A partir daqui, ramp-up por área
                        </div>
                        <div className="h-8 w-0.5 bg-border mt-2 border-dashed border-l-2 border-border/50"></div>
                    </div>
                </div>
            </div>

            {/* Branching Heading for Mobile */}
            <div className="lg:hidden my-8 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-md">
                    Ramp-up por Área (D+30)
                </div>
            </div>

            {/* Area Tracks */}
            <div className="grid lg:grid-cols-3 gap-6">
                {tracks.map((track, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                        {/* Top Gradient Line */}
                        <div className={`absolute top-0 left-0 right-0 h-1 ${track.bg.replace('bg-', 'bg-')}`} />

                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-10 h-10 rounded-lg ${track.bg} ${track.color} flex items-center justify-center`}>
                                <track.icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">Ramp-up de {track.title}</h3>
                        </div>

                        <div className="space-y-6 relative">
                            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-border/50 -z-10" />
                            {track.steps.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className={`w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-[10px] font-bold bg-white z-10`}>
                                        {step.day}
                                    </div>
                                    <span className="text-sm text-muted-foreground font-medium">{step.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

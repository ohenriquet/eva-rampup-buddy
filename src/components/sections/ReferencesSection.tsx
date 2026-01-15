import { ExternalLink } from 'lucide-react';
import { REFERENCES } from '@/lib/constants';

export const ReferencesSection = () => {
    return (
        <section id="referencias" className="py-12 bg-card border-t border-border">
            <div className="container-main">
                <h2 className="text-xl font-bold text-foreground mb-8">Fontes e Referências</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {REFERENCES.map((ref) => (
                        <a
                            key={ref.id}
                            href={ref.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col gap-1 p-4 rounded-xl border border-transparent hover:border-border hover:bg-secondary transition-all"
                        >
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors flex items-start gap-2">
                                {ref.title}
                                <ExternalLink className="w-3 h-3 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </span>
                        </a>
                    ))}

                </div>
            </div>
        </section>
    );
};

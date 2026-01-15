import { useEffect } from 'react';
import { getRef } from '@/lib/constants';
import { EvidenceInline } from '@/components/EvidenceInline';
import { IntegrationLogosRow } from '@/components/IntegrationLogosRow';

// Extend Window interface to include hbspt
declare global {
    interface Window {
        hbspt?: {
            forms: {
                create: (config: {
                    portalId: string;
                    formId: string;
                    region: string;
                    target?: string;
                }) => void;
            };
        };
    }
}

export const CTAFormSection = () => {
    const ref8 = getRef(8);

    useEffect(() => {
        const targetId = "#hubspot-demo-form-container";
        const formConfig = {
            portalId: "48245348",
            formId: "5cd09dc8-6fbd-46eb-8097-dca123973f6e",
            region: "na1",
            target: targetId
        };

        const createForm = () => {
            if (window.hbspt) {
                const container = document.querySelector(targetId);
                if (container) container.innerHTML = ''; // prevent duplicates
                window.hbspt.forms.create(formConfig);
            }
        };

        const existingScript = document.querySelector('script[src*="js.hsforms.net"]');

        if (existingScript) {
            if (window.hbspt) {
                createForm();
            } else {
                // Polling fallback if script matches but hbspt global isn't ready
                const interval = setInterval(() => {
                    if (window.hbspt) {
                        createForm();
                        clearInterval(interval);
                    }
                }, 100);
                setTimeout(() => clearInterval(interval), 10000); // 10s timeout
            }
        } else {
            const script = document.createElement('script');
            script.src = '//js.hsforms.net/forms/embed/v2.js';
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.async = true;
            script.onload = createForm;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section id="demo" className="section-padding bg-transparent">
            <div className="container-main">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div className="animate-fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                            Solicitar demo de 30 minutos
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Veja a Eva guiando um novo talento no fluxo de trabalho.
                        </p>
                        <div className="pt-4 border-t border-border/50">
                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">Faça como dezenas de clientes</p>
                            <IntegrationLogosRow type="companies" size="sm" />
                        </div>
                    </div>

                    <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        {/* HubSpot Form Container */}
                        <div
                            id="hubspot-demo-form-container"
                            className="card-elevated space-y-4 mb-8"
                        />

                        <p className="text-sm text-muted-foreground italic text-center max-w-md mx-auto leading-relaxed">
                            O custo de substituir e <span className="whitespace-nowrap">ramp-up</span> de um engenheiro pode chegar a <span className="font-bold text-foreground">6 a 9 meses</span> do salário
                            {ref8 && <EvidenceInline sourceName={ref8.sourceName} href={ref8.url} />}.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

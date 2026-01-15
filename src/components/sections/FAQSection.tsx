import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { getRef } from '@/lib/constants';
import { EvidenceInline } from '@/components/EvidenceInline';

export const FAQSection = () => {
    const ref7 = getRef(7);
    const faqs = [
        {
            q: "É só para engenharia?",
            a: "Não. A Eva rampa novos colaboradores em qualquer área — com especialidade em tecnologia."
        },
        {
            q: "Vocês também têm onboarding organizacional?",
            a: "Sim. Um plano padronizado do preboarding às primeiras semanas.",
        },
        {
            q: "Quais integrações além do Slack?",
            a: "Teams, Google Chat, WhatsApp, e-mail, calendário e webhooks."
        },
        {
            q: "O que preciso fornecer como contexto?",
            a: "Manual do colaborador, manifest.xml e readme.txt (e, quando fizer sentido, contexto de projeto/produto).",
        },
        {
            q: "Como vocês medem evolução sem virar métrica “tóxica”?",
            a: (
                <>
                    Usamos sinais de evolução do sistema e da experiência do time, alinhados a frameworks com <span className="font-bold text-foreground">5 dimensões</span>
                    {ref7 && <EvidenceInline sourceName={ref7.sourceName} href={ref7.url} />} (ex.: SPACE).
                </>
            )
        }
    ];


    return (
        <section id="faq" className="section-padding bg-transparent">
            <div className="container-main max-w-3xl">
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="section-title">Perguntas frequentes</h2>
                </div>

                <Accordion type="single" collapsible className="w-full animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-2">
                            <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline transition-colors">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

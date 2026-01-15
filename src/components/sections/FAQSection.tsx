import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
    const faqs = [
        {
            q: "Qual o tamanho mínimo para usar a Eva?",
            a: "A Eva faz mais sentido para empresas que contratam com frequência, em geral 10 ou mais novas contratações por ano. Assim, o ganho de velocidade e padronização aparece mês a mês, com ramp-up mais previsível e menos dependência de pessoas-chave."
        },
        {
            q: "Os módulos podem ser comprados à parte?",
            a: "Sim, você pode contratar somente o Onboarding Organizacional ou somente o Ramp-up 30/60/90. Eles funcionam muito bem juntos, mas também entregam valor de forma independente, você escolhe o que faz mais sentido para sua prioridade atual."
        },
        {
            q: "Como funciona a implantação da Eva?",
            a: "A implantação acontece em até 15 dias úteis. Nós seguimos um framework já validado e pedimos os contextos necessários, empresa, área e função, para a Eva montar os primeiros fluxos automatizados e começar a guiar os novos talentos no dia a dia."
        },
        {
            q: "Quais segmentos de empresas vocês atendem?",
            a: "Atendemos empresas de diversos segmentos. Nossas áreas de especialidade são tecnologia, vendas e sucesso do cliente, onde ramp-up rápido e consistência operacional geram impacto direto no roadmap e na receita."
        },
        {
            q: "A Eva tem API para integrar com outras ferramentas?",
            a: "Sim, a Eva oferece API para integrações com outras ferramentas e sistemas internos, para conectar eventos, dados e fluxos de trabalho ao seu stack."
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

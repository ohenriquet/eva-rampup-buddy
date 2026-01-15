import { TrendingUp, Zap } from 'lucide-react';
import { getRef } from '@/lib/constants';
import { EvidenceInline } from '@/components/EvidenceInline';
import { IntegrationLogosRow } from '@/components/IntegrationLogosRow';

export const SocialProofSection = () => {
  const ref1 = getRef(1);
  const ref6 = getRef(6);

  return (
    <section id="prova" className="section-padding bg-transparent">
      <div className="container-main">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title mb-4">Times de tecnologia já usam</h2>
          <div className="flex justify-center flex-col items-center gap-2 opacity-80">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-4">Empresas que já aceleram o ramp-up</span>
            <IntegrationLogosRow type="companies" className="justify-center" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up space-y-8" style={{ animationDelay: '0.2s' }}>
            <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Benchmark de IA</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em benchmark com foco em <span className="text-foreground font-semibold">ramp-up</span>, o <span className="text-foreground font-semibold">10º PR</span> aconteceu em <span className="text-foreground font-bold">49 dias</span> vs 91 dias sem IA — quase metade do tempo.
                {ref1 && <EvidenceInline sourceName={ref1.sourceName} href={ref1.url} />}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Produtividade</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ferramentas de IA podem fazer tarefas serem concluídas <span className="text-foreground font-bold text-lg">55% mais rápido</span> (ex.: Copilot), mudando o padrão de produtividade no dia a dia.
                {ref6 && <EvidenceInline sourceName={ref6.sourceName} href={ref6.url} />}
              </p>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://www.youtube.com/watch?v=PpzP5RmgKEk"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video bg-card border border-border rounded-2xl overflow-hidden shadow-card relative group cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/* YouTube Thumbnail */}
              <img
                src="https://img.youtube.com/vi/PpzP5RmgKEk/maxresdefault.jpg"
                alt="Case Meta IT"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to hqdefault if maxresdefault doesn't exist
                  e.currentTarget.src = 'https://img.youtube.com/vi/PpzP5RmgKEk/hqdefault.jpg';
                }}
              />

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-foreground shadow-md">
                Case Meta IT
              </div>
            </a>
            <p className="mt-4 text-center text-sm text-muted-foreground italic">
              "Veja como a Meta IT usa a Eva para acelerar o ramp-up"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

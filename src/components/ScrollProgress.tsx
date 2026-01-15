import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'dor', label: 'Dor' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'beneficios', label: 'Benefícios' },
  { id: 'prova', label: 'Prova' },
  { id: 'precos', label: 'Preços' },
  { id: 'faq', label: 'FAQ' },
];

export const ScrollProgress = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveIndex(i);
          break;
        }
      }

      // Hide when at bottom
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setIsVisible(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextIndex = Math.min(activeIndex + 1, sections.length - 1);
    const element = document.getElementById(sections[nextIndex].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop: Right side rail */}
      <div className="hidden lg:flex scroll-indicator">
        <div className="flex flex-col gap-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative"
              title={section.label}
            >
              <div
                className={`progress-dot ${index === activeIndex ? 'progress-dot-active' : ''
                  } ${index < activeIndex ? 'bg-primary/50' : ''}`}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-foreground text-primary-foreground text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {section.label}
              </span>
            </button>
          ))}
        </div>
        {activeIndex < sections.length - 1 && (
          <button
            onClick={scrollToNext}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2"
          >
            <span className="hidden xl:inline">Próximo</span>
            <ChevronDown className="w-4 h-4 animate-pulse-soft" />
          </button>
        )}
      </div>

      {/* Mobile: Bottom button */}
      {activeIndex < sections.length - 1 && (
        <button
          onClick={scrollToNext}
          className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-glow animate-pulse-soft"
        >
          <span className="text-sm font-medium">Próximo</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

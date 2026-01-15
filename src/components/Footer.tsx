export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border mt-auto">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
          <div className="flex flex-col gap-4">
            <img
              src="/logo-horizontal.png"
              alt="Eva People"
              className="h-8 w-auto object-contain"
              style={{ minHeight: '13px', minWidth: '70px' }}
            />
          </div>

          <div className="flex items-center gap-6 md:justify-end">
            <a href="https://evapeople.com.br/blog/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="https://evapeople.com.br/cases/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Cases
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted-foreground">
          <div className="space-y-1">
            <p>
              Eva People © 2025. Todos os direitos reservados | <a href="https://evapeople.com.br/politica-de-privacidade/" className="hover:text-primary transition-colors underline underline-offset-2">Política de Privacidade</a>
            </p>
            <p>
              Cubo Itaú®, Alameda Vicente Pinzon, 54 – 12º andar – Vila Olímpia, São Paulo – SP, 04547-130
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

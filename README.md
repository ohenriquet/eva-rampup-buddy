# Eva People - Landing Page (Ramp-up Buddy)

Bem-vindo ao repositório da Landing Page da Eva People. Este projeto foi desenvolvido para apresentar a solução de aceleração de ramp-up de novos talentos de tecnologia.

O projeto utiliza uma stack moderna baseada em **React**, **Vite**, **TypeScript** e **Tailwind CSS**.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
*   Node.js (versão 18 ou superior recomendada)
*   npm ou yarn

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/hugodaeva/eva-rampup-buddy.git
    cd eva-rampup-buddy
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4.  Acesse o projeto em `http://localhost:8080/` (ou na porta indicada no terminal).

## 🛠 Tecnologias Utilizadas

*   **Core**: React 18, TypeScript, Vite
*   **Estilização**: Tailwind CSS utils, Lucide React (ícones)
*   **UI Components**: shadcn/ui (Radix UI primitives)
*   **Animações**: Tailwind animate, transições CSS customizadas
*   **Integrações**: HubSpot Forms (Embed API)

## 📁 Estrutura de Pastas

*   `src/components`: Componentes reutilizáveis (Header, Footer, UI Kits).
*   `src/components/sections`: Seções específicas da Landing Page (Hero, Pain, HowItWorks, etc.).
*   `src/components/ui`: Componentes base do design system (Buttons, Cards, Inputs).
*   `src/pages`: Páginas da aplicação (Index, NotFound).
*   `public/logos`: Assets de imagens e logotipos.

## 🤖 Contexto para IA

Se você está usando uma IA para ajudar no desenvolvimento, consulte o arquivo [CONTEXT.md](./CONTEXT.md) na raiz do projeto. Ele contém detalhes profundos sobre a arquitetura, regras de design e estrutura do código para facilitar o entendimento do contexto completo.

## 📝 Scripts Disponíveis

*   `npm run dev`: Inicia o servidor local.
*   `npm run build`: Gera a build de produção na pasta `dist`.
*   `npm run preview`: Visualiza a build de produção localmente.
*   `npm run lint`: Checa erros de linting.

## 🎨 Design System

O projeto segue um design system minimalista e "clean", focado em conversão B2B.
*   **Cores Primárias**: Tons de roxo/azul (`primary`) e fundo claro.
*   **Tipografia**: Sans-serif moderna (Inter/System fonts).
*   **Elementos Chave**: Cards com elevação suave (`card-elevated`), botões arredondados, ícones funcionais.

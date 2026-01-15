# AI Context & Implementation Guide - Eva People Landing Page

Este documento serve como a "fonte da verdade" técnica e de produto para IAs e desenvolvedores. Use-o para entender rapidamente o contexto, regras de negócio e estrutura do projeto.

---

## 1. Visão Geral do Produto
**Objetivo**: Landing Page de alta conversão focada em gestores de tecnologia (CTOs, Tech Leads) para vender a solução "Eva Ramp-up Buddy".
**Proposta de Valor**: Acelerar o ramp-up de novos desenvolvedores de 8 meses para 90 dias usando IA e automação de contexto no fluxo de trabalho (Slack/Teams).

## 2. Tech Stack & Arquitetura
*   **Framework**: React + Vite
*   **Linguagem**: TypeScript
*   **Estilo**: Tailwind CSS + Shadcn UI (componentes em `src/components/ui`)
*   **Roteamento**: React Router DOM (embora seja Single Page, prepara para expansão)
*   **Gerenciamento de Estado**: React Query (TanStack Query) instalado, mas uso principal é estado local (`useState`) para interações simples de UI.
*   **Deploy**: Estático (SPA).

## 3. Estrutura de Diretórios Crítica

| Caminho | Descrição |
| :--- | :--- |
| `src/components/sections/` | Contém todas as seções da LP (Hero, Pain, Solutions, etc.). |
| `src/components/ui/` | Componentes atômicos do Shadcn (Button, Card, Input). NÃO altere a lógica base a menos que seja um refactor global. |
| `src/components/IntegrationLogosRow.tsx` | Gerencia os logos de clientes e ferramentas. Possui lógica para redimensionamento e tooltips. |
| `src/components/HubSpotEmailCapture.tsx` | Wrapper para o form de e-mail da Hero Section. |
| `src/components/sections/CTAFormSection.tsx` | Seção final com form de "Solicitar Demo". |
| `public/logos/` | Assets de imagens organizados por `color` (clientes) e `tools` (ferramentas). |

## 4. Componentes Chave & Regras de Negócio

### 4.1. Formulários HubSpot
O projeto usa scripts embed do HubSpot. Existem dois formulários distintos:
1.  **Hero Section (Email Capture)**:
    *   Form ID: `7b9f92b3-78af-4ef2-a3e7-f1b4e2dc0749`
    *   Portal ID: `48245348`
    *   Arquivo: `HubSpotEmailCapture.tsx`
2.  **CTA Final (Demo Request)**:
    *   Form ID: `5cd09dc8-6fbd-46eb-8097-dca123973f6e`
    *   Arquivo: `CTAFormSection.tsx`
    *   **Atenção**: Possui lógica de "polling" (`setInterval`) para garantir que o `window.hbspt` carregou corretamente ao navegar entre seções.

### 4.2. Seção "Dor" (PainSection)
*   Calculadora interativa de Custo de Ramp-up.
*   Possui estados "Sem Eva" (8 meses) e "Com Eva" (3 meses).
*   **Regra**: O chip de tempo deve ser visualmente pequeno (`text-[10px]`).

### 4.3. Seção "Como funciona" (HowItWorksSection)
*   **Flow**: Passo 1 (Contexto) -> Passo 2 (Quick Wins) -> Passo 3 (Autonomia).
*   **Estilo**: Títulos grandes ("Passo 1") sem zero à esquerda.

### 4.4. Logos e Integrações
*   Logos de clientes horizontais (ex: Softplan, Vericode) devem ter altura maior (~36px) para legibilidade.
*   Restrição CSS `maxHeight` foi ajustada para 50px para permitir esse crescimento.
*   Logo "Webhooks" é retangular, não quadrado.

## 5. Design Tokens e Estilização
*   **Cores**: Definidas em `tailwind.config.ts` e `index.css`.
    *   `primary`: Roxo principal da marca.
    *   `secondary`: Tons de apoio.
    *   `muted`: Textos secundários.
*   **Tipografia**: Inter (ou system default).
*   **Animações**: `animate-fade-up` é usada extensivamente para entrada de elementos.

## 6. Instruções para Desenvolvimento
1.  Sempre cheque `src/components/ui` antes de criar um componente novo.
2.  Ao adicionar logos, coloque em `public/logos/` e registre em `IntegrationLogosRow.tsx`.
3.  Evite hardcoded strings para URLs importantes; prefira constantes se reutilizadas.
4.  Mantenha o `Header` fixo e responsivo (menu mobile vs desktop).

## 7. Troubleshooting Comum
*   **Formulário não aparece**: Verifique se o script do HubSpot não está sendo bloqueado por adblockers ou se houve race condition no carregamento (verifique `CTAFormSection.tsx`).
*   **Imagens quebradas**: Verifique se o caminho em `public/` começa com `/` (ex: `/logos/...`) e não `./`.

---
*Este arquivo deve ser mantido atualizado conforme a arquitetura evolui.*

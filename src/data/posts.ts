export interface Post {
  id: string
  slug: string
  title: string
  description: string
  content: string
  image: string
  date: string
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "next-js-evolution",
    title: "Next.js Evolution",
    description: "Comparativo técnico: Pages Router vs. App Router (v16)",
    content: `Acompanho o ecossistema JavaScript desde 2019. Utilizei o finado create-react-app, passei pelo Vite e acompanho o Next.js desde a versão 12. A questão central não é apenas usar a ferramenta mais nova, mas entender o que ganhamos e o que abrimos mão ao escolher uma arquitetura mais opinativa.

Na Avanci, operávamos com Next.js 13 e 14 utilizando o Pages Router. Nele, funções como getServerSideProps ou getStaticProps eram o padrão para requisições no servidor ou tratamentos assíncronos. Embora funcional, essa estrutura tinha limitações de granularidade. O App Router trouxe um gerenciamento muito mais eficiente de layouts, tratamentos de erro globais, error boundaries e as diretivas use client e use server. Recentemente, a versão 15 introduziu o use cache, facilitando ainda mais a persistência de dados.

Tudo isso se soma aos novos recursos do React 18 e 19, que foram desenhados para se adequar aos conceitos de SSR e ao novo compilador. Alguns pontos que valem destaque nessa mudança:

## 1. Evolução com Turbopack

A substituição do Webpack pelo Turbopack trouxe ganhos em duas frentes. No dia a dia, a velocidade de compilação em desenvolvimento e o Hot Module Replacement (HMR) ficaram muito mais velozes. Para a produção, essa nova engine de build lida de forma mais inteligente com o empacotamento, resultando em builds mais rápidos, estáveis e otimizados, o que é crucial para pipelines de CI/CD eficientes.

## 2. Fim dos Network Waterfalls

No modelo anterior, era comum cairmos em cascatas de requisições que travavam o carregamento da página. Com o App Router, o carregamento paralelo e o Streaming permitem que o usuário visualize partes da interface enquanto os dados mais pesados ainda estão sendo buscados.

## 3. Server Components por Padrão

Essa foi a grande mudança. Ao mover componentes que não precisam de interatividade para serem processados no servidor, o tamanho do pacote de JavaScript enviado para o navegador diminui drasticamente. Isso reflete diretamente em métricas de performance como LCP e TBT.

## 4. Roteamento e Layouts Aninhados

Saímos do gerenciamento manual de rotas para um sistema que suporta Nested Layouts nativamente. Isso evita que componentes globais, como menus e cabeçalhos, precisem ser renderizados novamente durante a navegação entre páginas.

Nas versões 15 e 16 do Next.js, estratégias como SSR, SSG e ISR se tornaram ainda mais detalhadas. Hoje conseguimos decidir o nível de cache e renderização por componente e não apenas por página inteira.`,
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6df?w=500&h=300&fit=crop",
    date: "2026-05-06",
  },
  {
    id: "2",
    slug: "react-hooks-patterns",
    title: "React Hooks Patterns",
    description: "Padrões e melhores práticas para trabalhar com hooks",
    content: `React Hooks revolucionaram a forma como escrevemos componentes. Em vez de classes e ciclos de vida complexos, temos agora uma forma mais declarativa e composável de gerenciar estado e efeitos.

Alguns padrões importantes que surgiram:

## Custom Hooks

A criação de custom hooks permite extrair lógica de componentes e reutilizá-la. Um bom custom hook deve ser agnóstico ao contexto e focado em uma responsabilidade única.

## useEffect Dependencies

A lista de dependências do useEffect é crítica. Omiti-la ou deixá-la incompleta pode levar a bugs sutis e hard to debug. Ferramentas como o eslint-plugin-react-hooks são essenciais.

## Performance Optimization

Hooks como useMemo e useCallback são ferramentas poderosas, mas devem ser usadas com moderação. A prematura otimização é a raiz de todo o mal.`,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    date: "2026-04-28",
  },
  {
    id: "3",
    slug: "typescript-essentials",
    title: "TypeScript Essentials",
    description: "Conceitos fundamentais de TypeScript para iniciantes",
    content: `TypeScript adiciona tipagem estática ao JavaScript, trazendo segurança e melhor experiência de desenvolvimento. Para quem vem do JavaScript puro, pode parecer verboso no início, mas os benefícios logo aparecem.

## Tipos Básicos

Desde números, strings e booleanos até tipos complexos como unions e intersections. TypeScript permite criar tipos que expressem exatamente o que o seu código espera.

## Genéricos

Genéricos são um dos recursos mais poderosos do TypeScript. Eles permitem criar componentes reutilizáveis que funcionam com qualquer tipo, mantendo a segurança de tipo.

## Utility Types

TypeScript vem com utility types built-in que facilitam manipulações comuns de tipos: Partial, Required, Record, Pick e muitos outros.`,
    image: "https://images.unsplash.com/photo-1516321318423-f06f70570ec0?w=500&h=300&fit=crop",
    date: "2026-04-20",
  },
  {
    id: "4",
    slug: "web-performance-optimization",
    title: "Web Performance Optimization",
    description: "Técnicas práticas para otimizar a performance de aplicações web",
    content: `A performance é um aspecto crítico da experiência do usuário. Um site lento afasta visitantes e prejudica o SEO. Felizmente, existem várias técnicas comprovadas para otimizar.

## Core Web Vitals

Google estabeleceu três métricas principais: LCP (Largest Contentful Paint), FID (First Input Delay) e CLS (Cumulative Layout Shift). Otimizar para essas métricas melhora significativamente a experiência.

## Code Splitting

Dividir o código em chunks menores que são carregados sob demanda reduz drasticamente o bundle inicial e melhora o tempo de interatividade.

## Image Optimization

Imagens frequentemente representam a maior parte do tamanho da página. Usar formatos modernos, lazy loading e responsive images traz ganhos significativos.`,
    image: "https://images.unsplash.com/photo-1460925895917-aaf4b51bda1f?w=500&h=300&fit=crop",
    date: "2026-04-15",
  },
]

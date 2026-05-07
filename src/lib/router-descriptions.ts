// Descrições dos arquivos do Pages Router
export const pagesRouterDescriptions: Record<string, string> = {
	pages:
		"Pasta raiz para rotas da aplicação. Cada arquivo aqui vira uma rota automáticamente.",
	"_app.js":
		"Componente especial que envolve todas as páginas. Use para providers globais, contextos e layouts.",
	"_document.js":
		"Arquivo para personalizar o HTML base. Adicione meta tags e scripts globais.",
	"_error.js":
		"Página de erro personalizada. Renderizada quando ocorre um erro.",
	"404.js":
		"Página 404 personalizada. Exibida quando uma rota não é encontrada.",
	"index.js": "Rota principal (/). Renderiza a página inicial.",
	"about.js": "Rota /about. Página sobre.",
	"contact.js": "Rota /contact. Página de contato.",
	api: "Pasta para rotas de API. Funciona como backend dentro do Next.js.",
	"hello.js": "Endpoint de API em /api/hello. Responde requisições HTTP.",
	"contact.js (api)": "Endpoint de API para contato em /api/contact.",
	"[slug].js":
		"Rota dinâmica. Aceita um parâmetro dinâmico na URL (ex: /produto/123).",
	"[...slug].js":
		"Rota catch-all. Aceita múltiplos segmentos na URL (ex: /docs/a/b/c).",
	blog: "Pasta para rotas de blog. Organiza rotas dinâmicas do blog.",
	components:
		"Pasta com componentes React reutilizáveis (Header, Footer, Button, etc).",
	styles: "Pasta com arquivos de CSS global e módulos de estilo.",
	utils: "Pasta com funções utilitárias (formatDate, apiClient, etc).",
	hooks: "Pasta com custom hooks React (useAuth, useLocalStorage, etc).",
	public:
		"Pasta com arquivos estáticos (favicon, logos). Servidos na raiz (/).",
	"favicon.ico": "Ícone do site exibido na aba do navegador.",
	"logo.png": "Logo da aplicação.",
	"globals.css": "Arquivo de estilos CSS globais aplicado a toda aplicação.",
	"Home.module.css": "Módulo CSS para estilização local de componentes.",
	"formatDate.js": "Função utilitária para formatar datas.",
	"apiClient.js": "Cliente HTTP para fazer requisições à API.",
	"useAuth.js": "Custom hook para gerenciar autenticação.",
	"package.json": "Arquivo com dependências do projeto e scripts.",
	"next.config.js":
		"Configuração do Next.js (redirecionamentos, headers, webpack).",
	".env.local": "Variáveis de ambiente locais (sensíveis, não commitar).",
	".gitignore": "Arquivo que especifica quais arquivos o Git deve ignorar.",
	"README.md": "Documentação do projeto.",
};

// Descrições dos arquivos do App Router
export const appRouterDescriptions: Record<string, string> = {
	app: "Pasta raiz do App Router. Contém toda a estrutura de rotas e layouts.",
	"(marketing)":
		"Grupo de rota. Organiza arquivos sem afetar a URL. Útil para layouts diferentes.",
	"(shop)":
		"Outro grupo de rota. Agrupa rotas de e-commerce com layout específico.",
	"(overview)": "Grupo de rota interno. Organiza rotas sem afetar a URL.",
	"layout.js":
		"Componente que envolve rotas filhas. Define UI compartilhada (header, nav).",
	"page.js": "Define uma rota pública. Renderiza o conteúdo da página.",
	"loading.js":
		"Componente skeleton/fallback exibido enquanto a página carrega.",
	"error.js": "Error boundary. Captura e trata erros da rota e filhas.",
	"not-found.js": "Página 404 personalizada para a rota específica.",
	"route.js":
		"Define um endpoint de API. Usado para requisições HTTP (GET, POST, etc).",
	about: "Rota /about. Página sobre com layout do grupo (marketing).",
	blog: "Pasta de rotas de blog. Agrupa páginas de lista e detalhe.",
	"[slug]": "Rota dinâmica. Captura o slug do blog (ex: /blog/meu-artigo).",
	dashboard: "Rota /dashboard. Dashboard principal com múltiplas seções.",
	analytics:
		"Rota /dashboard/analytics. Página de analytics dentro do dashboard.",
	settings: "Rota /dashboard/settings. Página de configurações.",
	account: "Rota /account. Página de conta do usuário dentro de (shop).",
	cart: "Rota /cart. Carrinho de compras.",
	"@modal":
		"Slot paralelo. Renderiza conteúdo paralelo (ex: modal) sem afetar outras rotas.",
	"default.js":
		"Conteúdo padrão do slot paralelo quando nenhuma rota específica é renderizada.",
	products: "Rota /products. Página de produtos.",
	"[...slug]":
		"Catch-all dinâmico. Captura múltiplos segmentos (ex: /products/a/b/c).",
	"[[...slug]]":
		"Catch-all opcional. Funciona com ou sem segmentos (ex: /products ou /products/a).",
	api: "Pasta para rotas de API. Endpoints disponíveis em /api/...",
	users: "Pasta de API. Endpoints para usuários em /api/users/...",
	components: "Pasta com componentes reutilizáveis (fora da pasta app).",
	ui: "Subpasta com componentes UI (button, card, modal, etc).",
	lib: "Pasta com utilitários, configurações e helpers (fora da app).",
	"utils.ts": "Arquivo com funções utilitárias.",
	_private: "Pasta privada (prefixo _). Não participa do roteamento.",
	"helpers.ts": "Helpers específicos da rota dentro de _private.",
	public: "Pasta com arquivos estáticos (images, fonts). Servidos na raiz (/).",
	"favicon.ico": "Ícone do site exibido na aba do navegador.",
	"icon.png": "Ícone de app para PWA e dispositivos.",
	"globals.css": "Arquivo de estilos CSS globais.",
	src: "Pasta com código-fonte da aplicação.",
	"package.json": "Arquivo com dependências do projeto e scripts.",
	"next.config.js": "Configuração do Next.js.",
	"tsconfig.json": "Configuração do TypeScript.",
	".env.local": "Variáveis de ambiente locais.",
	"README.md": "Documentação do projeto.",
};

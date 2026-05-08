import { commonFiles, type FileTreeItem } from "./file-tree-types";

export const pagesRouterTree: FileTreeItem[] = [
	{
		name: "public",
		description:
			"Pasta com arquivos estáticos (favicon, logos). Servidos na raiz (/).",
		items: [
			{
				name: "favicon.ico",
				description: "Ícone do site exibido na aba do navegador.",
			},
			{ name: "logo.png", description: "Logo da aplicação." },
		],
	},
	{
		name: "src",
		description: "Pasta com código-fonte da aplicação.",
		items: [
			{
				name: "components",
				description:
					"Pasta com componentes React reutilizáveis (Header, Footer, Button, etc).",
				items: [
					{ name: "Header.js" },
					{ name: "Footer.js" },
					{ name: "Button.js" },
				],
			},
			{
				name: "styles",
				description: "Pasta com arquivos de CSS global e módulos de estilo.",
				items: [
					{
						name: "globals.css",
						description:
							"Arquivo de estilos CSS globais aplicado a toda aplicação.",
					},
					{
						name: "Home.module.css",
						description: "Módulo CSS para estilização local de componentes.",
					},
				],
			},
			{
				name: "utils",
				description:
					"Pasta com funções utilitárias (formatDate, apiClient, etc).",
				items: [
					{
						name: "formatDate.js",
						description: "Função utilitária para formatar datas.",
					},
					{
						name: "apiClient.js",
						description: "Cliente HTTP para fazer requisições à API.",
					},
				],
			},
			{
				name: "hooks",
				description:
					"Pasta com custom hooks React (useAuth, useLocalStorage, etc).",
				items: [
					{
						name: "useAuth.js",
						description: "Custom hook para gerenciar autenticação.",
					},
				],
			},
			{
				name: "pages",
				description:
					"Pasta raiz para rotas da aplicação. Cada arquivo aqui vira uma rota automáticamente.",
				items: [
					{
						name: "_app.js",
						description:
							"Componente especial que envolve todas as páginas. Use para providers globais, contextos e layouts.",
					},
					{
						name: "_document.js",
						description:
							"Arquivo para personalizar o HTML base. Adicione meta tags e scripts globais.",
					},
					{
						name: "_error.js",
						description:
							"Página de erro personalizada. Renderizada quando ocorre um erro.",
					},
					{
						name: "404.js",
						description:
							"Página 404 personalizada. Exibida quando uma rota não é encontrada.",
					},
					{
						name: "index.js",
						description: "Rota principal (/). Renderiza a página inicial.",
					},
					{
						name: "about.js",
						description: "Rota /about. Página sobre.",
					},
					{
						name: "contact.js",
						description: "Rota /contact. Página de contato.",
					},
					{
						name: "api",
						description:
							"Pasta para rotas de API. Funciona como backend dentro do Next.js.",
						items: [
							{
								name: "hello.js",
								description:
									"Endpoint de API em /api/hello. Responde requisições HTTP.",
							},
							{
								name: "contact.js",
								description: "Endpoint de API para contato em /api/contact.",
							},
						],
					},
					{
						name: "blog",
						description:
							"Pasta para rotas de blog. Organiza rotas dinâmicas do blog.",
						items: [
							{
								name: "[slug].js",
								description:
									"Rota dinâmica. Aceita um parâmetro dinâmico na URL (ex: /produto/123).",
							},
							{
								name: "[...slug].js",
								description:
									"Rota catch-all. Aceita múltiplos segmentos na URL (ex: /docs/a/b/c).",
							},
						],
					},
				],
			},
		],
	},
	...commonFiles,
];

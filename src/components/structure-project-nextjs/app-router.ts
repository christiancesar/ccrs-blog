export type FileTreeItem =
	| { name: string; description?: string; items?: never }
	| { name: string; description?: string; items: FileTreeItem[] };

export const appRouterTree: FileTreeItem[] = [
	{
		name: "public",
		description:
			"Pasta com arquivos estáticos (images, fonts). Servidos na raiz (/).",
		items: [
			{
				name: "favicon.ico",
				description: "Ícone do site exibido na aba do navegador.",
			},
		],
	},
	{
		name: "src",
		description: "Pasta com código-fonte da aplicação.",
		items: [
			{
				name: "app",
				description:
					"Pasta raiz do App Router. Contém toda a estrutura de rotas e layouts.",
				items: [
					{
						name: "(marketing)",
						description:
							"Grupo de rota. Organiza arquivos sem afetar a URL. Útil para layouts diferentes.",
						items: [
							{
								name: "layout.js",
								description:
									"Componente que envolve rotas filhas. Define UI compartilhada (header, nav).",
							},
							{
								name: "page.js",
								description:
									"Define uma rota pública. Renderiza o conteúdo da página.",
							},
							{
								name: "about",
								description:
									"Rota /about. Página sobre com layout do grupo (marketing).",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
								],
							},
							{
								name: "blog",
								description:
									"Pasta de rotas de blog. Agrupa páginas de lista e detalhe.",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
									{
										name: "[slug]",
										description:
											"Rota dinâmica. Captura o slug do blog (ex: /blog/meu-artigo).",
										items: [
											{
												name: "page.js",
												description:
													"Define uma rota pública. Renderiza o conteúdo da página.",
											},
											{
												name: "loading.js",
												description:
													"Componente skeleton/fallback exibido enquanto a página carrega.",
											},
											{
												name: "error.js",
												description:
													"Error boundary. Captura e trata erros da rota e filhas.",
											},
											{
												name: "not-found.js",
												description:
													"Página 404 personalizada para a rota específica.",
											},
										],
									},
								],
							},
						],
					},
					{
						name: "(shop)",
						description:
							"Outro grupo de rota. Agrupa rotas de e-commerce com layout específico.",
						items: [
							{
								name: "layout.js",
								description:
									"Componente que envolve rotas filhas. Define UI compartilhada (header, nav).",
							},
							{
								name: "page.js",
								description:
									"Define uma rota pública. Renderiza o conteúdo da página.",
							},
							{
								name: "account",
								description:
									"Rota /account. Página de conta do usuário dentro de (shop).",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
								],
							},
							{
								name: "cart",
								description: "Rota /cart. Carrinho de compras.",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
								],
							},
							{
								name: "@modal",
								description:
									"Slot paralelo. Renderiza conteúdo paralelo (ex: modal) sem afetar outras rotas.",
								items: [
									{
										name: "default.js",
										description:
											"Conteúdo padrão do slot paralelo quando nenhuma rota específica é renderizada.",
									},
								],
							},
						],
					},
					{
						name: "dashboard",
						description:
							"Rota /dashboard. Dashboard principal com múltiplas seções.",
						items: [
							{
								name: "layout.js",
								description:
									"Componente que envolve rotas filhas. Define UI compartilhada (header, nav).",
							},
							{
								name: "loading.js",
								description:
									"Componente skeleton/fallback exibido enquanto a página carrega.",
							},
							{
								name: "error.js",
								description:
									"Error boundary. Captura e trata erros da rota e filhas.",
							},
							{
								name: "page.js",
								description:
									"Define uma rota pública. Renderiza o conteúdo da página.",
							},
							{
								name: "(overview)",
								description:
									"Grupo de rota interno. Organiza rotas sem afetar a URL.",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
									{
										name: "loading.js",
										description:
											"Componente skeleton/fallback exibido enquanto a página carrega.",
									},
								],
							},
							{
								name: "analytics",
								description:
									"Rota /dashboard/analytics. Página de analytics dentro do dashboard.",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
								],
							},
							{
								name: "settings",
								description:
									"Rota /dashboard/settings. Página de configurações.",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
								],
							},
						],
					},
					{
						name: "products",
						description: "Rota /products. Página de produtos.",
						items: [
							{
								name: "page.js",
								description:
									"Define uma rota pública. Renderiza o conteúdo da página.",
							},
							{
								name: "[...slug]",
								description:
									"Catch-all dinâmico. Captura múltiplos segmentos (ex: /products/a/b/c).",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
								],
							},
							{
								name: "[[...slug]]",
								description:
									"Catch-all opcional. Funciona com ou sem segmentos (ex: /products ou /products/a).",
								items: [
									{
										name: "page.js",
										description:
											"Define uma rota pública. Renderiza o conteúdo da página.",
									},
								],
							},
						],
					},
					{
						name: "api",
						description:
							"Pasta para rotas de API. Endpoints disponíveis em /api/...",
						items: [
							{
								name: "route.js",
								description:
									"Define um endpoint de API. Usado para requisições HTTP (GET, POST, etc).",
							},
							{
								name: "users",
								description:
									"Pasta de API. Endpoints para usuários em /api/users/...",
								items: [
									{
										name: "route.js",
										description:
											"Define um endpoint de API. Usado para requisições HTTP (GET, POST, etc).",
									},
								],
							},
						],
					},
					{
						name: "layout.js",
						description:
							"Componente que envolve rotas filhas. Define UI compartilhada (header, nav).",
					},
					{
						name: "loading.js",
						description:
							"Componente skeleton/fallback exibido enquanto a página carrega.",
					},
					{
						name: "error.js",
						description:
							"Error boundary. Captura e trata erros da rota e filhas.",
					},
					{
						name: "not-found.js",
						description: "Página 404 personalizada para a rota específica.",
					},
					{
						name: "favicon.ico",
						description: "Ícone do site exibido na aba do navegador.",
					},
					{
						name: "icon.png",
						description: "Ícone de app para PWA e dispositivos.",
					},
					{
						name: "globals.css",
						description: "Arquivo de estilos CSS globais.",
					},
				],
			},
			{
				name: "components",
				description: "Pasta com componentes reutilizáveis (fora da pasta app).",
				items: [
					{
						name: "ui",
						description:
							"Subpasta com componentes UI (button, card, modal, etc).",
					},
					{
						name: "layout",
					},
				],
			},
			{
				name: "lib",
				description:
					"Pasta com utilitários, configurações e helpers (fora da app).",
				items: [
					{
						name: "utils.ts",
						description: "Arquivo com funções utilitárias.",
					},
				],
			},
			{
				name: "_private",
				description: "Pasta privada (prefixo _). Não participa do roteamento.",
				items: [
					{
						name: "utils",
						items: [
							{
								name: "helpers.ts",
								description: "Helpers específicos da rota dentro de _private.",
							},
						],
					},
				],
			},
		],
	},
];

"use client";

import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type FileTreeItem =
	| { name: string; description?: string; items?: never }
	| { name: string; description?: string; items: FileTreeItem[] };

export function PagesRouterStructure() {
	const pagesRouterTree: FileTreeItem[] = [
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
		{
			name: "README.md",
			description: "Documentação do projeto.",
		},
		{
			name: ".env.local",
			description: "Variáveis de ambiente locais (sensíveis, não commitar).",
		},
		{
			name: ".gitignore",
			description: "Arquivo que especifica quais arquivos o Git deve ignorar.",
		},
		{
			name: "next.config.js",
			description:
				"Configuração do Next.js (redirecionamentos, headers, webpack).",
		},
		{
			name: "package.json",
			description: "Arquivo com dependências do projeto e scripts.",
		},
	];

	const renderItem = (fileItem: FileTreeItem, key?: string) => {
		const itemKey = key || fileItem.name;
		const description = fileItem.description || "";

		if (fileItem.items && fileItem.items.length > 0) {
			return (
				<Collapsible key={itemKey} open={true}>
					<TooltipProvider>
						<Tooltip>
							<CollapsibleTrigger asChild>
								<TooltipTrigger asChild>
									<Button
										variant="ghost"
										size="sm"
										className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
									>
										<ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
										<FolderIcon className="h-4 w-4" />
										<span>{fileItem.name}</span>
									</Button>
								</TooltipTrigger>
							</CollapsibleTrigger>
							{description && (
								<TooltipContent className="max-w-xs">
									<p>{description}</p>
								</TooltipContent>
							)}
						</Tooltip>
					</TooltipProvider>
					<CollapsibleContent className="mt-1 ml-5">
						<div className="flex flex-col gap-1">
							{fileItem.items.map((child, idx) =>
								renderItem(child, `${itemKey}-${idx}`),
							)}
						</div>
					</CollapsibleContent>
				</Collapsible>
			);
		}

		return (
			<TooltipProvider key={itemKey}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="link"
							size="sm"
							className="w-full justify-start gap-2 text-foreground"
						>
							<FileIcon className="h-4 w-4" />
							<span>{fileItem.name}</span>
						</Button>
					</TooltipTrigger>
					{description && (
						<TooltipContent className="max-w-xs">
							<p>{description}</p>
						</TooltipContent>
					)}
				</Tooltip>
			</TooltipProvider>
		);
	};

	return (
		<Card className="gap-2" size="sm">
			<CardHeader>
				<CardTitle className="text-base">Pages Router</CardTitle>
				<p className="text-xs text-muted-foreground">
					Padrão anterior do Next.js baseado em arquivos na pasta{" "}
					<code>pages/</code>
				</p>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-1 text-sm">
					{pagesRouterTree.map((item, idx) => renderItem(item, `pages-${idx}`))}
				</div>
			</CardContent>
		</Card>
	);
}

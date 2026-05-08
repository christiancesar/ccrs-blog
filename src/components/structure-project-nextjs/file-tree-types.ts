export type FileTreeItem =
	| { name: string; description?: string; items?: never }
	| { name: string; description?: string; items: FileTreeItem[] };

export const commonFiles: FileTreeItem[] = [
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

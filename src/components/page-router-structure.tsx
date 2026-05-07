"use client";

import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

type FileTreeItem =
	| { name: string; items?: never }
	| { name: string; items: FileTreeItem[] };

export function PagesRouterStructure() {
	const pagesRouterTree: FileTreeItem[] = [
		{
			name: "public",
			items: [{ name: "favicon.ico" }, { name: "logo.png" }],
		},
		{
			name: "src",
			items: [
				{
					name: "components",
					items: [
						{ name: "Header.js" },
						{ name: "Footer.js" },
						{ name: "Button.js" },
					],
				},
				{
					name: "styles",
					items: [{ name: "globals.css" }, { name: "Home.module.css" }],
				},
				{
					name: "utils",
					items: [{ name: "formatDate.js" }, { name: "apiClient.js" }],
				},
				{
					name: "hooks",
					items: [{ name: "useAuth.js" }],
				},
				{
					name: "pages",
					items: [
						{ name: "_app.js" },
						{ name: "_document.js" },
						{ name: "_error.js" },
						{ name: "404.js" },
						{ name: "index.js" },
						{ name: "about.js" },
						{ name: "contact.js" },
						{
							name: "api",
							items: [{ name: "hello.js" }, { name: "contact.js" }],
						},
						{
							name: "blog",
							items: [{ name: "[slug].js" }, { name: "[...slug].js" }],
						},
					],
				},
			],
		},
		{ name: "README.md" },
		{ name: ".env.local" },
		{ name: ".gitignore" },
		{ name: "next.config.js" },
		{ name: "package.json" },
	];

	const renderItem = (fileItem: FileTreeItem, key?: string) => {
		const itemKey = key || fileItem.name;

		if (fileItem.items && fileItem.items.length > 0) {
			return (
				<Collapsible key={itemKey} open={true}>
					<CollapsibleTrigger asChild>
						<Button
							variant="ghost"
							size="sm"
							className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
						>
							<ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
							<FolderIcon className="h-4 w-4" />
							<span>{fileItem.name}</span>
						</Button>
					</CollapsibleTrigger>
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
			<Button
				key={itemKey}
				variant="link"
				size="sm"
				className="w-full justify-start gap-2 text-foreground"
			>
				<FileIcon className="h-4 w-4" />
				<span>{fileItem.name}</span>
			</Button>
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

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

export function AppRouterStructure() {
	const appRouterTree: FileTreeItem[] = [
		{
			name: "src",
			items: [
				{
					name: "app",
					items: [
						{
							name: "(marketing)",
							items: [
								{ name: "layout.js" },
								{ name: "page.js" },
								{
									name: "about",
									items: [{ name: "page.js" }],
								},
								{
									name: "blog",
									items: [
										{ name: "page.js" },
										{
											name: "[slug]",
											items: [
												{ name: "page.js" },
												{ name: "loading.js" },
												{ name: "error.js" },
												{ name: "not-found.js" },
											],
										},
									],
								},
							],
						},
						{
							name: "(shop)",
							items: [
								{ name: "layout.js" },
								{ name: "page.js" },
								{
									name: "account",
									items: [{ name: "page.js" }],
								},
								{
									name: "cart",
									items: [{ name: "page.js" }],
								},
								{
									name: "@modal",
									items: [{ name: "default.js" }],
								},
							],
						},
						{
							name: "dashboard",
							items: [
								{ name: "layout.js" },
								{ name: "loading.js" },
								{ name: "error.js" },
								{ name: "page.js" },
								{
									name: "(overview)",
									items: [{ name: "page.js" }, { name: "loading.js" }],
								},
								{
									name: "analytics",
									items: [{ name: "page.js" }],
								},
								{
									name: "settings",
									items: [{ name: "page.js" }],
								},
							],
						},
						{
							name: "products",
							items: [
								{ name: "page.js" },
								{
									name: "[...slug]",
									items: [{ name: "page.js" }],
								},
								{
									name: "[[...slug]]",
									items: [{ name: "page.js" }],
								},
							],
						},
						{
							name: "api",
							items: [
								{ name: "route.js" },
								{
									name: "users",
									items: [{ name: "route.js" }],
								},
							],
						},
						{ name: "layout.js" },
						{ name: "loading.js" },
						{ name: "error.js" },
						{ name: "not-found.js" },
						{ name: "favicon.ico" },
						{ name: "icon.png" },
						{ name: "globals.css" },
					],
				},
				{
					name: "components",
					items: [{ name: "ui" }, { name: "layout" }],
				},
				{
					name: "lib",
					items: [{ name: "utils.ts" }],
				},
				{
					name: "_private",
					items: [
						{
							name: "utils",
							items: [{ name: "helpers.ts" }],
						},
					],
				},
			],
		},
		{
			name: "public",
			items: [{ name: "favicon.ico" }],
		},
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
				<CardTitle className="text-base">App Router</CardTitle>
				<p className="text-xs text-muted-foreground">
					Novo padrão do Next.js com estrutura baseada em pasta{" "}
					<code>app/</code>
				</p>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-1 text-sm">
					{appRouterTree.map((item, idx) => renderItem(item, `app-${idx}`))}
				</div>
			</CardContent>
		</Card>
	);
}

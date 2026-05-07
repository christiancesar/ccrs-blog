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
import { appRouterTree, type FileTreeItem } from "./app-router";

export function AppRouterStructure() {
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

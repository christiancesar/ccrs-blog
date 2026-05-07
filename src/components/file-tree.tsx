"use client";

import { AppRouterStructure } from "./app-router-structure";
import { PagesRouterStructure } from "./page-router-structure";

export default function FileTree() {
	return (
		<section className="mt-16 py-8">
			<div className="mb-8">
				<h2 className="text-2xl font-bold">
					Comparativo: Pages Router vs App Router
				</h2>
				<p className="text-sm text-muted-foreground">
					Diferenças estruturais entre os dois roteadores do Next.js
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<PagesRouterStructure />
				<AppRouterStructure />
			</div>
		</section>
	);
}

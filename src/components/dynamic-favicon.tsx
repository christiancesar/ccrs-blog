"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

function setFaviconHref(href: string) {
	let link = document.querySelector(
		"link[rel*='icon']",
	) as HTMLLinkElement | null;
	if (!link) {
		link = document.createElement("link");
		link.rel = "icon";
		document.head.appendChild(link);
	}
	link.href = href;
}

function svgDataUrl(text: string, fg = "#000", bg = "transparent") {
	const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='22' fill='${fg}'>${text}</text></svg>`;
	return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function DynamicFavicon() {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const theme = resolvedTheme ?? "light";

		async function trySet() {
			const pngPath = theme === "dark" ? "/dark-mode.png" : "/white-mode.png";

			try {
				// check if a custom file exists in /public
				const res = await fetch(pngPath, { method: "HEAD" });
				if (res.ok) {
					setFaviconHref(pngPath);
					return;
				}
			} catch (e) {
				// ignore
			}

			// fallback: use generated inline SVG data URL
			if (theme === "dark") {
				setFaviconHref(svgDataUrl("C", "#FFFFFF", "transparent"));
			} else {
				setFaviconHref(svgDataUrl("C", "#000000", "transparent"));
			}
		}

		trySet();
	}, [resolvedTheme]);

	return null;
}

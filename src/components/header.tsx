"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "@/components/ui/button";

const FULL_LOGO = "ccrs.dev";

export default function Header() {
	const { resolvedTheme, setTheme } = useTheme();
	const [text, setText] = React.useState("");

	React.useEffect(() => {
		const played = sessionStorage.getItem("ccrs.logoTyped");
		if (played === "true") {
			setText(FULL_LOGO);
			return;
		}

		let i = 0;
		const interval = setInterval(() => {
			i += 1;
			setText(FULL_LOGO.slice(0, i));
			if (i >= FULL_LOGO.length) {
				clearInterval(interval);
				try {
					sessionStorage.setItem("ccrs.logoTyped", "true");
				} catch {}
			}
		}, 80);

		return () => clearInterval(interval);
	}, []);

	return (
		<header className="border-b border-border">
			<div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-4">
					<Link href="/" className="group inline-flex items-center">
						<span
							style={{ fontFamily: "var(--font-mono)" }}
							className="text-lg font-medium lowercase tracking-wide"
						>
							{text}
							<span className="ml-1 inline-block caret">|</span>
						</span>
					</Link>

					<div>
						<Button
							variant="outline"
							size="icon"
							aria-label="Alternar tema"
							onClick={() =>
								setTheme(resolvedTheme === "dark" ? "light" : "dark")
							}
							className="relative"
						>
							<Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
							<span className="sr-only">Alternar tema</span>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

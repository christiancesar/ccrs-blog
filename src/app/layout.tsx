import { Geist, Geist_Mono, Raleway, Space_Grotesk } from "next/font/google";

import "./globals.css";
import DynamicFavicon from "@/components/dynamic-favicon";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const spaceGroteskHeading = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-heading",
});

const raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn(
				"antialiased",
				fontMono.variable,
				"font-sans",
				raleway.variable,
				spaceGroteskHeading.variable,
			)}
		>
			<body>
				<ThemeProvider>
					<DynamicFavicon />
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

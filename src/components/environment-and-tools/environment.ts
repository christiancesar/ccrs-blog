import {
	CodexOpenai,
	Cursor,
	Electron,
	Expo,
	Express,
	Fastify,
	GeminiCli,
	GithubCopilot,
	Linux,
	Microsoft,
	Mongodb,
	Mysql,
	Nestjs,
	Nextdotjs,
	Nodedotjs,
	Postgresql,
	Python,
	React,
	Spark,
	Typescript,
} from "@thesvg/react";
import {
	CodeXmlIcon,
	DatabaseIcon,
	LayoutTemplateIcon,
	MonitorCogIcon,
	MonitorSmartphoneIcon,
	ServerIcon,
	SparkleIcon,
	SparklesIcon,
	TerminalIcon,
} from "lucide-react";
import Vscode from "../../assets/icons/vscode";

interface EnvironmentItem {
	key: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	name: string;
	level?: "beginner" | "intermediate" | "advanced";
	subItems?: EnvironmentItem[];
}

interface Environment {
	category: {
		icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
		name: string;
		key: string;
	};
	items: EnvironmentItem[];
}

export const environment: Environment[] = [
	{
		category: {
			icon: MonitorCogIcon,
			name: "Sistemas Operacionais",
			key: "operating-systems",
		},
		items: [
			{
				icon: Microsoft,
				key: "windows",
				name: "Windows",
			},
			{
				icon: Linux,
				key: "linux",
				name: "Linux",
			},
		],
	},
	{
		category: {
			icon: TerminalIcon,
			name: "Editor de Código",
			key: "code-editors",
		},
		items: [
			{
				icon: Vscode,
				key: "vscode",
				name: "Visual Studio Code",
			},
			{
				icon: Cursor,
				key: "cursor",
				name: "Cursor",
			},
		],
	},
	{
		category: {
			icon: SparklesIcon,
			name: "Inteligência Artificial",
			key: "artificial-intelligence",
		},
		items: [
			{
				icon: GithubCopilot,
				key: "github-copilot",
				name: "GitHub Copilot",
			},
			{
				icon: GeminiCli,
				key: "gemini-cli",
				name: "Gemini CLI",
			},
			{
				icon: CodexOpenai,
				key: "openai-codex",
				name: "OpenAI Codex",
			},
		],
	},
	{
		category: {
			icon: CodeXmlIcon,
			name: "Linguagens de Programação",
			key: "programming-languages",
		},
		items: [
			{
				icon: Typescript,
				key: "javascript-typescript",
				name: "Javascript/TypeScript",
				level: "advanced",
				subItems: [
					{
						icon: LayoutTemplateIcon,
						key: "frontend",
						name: "Desenvolvimento Frontend",
						subItems: [
							{
								icon: Nextdotjs,
								key: "nextjs",
								name: "Next.js",
								level: "advanced",
							},
							{
								icon: React,
								key: "react",
								name: "React",
								level: "advanced",
							},
							{
								icon: React,
								key: "react-native",
								name: "React Native",
								level: "intermediate",
							},
						],
					},
					{
						icon: MonitorSmartphoneIcon,
						key: "cross-platform",
						name: "Desenvolvimento Cross-Platform",
						subItems: [
							{
								icon: Electron,
								key: "electron",
								name: "Electron",
								level: "intermediate",
							},
							{
								icon: Expo,
								key: "expo",
								name: "Expo",
								level: "intermediate",
							},
						],
					},
					{
						icon: ServerIcon,
						key: "nodejs",
						name: "Node.js",
						level: "advanced",
						subItems: [
							{
								icon: Nodedotjs,
								key: "nodejs",
								name: "Node.js",
								level: "advanced",
							},
							{
								icon: Fastify,
								key: "fastify",
								name: "Fastify",
								level: "advanced",
							},
							{
								icon: Express,
								key: "express",
								name: "Express",
								level: "advanced",
							},
							{
								icon: Nestjs,
								key: "nestjs",
								name: "NestJS",
								level: "beginner",
							},
						],
					},
				],
			},
			{
				icon: Python,
				key: "python",
				name: "Python",
				level: "beginner",
			},
		],
	},
	{
		category: {
			icon: DatabaseIcon,
			name: "Bancos de Dados",
			key: "databases",
		},
		items: [
			{
				icon: Postgresql,
				key: "postgresql",
				name: "PostgreSQL",
				level: "intermediate",
			},
			{
				icon: Mysql,
				key: "mysql",
				name: "MySQL",
				level: "intermediate",
			},
			{
				icon: Mongodb,
				key: "mongodb",
				name: "MongoDB",
				level: "intermediate",
			},
		],
	},
];

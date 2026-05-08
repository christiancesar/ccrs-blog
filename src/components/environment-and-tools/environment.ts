import {
	Aws,
	AwsAmazonCognito,
	AwsAmazonEc2,
	AwsAmazonRds,
	AwsAmazonRoute53,
	AwsAmazonS3OnOutposts,
	AwsAwsLambda,
	CodexOpenai,
	Cursor,
	Docker,
	Electron,
	Expo,
	Express,
	Fastapi,
	Fastify,
	GeminiCli,
	Git,
	GithubCopilot,
	Linux,
	Microsoft,
	Mongodb,
	Mysql,
	Nestjs,
	Nextdotjs,
	Nodedotjs,
	Postgresql,
	Prisma,
	Pydantic,
	Python,
	React,
	Sqlalchemy,
	Supabase,
	Typescript,
	Vercel,
} from "@thesvg/react";
import {
	CloudIcon,
	CloudUploadIcon,
	CodeXmlIcon,
	DatabaseIcon,
	LayoutTemplateIcon,
	MonitorCogIcon,
	MonitorSmartphoneIcon,
	ServerIcon,
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
			name: "Editor de Código e Versionamento",
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
			{
				icon: Git,
				key: "git",
				name: "Git",
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
						name: "Frontend",
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
						name: "Cross-Platform",
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
						key: "javascript-backend",
						name: "Backend",
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
				name: "Python (POO)",
				level: "beginner",
				subItems: [
					{
						icon: Fastapi,
						key: "fastapi",
						name: "FastAPI",
						level: "beginner",
					},
					{
						icon: Sqlalchemy,
						key: "sqlalchemy",
						name: "SQLAlchemy (ORM)",
						level: "beginner",
					},
					{
						icon: Pydantic,
						key: "pydantic",
						name: "Pydantic",
						level: "beginner",
					},
				],
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
				level: "advanced",
			},
			{
				icon: Mysql,
				key: "mysql",
				name: "MySQL",
				level: "advanced",
			},
			{
				icon: Mongodb,
				key: "mongodb",
				name: "MongoDB",
				level: "advanced",
			},
		],
	},
	{
		category: {
			icon: CloudIcon,
			name: "Infraestrutura",
			key: "devops-infra",
		},
		items: [
			{
				icon: Docker,
				key: "docker",
				name: "Docker",
				level: "advanced",
			},
			{
				icon: Aws,
				key: "aws",
				name: "Amazon Web Services",
				level: "advanced",
				subItems: [
					{
						icon: AwsAwsLambda,
						key: "aws-lambda",
						name: "AWS Lambda",
						level: "intermediate",
					},
					{
						icon: AwsAmazonS3OnOutposts,
						key: "aws-s3",
						name: "AWS S3",
						level: "advanced",
					},
					{
						icon: AwsAmazonEc2,
						key: "ec2",
						name: "AWS EC2",
						level: "advanced",
					},
					{
						icon: AwsAmazonEc2,
						key: "aws-load-balancer",
						name: "AWS Load Balancer",
						level: "advanced",
					},
					{
						icon: AwsAmazonRoute53,
						key: "aws-route53",
						name: "AWS Route 53",
						level: "advanced",
					},
					{
						icon: AwsAmazonCognito,
						key: "aws-cognito",
						name: "AWS Cognito",
						level: "advanced",
					},
					{
						icon: AwsAmazonRds,
						key: "aws-rds",
						name: "AWS RDS",
						level: "advanced",
					},
				],
			},
			{
				icon: Supabase,
				key: "supabase",
				name: "Supabase",
				level: "advanced",
				subItems: [
					{
						icon: DatabaseIcon,
						key: "supabase-db",
						name: "Banco de Dados",
						level: "advanced",
					},
					{
						icon: CloudUploadIcon,
						key: "supabase-storage",
						name: "Armazenamento",
						level: "advanced",
					},
				],
			},
			{
				icon: Prisma,
				key: "prisma",
				name: "Prisma",
				level: "advanced",
				subItems: [
					{
						icon: DatabaseIcon,
						key: "supabase-db",
						name: "Banco de Dados",
						level: "advanced",
					},
				],
			},
			{
				icon: Vercel,
				key: "vercel",
				name: "Vercel",
				level: "advanced",
			},
		],
	},
];

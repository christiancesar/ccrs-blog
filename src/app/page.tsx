import { SiGithub } from "@icons-pack/react-simple-icons";
import {
	AtSignIcon,
	ChevronRightIcon,
	CircleFadingArrowUpIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "@/assets/icons/linkedin";
import CCRSProfile from "@/assets/images/ccrs-profile.jpeg";
import { Container } from "@/components/container";
import { environment } from "@/components/environment-and-tools/environment";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<main className="min-h-screen bg-background py-12 sm:py-16 lg:py-20">
			<Container>
				<div className="flex flex-col gap-12">
					<Alert className="border-none bg-blue-500/10 text-blue-500 dark:bg-blue-600/20">
						<CircleFadingArrowUpIcon className="size-4" />
						<AlertTitle>Página em construção</AlertTitle>
					</Alert>

					<div className="flex flex-row gap-4">
						<Card className="flex-1">
							<CardContent>
								<div className="flex flex-row gap-4">
									<Image
										src={CCRSProfile}
										alt="Christian Cesar Rodrigues Santos"
										width={100}
										height={100}
										className="rounded-md"
									/>
									<div className="flex flex-col justify-between">
										<div>
											<h1 className="font-bold text-2xl">
												Christian Cesar Rodrigues Santos
											</h1>
											<p className="text-sm text-muted-foreground">
												Desenvolvedor Frontend | React, Next.js, Electron
											</p>
										</div>
										<div className="flex flex-row gap-1">
											<Button
												variant="secondary"
												size="icon"
												// onClick={() =>
												// 	navigator.clipboard.writeText(
												// 		"christian.cesa@ccrs.dev",
												// 	)
												// }
											>
												<AtSignIcon />
											</Button>
											<Link
												href="https://www.linkedin.com/in/christian-cesar"
												target="_blank"
											>
												<Button variant="secondary" size="icon">
													<Linkedin />
												</Button>
											</Link>
											<Link
												href="https://github.com/christiancesar"
												target="_blank"
											>
												<Button variant="secondary" size="icon">
													<SiGithub />
												</Button>
											</Link>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card className="w-32">
							<CardHeader>
								<CardTitle className="text-base">Atualizações</CardTitle>
							</CardHeader>
						</Card>
					</div>

					<div>
						<div className="flex flex-col gap-4">
							<div>
								<h2 className="text-2xl font-bold">
									Ambiente de Desenvolvimento
								</h2>
								<p className="text-sm text-muted-foreground">
									Algumas ferramentas, linguagens e tecnologias que utilizo no
									desenvolvimento.
								</p>
							</div>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{environment.map((env) => (
									<Card key={env.category.key}>
										<CardHeader>
											<CardTitle>
												<div className="flex items-center gap-4">
													<div className="flex p-2 items-center justify-center rounded-sm bg-primary">
														{env.category.icon && (
															<env.category.icon className="size-4 text-primary-foreground" />
														)}
													</div>
													{env.category.name}
												</div>
											</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="flex flex-col gap-2">
												{env.items.map((item) => (
													<Item
														variant="outline"
														key={item.key}
														className={cn(item.subItems && "cursor-pointer")}
													>
														<ItemMedia variant="icon">
															{item.icon && <item.icon />}
														</ItemMedia>
														<ItemContent>
															<ItemTitle>
																{item.name}{" "}
																{item.level && (
																	<Badge
																		variant="outline"
																		className={cn(
																			item.level === "advanced" &&
																				"bg-primary text-primary-foreground",
																		)}
																	>
																		{item.level}
																	</Badge>
																)}
															</ItemTitle>
														</ItemContent>
														{item.subItems && (
															<ItemActions>
																<Popover>
																	<PopoverTrigger asChild>
																		<Button variant="outline" size="icon">
																			<ChevronRightIcon />
																		</Button>
																	</PopoverTrigger>
																	<PopoverContent>
																		<div className="flex flex-col gap-2">
																			{item.subItems.map((subItem) => (
																				<Item
																					variant="outline"
																					key={subItem.key}
																					className={cn(
																						subItem.subItems &&
																							"cursor-pointer",
																					)}
																				>
																					<ItemMedia variant="icon">
																						{subItem.icon && <subItem.icon />}
																					</ItemMedia>
																					<ItemContent>
																						<ItemTitle>
																							{subItem.name}
																							{""}
																							{item.level && (
																								<Badge
																									variant="outline"
																									className={cn(
																										item.level === "advanced" &&
																											"bg-primary text-primary-foreground",
																									)}
																								>
																									{item.level}
																								</Badge>
																							)}
																						</ItemTitle>
																					</ItemContent>
																				</Item>
																			))}
																		</div>
																	</PopoverContent>
																</Popover>
															</ItemActions>
														)}
													</Item>
												))}
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</main>
	);
}

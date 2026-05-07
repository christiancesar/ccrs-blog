import { SiGithub } from "@icons-pack/react-simple-icons";
import { AtSignIcon, ChevronRightIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import { Linkedin } from "@/assets/icons/linkedin";
import CCRSProfile from "@/assets/images/ccrs-profile.jpeg";
import { Container } from "@/components/container";
import { environment } from "@/components/environment-and-tools/environment";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<main className="min-h-screen bg-background py-12 sm:py-16 lg:py-20">
			<Container>
				<div className="flex flex-col gap-12">
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
											<Button variant="secondary" size="icon">
												<AtSignIcon />
											</Button>
											<Button variant="secondary" size="icon">
												<Linkedin color="#ffffff" />
											</Button>
											<Button variant="secondary" size="icon">
												<SiGithub />
											</Button>
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
															<ItemTitle>{item.name}</ItemTitle>
															{/* <ItemDescription>
																Learn how to get started with our components.
															</ItemDescription> */}
														</ItemContent>
														{item.subItems && (
															<ItemActions>
																<ChevronRightIcon className="size-4" />
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

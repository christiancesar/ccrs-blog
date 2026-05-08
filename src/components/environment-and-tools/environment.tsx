import { ChevronRightIcon } from "lucide-react";
import { environment } from "@/components/environment-and-tools/environment-types";
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

export function Environment() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<h2 className="text-2xl font-bold">Ambiente de Desenvolvimento</h2>
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
																		subItem.subItems && "cursor-pointer",
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
	);
}

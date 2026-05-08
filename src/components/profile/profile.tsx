import Image from "next/image";
import CCRSProfile from "@/assets/images/ccrs-profile.jpeg";
import { Social } from "@/components/social/social";
import { Card, CardContent } from "@/components/ui/card";

export function Profile() {
	return (
		<div className="grid grid-cols-1">
			<Card>
				<CardContent>
					<div className="flex flex-col  gap-4 sm:flex-row sm:gap-6">
						<div className="flex flex-row items-center gap-4">
							<Image
								src={CCRSProfile}
								alt="Christian Cesar Rodrigues Santos"
								width={80}
								height={80}
								className="rounded-md size-16 sm:size-20 md:size-24 lg:size-28"
								priority
							/>
							<div className="flex flex-col h-full justify-between">
								<div className="space-y-1">
									<h1 className="truncate font-bold text-sm sm:text-2xl lg:text-3xl">
										Christian Cesar Rodrigues Santos
									</h1>
									<p className="text-xs text-muted-foreground sm:text-sm">
										Desenvolvedor FullStack JavaScript | React, Next.js,
										Electron and Node
									</p>
								</div>
								<div className="md:flex hidden">
									<Social />
								</div>
							</div>
						</div>
						<div className="sm:hidden">
							<Social />
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

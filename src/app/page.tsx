import { CircleFadingArrowUpIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Environment } from "@/components/environment-and-tools/environment";
import { Profile } from "@/components/profile/profile";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function Home() {
	return (
		<main className="min-h-screen bg-background py-12 sm:py-16 lg:py-20">
			<Container>
				<div className="flex flex-col gap-12">
					<Alert className="border-none bg-blue-500/10 text-blue-500 dark:bg-blue-600/20">
						<CircleFadingArrowUpIcon className="size-4" />
						<AlertTitle>Página em construção</AlertTitle>
					</Alert>

					<Profile />

					<Environment />
				</div>
			</Container>
		</main>
	);
}

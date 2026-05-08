import { CircleFadingArrowUpIcon } from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/container";
import { Environment } from "@/components/environment-and-tools/environment";
import { Profile } from "@/components/profile/profile";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { posts } from "@/data/posts";

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
					<div className="flex flex-col gap-4">
						<div>
							<h2 className="text-2xl font-bold">Postagens</h2>
							{/* <p className="text-sm text-muted-foreground">
								Aqui irei compartilhar artigos, t
							</p> */}
						</div>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{posts.map((post) => (
								<BlogCard key={post.id} post={post} />
							))}
						</div>
					</div>
					<Environment />
				</div>
			</Container>
		</main>
	);
}

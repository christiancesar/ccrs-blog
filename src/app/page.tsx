import { BlogCard } from "@/components/blog-card";
import { Container } from "@/components/container";
import FileTree from "@/components/file-tree";
import { posts } from "@/data/posts";

export default function Home() {
	return (
		<main className="min-h-screen bg-background py-12 sm:py-16 lg:py-20">
			<Container>
				<div className="mb-12 flex flex-col gap-2">
					<h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Blog</h1>
					<p className="text-muted-foreground">
						Artigos sobre desenvolvimento web, arquitetura e tecnologias
						modernas.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{posts.map((post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
				<FileTree />
			</Container>
		</main>
	);
}

import { Container } from "@/components/container";
import FileTree from "@/components/structure-project-nextjs/file-tree";

export default async function NextPage() {
	return (
		<main className="min-h-screen bg-background py-12 sm:py-16 lg:py-20">
			<Container>
				<FileTree />
			</Container>
		</main>
	);
}

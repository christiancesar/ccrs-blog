export interface Post {
	id: string;
	slug: string;
	title: string;
	description: string;
	image: string;
	date: string;
}

export const posts: Post[] = [
	{
		id: "019e02ea-6e9b-7215-a1db-da570461b85b",
		slug: "next-js-evolution",
		title: "Next.js Evolution",
		description: "Porque migrar de Pages Router para App Router (v16)",
		image: "/assets/posts/019e02ea-6e9b-7215-a1db-da570461b85b.png",
		date: "2026-05-06",
	},
];

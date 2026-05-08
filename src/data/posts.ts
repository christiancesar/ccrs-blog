import NextJsStructure from "@/assets/images/tumb-next.jpg";
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
		id: "019e057c-e392-7e14-a165-69159fb10e7e",
		slug: "next-js-structure",
		title: "Next.js Router",
		description: "Migrando Pages Router para App Router",
		image: NextJsStructure.src,
		date: "2026-05-06",
	},
];

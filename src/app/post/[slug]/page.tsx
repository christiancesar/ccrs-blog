import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/container"
import { posts } from "@/data/posts"

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>←</span>
          Voltar
        </Link>

        <article className="mx-auto w-full max-w-3xl">
          <header className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {post.description}
            </p>
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none dark:prose-invert">
            {post.content.split("\n").map((paragraph, idx) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={idx} className="mt-8 mb-4 text-2xl font-bold">
                    {paragraph.replace(/^##\s*/, "")}
                  </h2>
                )
              }
              if (paragraph.trim() === "") {
                return null
              }
              return (
                <p key={idx} className="mb-4 text-base leading-relaxed text-foreground">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </article>
      </Container>
    </main>
  )
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

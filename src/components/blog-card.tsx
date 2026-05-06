"use client"

import Image from "next/image"
import Link from "next/link"
import { Post } from "@/data/posts"

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.slug}`}>
      <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <h2 className="line-clamp-2 text-lg font-semibold group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-auto text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString("pt-BR")}
          </div>
        </div>
      </article>
    </Link>
  )
}

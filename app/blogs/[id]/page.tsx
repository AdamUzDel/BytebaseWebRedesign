import { blogPosts } from "@/lib/blogData"
import Image from "next/image"
import { notFound } from "next/navigation"
import { JsonLd } from "react-schemaorg"
import type { BlogPosting } from "schema-dts"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id.toString() === id)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd<BlogPosting>
        item={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          image: post.image,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            "@type": "Person",
            name: post.author,
          },
          publisher: {
            "@type": "Organization",
            name: "BytebaseTech",
            logo: {
              "@type": "ImageObject",
              url: "https://bytebasetech.com/logo.png",
            },
          },
          description: post.summary,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://bytebasetech.com/blogs/${post.id}`,
          },
        }}
      />
      <h1 className="text-4xl font-bold mt-14 mb-4">{post.title}</h1>
      <div className="mb-6 text-gray-600">
        <span>{post.date}</span> • <span>{post.author}</span> • <span>{post.category}</span>
      </div>
      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}


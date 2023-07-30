import matter from 'gray-matter'
// import marked from 'marked'

export async function getPostBySlug(slug: string) {
  const fileContent = await import(`../posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = meta.content
  let tags: any[] = [];
  if (meta.data.tags) {
    tags = meta.data.tags.split(',')
  }

  return {
    title: meta.data.title ?? null,
    date: meta.data.date ?? null,
    author: meta.data.author ?? null,
    image: meta.data.image ?? null, 
    tags: tags ?? null,
    content: content
  }
}
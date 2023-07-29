import matter from 'gray-matter'
// import marked from 'marked'

export async function getPostBySlug(slug: string) {
  const fileContent = await import(`../posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = meta.content 
  return {
    title: meta.data.title, 
    content: content
  }
}
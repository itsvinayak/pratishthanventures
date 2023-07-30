import matter from 'gray-matter';
import fs from 'fs';

export async function getAllPosts() {
    const allPost = fs.readdirSync('posts')
    const posts: any[] = [];
    allPost.forEach((post) => {
        const fileContent = fs.readFileSync(`posts/${post}`, 'utf8')
        const meta = matter(fileContent)
        let tags: any[] = [];
        if(meta.data.tags){
           tags = meta.data.tags.split(',');
        }
        posts.push({
            date: meta.data.date ?? null,
            title: meta.data.title ?? null,
            author: meta.data.author ?? null,
            image: meta.data.image ?? null,
            tags: tags,
            slug: post.replace('.md', ''),
            content: meta.content
        });
    });
    return posts;
}

export async function getAllPostSlug() {
    const allPost = fs.readdirSync('posts')
    const slugs: any[] = [];
    allPost.forEach((post) => {
        slugs.push({
            slug: post.replace('.md', '')
        });
    });
    return slugs;
}
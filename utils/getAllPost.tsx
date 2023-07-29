import matter from 'gray-matter';
import fs from 'fs';

export async function getAllPosts() {
    const allPost = fs.readdirSync('posts')
    const posts: any[] = [];
    allPost.forEach((post) => {
        const fileContent = fs.readFileSync(`posts/${post}`, 'utf8')
        const meta = matter(fileContent)
        posts.push({
            date: meta.data.date,
            title: meta.data.title
        });
    });
    return posts;
}
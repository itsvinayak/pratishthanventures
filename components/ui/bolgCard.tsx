import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const tagStyling = {
    borderRadius: "0.25rem",
    color: "white",
    backgroundColor: "#343A40",
    fontSize: "0.875rem",
    lineHeight: 1.5
};

const BlogCard = ({ post }: any) => {

    let postImage: any = null;
    if (post.image) {
        postImage = <Image src={post.image} className="card-img-top" alt={post.title} />;
    }

    let tags = post.tags.map((tag: any, index: number) => {
        return (
            <span style={tagStyling} className="mx-2 my-4 p-1" key={index}>{tag}</span>
        )
    });

    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href={`/post/${post.slug}`} className="text-decoration-none">
                <div className="card">
                    {postImage}
                    <div className="card-body">
                        <h4 className="card-title text-center">{post.title}</h4>
                        <div className="mb-3">
                            <div className="card-subtitle text-muted">{post.date}</div>
                            <div className="card-subtitle text-muted">{post.author}</div>
                        </div>
                        {tags}
                        <hr style={{ width: "50%", float: "right" }} />
                        <p className="card-text text-justify pt-4">{post.content}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
};

export default BlogCard;
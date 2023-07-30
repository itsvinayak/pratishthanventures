import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import { getPostBySlug } from "@/utils/getSinglePost";
import { getAllPostSlug } from "@/utils/getAllPost";
// import { serialize } from "next-mdx-remote/serialize";

export const getStaticPaths = async () => {
    const slugs = await getAllPostSlug();
    const paths = slugs.map((slugData: any) => {
        return {
            params: {
                slug: slugData.slug
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (props: { params: { slug: any; }; }) => {
    const slug = props.params.slug;
    const post = await getPostBySlug(slug);
    // const mdxSource = await serialize(post.content);
    return {
        props: {
            post
        }
    }
}

const Post = ({ post }: any) => {
    return (
        <>
            <NavBar />
            <div className="container pt-5 mt-5">
                <div className="row d-flex align-items-center justify-content-center shadow p-3 mb-5 bg-white rounded ">
                    <div className="col-lg-12 text-center lead display-3 p-2 text-white" style={{ backgroundColor: "#DA753F" }}>
                        {post.title}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3">
                                    <div className="card-subtitle text-muted">{post.date}</div>
                                    <div className="card-subtitle text-muted">{post.author}</div>
                                </div>
                                <hr style={{ width: "50%", float: "right" }} />
                                <p className="card-text text-justify pt-4">{post.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};


export default Post;
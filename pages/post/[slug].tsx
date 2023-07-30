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
    let tags: any[] = [];
    if (post.tags) {
        tags = post.tags.map((tag: any) => {
            return (
                <span className="badge rounded-pill bg-dark text-white m-1 p-2" key={tag}>{tag}</span>
            )
        });
    }
    return (
        <>
            <NavBar />
            <div style={{ minHeight: "100vh" }}>
                <div className="container-fluid pt-5 mt-5">
                    <div className="row d-flex align-items-center justify-content-center p-3 mb-5 bg-white ">
                        <div className="col-lg-12 text-center lead display-3 p-2">
                            {post.title}
                        </div>
                    </div>
                    <div className="container d-flex align-items-center justify-content-center p-3 mb-5 bg-white ">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <div className="card-subtitle text-muted">{post.date}</div>
                                            <div className="card-subtitle text-muted">{post.author}</div>
                                            {tags}
                                        </div>
                                        <hr style={{ width: "50%", float: "right" }} />
                                        <p className="card-text text-justify p-5  rounded">{post.content}</p>
                                    </div>
                                </div>
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
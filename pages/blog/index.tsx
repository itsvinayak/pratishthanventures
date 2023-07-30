import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { getAllPosts } from "@/utils/getAllPost";
import BlogCard from "@/components/ui/bolgCard";



export async function getStaticProps() {
    const posts = await getAllPosts();
    return {
        props: {
            posts
        }
    }
}

const styling = {
    minHeight: "100vh"
};

const BlogPage = ({ posts }: any) => {
    return (
        <>
            <NavBar />
            <div className="container pt-5 mt-5" style={styling}>
                <div className="row d-flex align-items-center justify-content-center shadow p-3 mb-5 bg-white rounded ">
                    <div className="col-lg-12 text-center lead display-3 p-2 text-white" style={{ backgroundColor: "#DA753F" }}>
                        The Pratishthan Blog
                    </div>
                </div>
                <div className="row">
                    {posts.map((post: any) => {
                        return (
                            <div className="col-lg-6 p-3" key={post.slug}>
                                <BlogCard post={post} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogPage;
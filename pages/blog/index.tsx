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
            <div className="container-fluid pt-5 mt-5" style={styling}>
                <div className="row d-flex align-items-center justify-content-center ">
                    <div className="col-md-10 text-center display-3 p-2" style={{backgroundColor: "#f2f2f2"}}>
                        Blog
                    </div>
                </div>
                <div className="row">
                    {posts.map((post: any) => {
                        return (
                            <div className="col-md-4 p-3" key={post.slug}>
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
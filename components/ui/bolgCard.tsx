const BlogCard = ({ post }: any) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                <p className="card-text">{post.content}</p>
            </div>
        </div>
    )
};

export default BlogCard;
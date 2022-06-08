const BlogList = ({blogs, title}) => {
    

    return ( 
        
        <div className="blog-list">
            <h2 className="title">{title}</h2>
            {blogs.map((blog)=>(
                <div className="post-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <small>Author: {blog.author}</small>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
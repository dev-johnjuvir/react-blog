const BlogList = ({blogs, title, handleDelete}) => {
    

    return ( 
        
        <div className="blog-list">
            <h2 className="title">{title}</h2>
            {blogs.map((blog)=>(
                <div className="post-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <small>Author: {blog.author}</small>
                    <br/>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
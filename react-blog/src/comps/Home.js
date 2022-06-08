import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Blog Entry No.1', body:'lorem ipsum...', author:'Juvir', id: 1},
        {title: 'Blog Entry No.2', body:'lorem ipsum...', author:'John', id: 2},
        {title: 'Blog Entry No.3', body:'lorem ipsum...', author:'Jane', id: 3}
    ]);

    return ( 
        <div className="inner">
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}

export default Home;
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Blog Entry No.1', body:'lorem ipsum...', author:'Juvir', id: 1},
        {title: 'Blog Entry No.2', body:'lorem ipsum...', author:'John', id: 2},
        {title: 'Blog Entry No.3', body:'lorem ipsum...', author:'Juvir', id: 3}
    ]);

    const [name, setName] = useState('Juvir');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return ( 
        <div className="inner">
            <BlogList blogs={blogs} title="Blog Posts" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Juvir' )} title="Juvir's Blogs"/>

            <button onClick={() => setName('John')}>Change name</button>
        </div>
     );
}

export default Home;
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The blog</h1>
            <div className="links">
                <a href="/" className="active">Home</a>
                <a href="/create">New Blog</a>
                <a href="/about">About</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
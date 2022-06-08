const Home = () => {

    const handleClick = (e) => {
        console.log("g pareeeh", e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello '+ name, e);
    }

    return ( 
        <div className="inner">
            <p style={{
                color:"#aaa",
                fontSize: "1.2rem",
                lineHeight: "1.1"
            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusantium, enim quae, velit eos aliquid ipsum numquam atque unde quibusdam illum delectus eaque dignissimos aut, quia aliquam libero sequi nulla.</p>
                        <button onClick={(e) => handleClickAgain("Juvir", e.target)}>Click again</button>

            <button onClick={handleClick}>Click</button>
        </div>
     );
}

export default Home;
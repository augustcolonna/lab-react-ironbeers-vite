import { Link } from "react-router-dom";



function HomePage () {
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/beers">All Beers</Link><br></br>
            <Link to="/random-beer">Random Beer</Link><br></br>
            <Link to="/new-beer">New Beer</Link>
        </div>
      )
    }


    export default HomePage;
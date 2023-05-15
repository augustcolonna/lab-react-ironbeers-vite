import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ListBeers() {
  const [beerData, setBeerData] = useState([]);
  const axiosData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response);
      if (response.status === 200) {
        setBeerData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosData();
  }, []);

  return (
    <div>
      <Nav />
      {beerData.lenght === 0 ? (
        <p>Getting beers....</p>
      ) : (
        beerData.map((beers) => {
          return (
            <div key={beers._id}>
            <Link to={`/beers/${beers._id}`}>
              <img src={beers.image_url} alt="" />
              <h2>{beers.name}</h2>
              <p>{beers.tagline}</p>
              <p>{beers.contributed_by}</p>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ListBeers;

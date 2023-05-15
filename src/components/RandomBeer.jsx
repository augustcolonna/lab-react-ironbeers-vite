import Nav from "./Nav";
import { useEffect, useState } from "react";
import axios from "axios";


function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState();
  const axiosData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );

      if (response.status === 200) {
        setRandomBeer(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosData();
  }, []);

  useEffect(() => {
    console.log(randomBeer)
  }, [randomBeer]);

  return (
    <div>
      <Nav />
      <h1>Random Beer</h1>
      {!randomBeer ? (
        <p>Getting the beer...</p>
      ) : (
        <div>
          <img src={randomBeer.image_url} alt="" />
          <h2>{randomBeer.name}</h2>
          <p>{randomBeer.tagline}</p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;

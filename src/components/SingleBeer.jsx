import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SingleBeer() {
  const { id } = useParams();
  console.log(id);

  const [singleBeer, setSingleBeer] = useState();
  const axiosData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );

      if (response.status === 200) {
        setSingleBeer(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axiosData();
  }, [id]);

  return (
    <div>
      <Nav />
      <h1>More about this beer:</h1>

      {!singleBeer ? (
        <p>Getting the beer...</p>
      ) : (
        <div>
          <img src={singleBeer.image_url} alt="" />
          <h2>{singleBeer.name}</h2>
          <p>{singleBeer.tagline}</p>
          <p>{singleBeer.first_brewed}</p>
          <p>{singleBeer.attenuation_level}</p>
          <p>{singleBeer.description}</p>
          <p>{singleBeer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default SingleBeer;

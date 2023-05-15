import Nav from "./Nav";
import { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [input, setInput] = useState({
    name: "",
    tagline: "",
    description: "",
    firstBrewed: "",
    brewerTips: "",
    attentuationLevel: "",
    contributedBy: "",
  });

  const handleChange = ((event) => {
    const {name, value} = event.target
    setInput(((prevInput) => ({...prevInput, [name]: value})))
  });

  const handleSubmit = (async (event) => {
    event.preventDefault()
    try {
        const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', input)
        console.log(response)

    } catch (error) {
        console.log(error)
    }
  })


  return (
    <div>
      <Nav />

      <>
        <h1>Create a New Beer:</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input value={input.name} name="name" onChange={handleChange} />
          </label>
          <label>
            Tagline:
            <input
              value={input.tagline}
              name="tagline"
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <input
              value={input.description}
              name="description"
              onChange={handleChange}
            />
          </label>
          <label>
            First Brewed:
            <input
              value={input.firstBrewed}
              name="firstBrewed"
              onChange={handleChange}
            />
          </label>
          <label>
            Brewer Tips:
            <input
              value={input.brewerTips}
              name="brewerTips"
              onChange={handleChange}
            />
          </label>
          <label>
            Attentuation Level:
            <input
              value={input.attentuationLevel}
              name="attentuationLevel"
              onChange={handleChange}
            />
          </label>
          <label>
            Contributed By:
            <input
              value={input.contributedBy}
              name="contributedBy"
              onChange={ handleChange }
            />
          </label>
          <button type="submit">Create</button>
        </form>
      </>
    </div>
  );
}

export default NewBeer;

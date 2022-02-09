import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokedex, setPokedex] = useState([])
  const [search, setSearch] = useState("")

  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [front, setfront] = useState("")
  const [back, setBack] = useState("")

  function handleSearch(e){
    setSearch(e.target.value)
  }

  const filteredPokemon = pokedex.filter( pokemon => {
    return (pokemon.name).toLowerCase().includes(search.toLowerCase())
  })

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(r=>r.json())
    .then(setPokedex)
  },[])

  function handleName(e) {
    setName(e.target.value)
    console.log(name)
  }

  function handleHp(e) {
    setHp(e.target.value)
    console.log(hp)
  }

  function handleFront(e) {
    setfront(e.target.value)
    console.log(front)
  }

  function handleBack(e) {
    setBack(e.target.value)
    console.log(back)
  }

  function handleForm() {

    const newPokemon = {
    name : name,
    hp : hp,
    sprites: {
      front: front,
      back: back
    }
  }
    setPokedex([newPokemon, ...pokedex])
    console.log(newPokemon)

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r=>r.json())
    .then(data => console.log(data))
    }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleName={handleName} handleHp={handleHp} handleFront={handleFront} handleBack={handleBack} handleForm={handleForm}/>
      <br />
      <Search pokedex={pokedex} onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokedex={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;

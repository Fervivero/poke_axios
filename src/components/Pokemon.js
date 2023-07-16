import React, { useState, useEffect } from "react";
import axios from 'axios';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState({});
    const [sendRequest, setSendRequest] = useState(false);

    useEffect(() => {
        if (sendRequest) {
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
                .then(response => {
                    setPokemons(response.data.results)
                })
                .catch()
            setSendRequest(false);
        }
    }, [sendRequest]);

    const onClick = (e) => {
        setSendRequest(true)
    }


    return (
        <div>
            <button onClick={onClick}>Fetch Pokemon</button>
            <hr />
            <h3>Lista de pokemones</h3>
            {pokemons.length > 0 && pokemons.map((pokemon, index) => (
                <div key={index} >
                    <p>{index + 1}.- {pokemon.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Pokemon;
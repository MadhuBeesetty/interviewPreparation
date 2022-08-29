import { useState, useEffect } from "react";
import { SearchBox } from "../searchbox/searchBox"
import { FilmsList } from "../filmsList/filmsList";

export const MovieList = () =>{

const [data, updateData] = useState('');
  const inputCallback = (inputValue) => {
    updateData(inputValue);
  };
  const [movieData, updateMovieData] = useState({});

useEffect(() => {
  if(data)
fetch('https://swapi.dev/api/people/1/')
.then(response => response.json())
.then((e) => {updateMovieData(e)})
}, [data])

return (
  <div>
    <p>this is movieList</p>
    <SearchBox inputCallback={inputCallback} />
    <p>{data}</p>
    { movieData && <FilmsList data={movieData}/> }
    </div>
)
}

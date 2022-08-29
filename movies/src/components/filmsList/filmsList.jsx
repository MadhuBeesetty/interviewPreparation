import {useState, useEffect} from 'react';

export const FilmsList = ({data}) => {
  const [movieName, updateMovieName] = useState([]);

console.log(movieName);

const getMovieDetails = (url) => {
  return (
    fetch(url)
    .then(response => response.json())
    .then((e) => updateMovieName([...movieName, e.title]))
  )
  }

  return (
    <>{data?.films?.map((e) => (<div><button onClick={() => getMovieDetails(e)}>movie</button></div>))}
    <>
    {movieName.map((title) => <p>{title}</p>)}
    </>
    </>)
};

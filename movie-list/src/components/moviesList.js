import React, { useEffect, useState } from 'react';

const MoviesList = () => {

  const [list, updateList] = useState();

  // fetch('https://swapi.dev/api/films')
  //   .then(response => response.json())
  //   .then(((data) => { updateList(data); console.log(data) }));

  // console.log(list, 'movies list');

  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then((data) => { updateList(data) });
  }, [])

  return (
    <div>
      {list && list.results.map((eachMovie, i) => (
        <div key={i} >
          <p>{eachMovie.title}</p>
        </div>
      ))}
      <p>
        'movie list'
      </p>
    </div>
  )
}


export default MoviesList;

// make an API call to this end point 'https://swapi.dev/api/films' and create a list of all movies.
import fetch from "node-fetch";

const moviesApi = () => {
  let movies = [];
  fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then((data => movies.push(data)
  buildList());
  .catch ((err) => {
  console.error(err);
});
console.log(movies);
}

function buildList() {
  let title = document.querySelector('nav>h2');
  title.innerHTML = `${Movie.getTotalMovies()} Star Wars Movies`;
  let main = document.querySelector('main');
  main.innerHTML = theMovies
    .map((m) => {
      return `<div class="movie" data-ref="${m.id}" data-episode="${m.episode_id
        }">
        <h2>Star Wars: ${m.title} ( ${m.getYear()} )</h2>
        <p>Directed by: ${m.director}</p>
        <p>Random character:
          <span class="char">${m.getRandomChar()}</span>
        </p>
        <p><a href="${m.url}" target="_blank">More info</a></p>
      </div>`;
    })
    .join('');
}

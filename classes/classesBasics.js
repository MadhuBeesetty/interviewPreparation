// creating a basic class and using it because i have to do it for shitty interviews.

class todo {
  constructor(name1, name2, moviess) {
    this.firstName = name1;
    this.secondName = name2;
    this.movies = moviess;
  }

  printmethod() {
    console.log(this.firstName, this.secondName);
  }

  addmovies() {
    let num = this.movies.length;
    this.movies.push(num + 1);
  }
}

const madhu = new todo('Madhu', 'sudhan', [1, 2, 3, 4, 5, 6, 7, 8, 9]);

madhu.printmethod();
madhu.addmovies();
console.log(madhu.movies);
madhu.addmovies();
madhu.addmovies();
console.log(madhu.movies);

// Movie Manager Class
class Exercise3 {
  constructor() {
    this.movies = new Map();
  }

  add_genre(genre) {
    if (!this.movies.has(genre)) {
      this.movies.set(genre, []);
      return true;
    }
    return false;
  }

  add_movie_in_genre(genre, new_movie) {
    if (!this.movies.has(genre)) return false;
    const genreMovies = this.movies.get(genre);
    if (genreMovies.some((m) => m.id === new_movie.id)) return false;
    genreMovies.push(new_movie);
    return true;
  }

  update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    const movies = this.movies.get(genre);
    if (!movies) return false;
    const movie = movies.find((m) => m.id === movie_id);
    if (movie) {
      movie.title = new_title;
      return true;
    }
    return false;
  }

  delete_movie_by_genre_and_movie_id(genre, movie_id) {
    const movies = this.movies.get(genre);
    if (!movies) return false;
    const index = movies.findIndex((m) => m.id === movie_id);
    if (index >= 0) {
      movies.splice(index, 1);
      return true;
    }
    return false;
  }

  get_movie_title_by_id(genre, movie_id) {
    const movies = this.movies.get(genre);
    const movie = movies?.find((m) => m.id === movie_id);
    return movie ? movie.title : '';
  }
}

window.runQ3 = function () {
  const existingImg = document.getElementById('q2-image');
  if (existingImg) existingImg.remove();

  const m = new Exercise3();
  m.add_genre('thriller');
  m.add_movie_in_genre('thriller', { id: '1', title: 'The American' });
  m.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' });
  m.update_movie_title_by_genre_and_movie_id('thriller', '1', 'The Bourne Identity');
  const title = m.get_movie_title_by_id('thriller', '1');

  const output = [
    'Q3: Movie Manager',
    'Updated Title: ' + title,
    'Deleted: ' + m.delete_movie_by_genre_and_movie_id('thriller', '2'),
    'After Deletion: ' + JSON.stringify(m.movies.get('thriller'))
  ].join('\n');

  document.getElementById('output').innerText = output;
};

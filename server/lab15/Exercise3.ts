type Movie = { id: string; title: string };

export class Exercise3 {
  #movies = new Map<string, Movie[]>();

  add_genre(genre: string): boolean {
    if (!this.#movies.has(genre)) {
      this.#movies.set(genre, []);
      return true;
    }
    return false;
  }

  add_movie_in_genre(genre: string, new_movie: Movie): boolean {
    if (!this.#movies.has(genre)) return false;

    const movies = this.#movies.get(genre)!;
    const exists = movies.some((m) => m.id === new_movie.id);
    if (!exists) {
      movies.push(new_movie);
      return true;
    }
    return false;
  }

  update_movie_title_by_genre_and_movie_id(
    genre: string,
    movie_id: string,
    new_title: string
  ): boolean {
    const movies = this.#movies.get(genre);
    if (!movies) return false;

    const movie = movies.find((m) => m.id === movie_id);
    if (movie) {
      movie.title = new_title;
      return true;
    }
    return false;
  }

  delete_movie_by_genre_and_movie_id(genre: string, movie_id: string): boolean {
    const movies = this.#movies.get(genre);
    if (!movies) return false;

    const index = movies.findIndex((m) => m.id === movie_id);
    if (index >= 0) {
      movies.splice(index, 1);
      return true;
    }
    return false;
  }

  get_movie_title_by_id(genre: string, movie_id: string): string | null {
    const movies = this.#movies.get(genre);
    if (!movies) return null;

    const movie = movies.find((m) => m.id === movie_id);
    return movie ? movie.title : null;
  }
}

import responseMovies from "../mocks/with-results.json";

export const useMovie = () => {
    const movies = responseMovies.Search;

    const mappedMovies = movies.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        type: movie.Type,
        year: movie.Year,
        poster: movie.Poster,
    }));

    return { movies: mappedMovies };
};

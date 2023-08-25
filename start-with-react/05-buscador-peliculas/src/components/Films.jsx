export const Films = ({ movies }) => {
    const hasMovies = movies?.length > 0;

    return hasMovies ? (
        <ul>
            {movies.map(({ id, title, year, poster }) => (
                <li key={id}>
                    <h2>{title}</h2>
                    <p>{year}</p>
                    <img src={poster} alt={`Poster of ${title}`} />
                </li>
            ))}
        </ul>
    ) : (
        <p>Doesn't exist films that contain "asd" in your name.</p>
    );
};

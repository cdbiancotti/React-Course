import "./App.css";
import { searchFilmsByName } from "./services/searchFilms";
import { Films } from "./components/Films";
import { useMovie } from "./hooks/useMovie";
import { useRef } from "react";

const App = () => {
    const { movies } = useMovie();
    const inputRef = useRef();

    const searchFilm = (event) => {
        nameToSearch = "";
        searchFilmsByName({ nameToSearch }).then(setFilms);
        console.log("Searching", import.meta.env.VITE_OMDB_API_KEY);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // const { query } = Object.fromEntries(new window.FormData(event.tarjet));
        const nameToSearch = inputRef.current.value;
    };

    return (
        <>
            <header>
                <h1>Films Searcher</h1>
                <section>
                    <form onSubmit={handleSubmit}>
                        {/* <input name='query' type="text" placeholder="Avatar, Batman, Wolverine..." /> */}
                        <input ref={inputRef} type="text" placeholder="Avatar, Batman, Wolverine..." />
                        <button>Search</button>
                    </form>
                </section>
            </header>
            <main>
                <Films movies={movies} />
            </main>
        </>
    );
};

export default App;

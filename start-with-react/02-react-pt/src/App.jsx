import { CATAAS_BASE_API_URL } from "./constants";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

const App = () => {
    const [fact, refreshFact] = useCatFact();
    const { imageUrl } = useCatImage({ fact });

    const handleClick = async () => refreshFact();

    return (
        <main>
            <h1>Random Cat's Fact</h1>
            <button onClick={handleClick}>Update fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt="Image related to the first word of the actual random fact" />}
        </main>
    );
};

export default App;

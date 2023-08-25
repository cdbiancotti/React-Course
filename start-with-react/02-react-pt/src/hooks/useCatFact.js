import { useEffect, useState } from "react";
import { getRandomFact } from "../sevices/fact";

export function useCatFact() {
    const [fact, setFact] = useState();

    const refreshFact = () => {
        // getRandomFact().then(setFact); // Se puede hacer asi pero no es buena practica
        getRandomFact().then((newFact) => setFact(newFact));
    };

    useEffect(refreshFact, []);

    return [fact, refreshFact];
}

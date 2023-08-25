import { useEffect, useState } from "react";
import { CATAAS_BASE_API_URL } from "../constants";

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        if (!fact) return;
        const factFirstWord = fact.split(" ")[0];
        fetch(`${CATAAS_BASE_API_URL}/cat/says/${factFirstWord}?json=true`)
            .then((res) => res.json())
            .then((data) => setImageUrl(`${CATAAS_BASE_API_URL}${data.url}`));
    }, [fact]);

    return { imageUrl };
}

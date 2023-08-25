import { RANDOM_CATFACT_ENDPOINT_URL } from "../constants";

export const getRandomFact = async () => {
    const res = await fetch(RANDOM_CATFACT_ENDPOINT_URL);
    const data = await res.json();
    const { fact } = data;
    return fact;
};

import withResults from "../mocks/with-results.json";

export const searchFilmsByName = ({ nameToSearch }) => {
    return new Promise((resolve) => {
        resolve(withResults);
    });
};

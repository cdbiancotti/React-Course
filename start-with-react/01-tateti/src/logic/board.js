import { WINNER_COMBOS } from "../constants";

export const checkForWinnerFrom = (newBoard) => {
    for (const combos of WINNER_COMBOS) {
        const [a, b, c] = combos;
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
            return newBoard[a];
        }
    }
    return null;
};

export const checkEndGame = (newBoard) => {
    return newBoard.every((value) => value !== null);
};

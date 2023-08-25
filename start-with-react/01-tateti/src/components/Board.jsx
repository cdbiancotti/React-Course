import { Square } from "./Square";

export const Board = ({ board, updateBoard }) => {
    return board.map((value, index) => {
        return <Square key={index} value={value} index={index} updateBoard={updateBoard} />;
    });
};

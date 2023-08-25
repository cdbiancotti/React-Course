import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import { Square } from "./components/Square";
import { checkEndGame, checkForWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";

function App() {
    const [board, setBoard] = useState(() => {
        const boardStored = window.localStorage.getItem("board");
        return boardStored ? JSON.parse(boardStored) : Array(9).fill(null);
    });
    const [turn, setTurn] = useState(() => {
        const turnStored = window.localStorage.getItem("turn");
        return turnStored ?? Array(9).fill(null);
    });
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        // Prevent value change
        if (board[index] || winner) return;

        // Update board
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        const newWinner = checkForWinnerFrom(newBoard);
        if (newWinner) {
            confetti();
            setWinner(newWinner);
        } else if (checkEndGame(newBoard)) {
            setWinner(false);
        }

        // Change game turn
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        saveGameToStorage({ board: newBoard, turn: newTurn });
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
        resetGameStorage();
    };

    return (
        <main className="board">
            <h1>Ta te ti</h1>
            <button onClick={resetGame}>Reset game</button>
            <section className="game">
                <Board board={board} updateBoard={updateBoard} />
            </section>
            <section className="turn">
                <Square isSelected={turn === TURNS.X} value={TURNS.X} />
                <Square isSelected={turn === TURNS.O} value={TURNS.O} />
            </section>
            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    );
}

export default App;

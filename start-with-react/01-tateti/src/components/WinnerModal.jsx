import { Square } from "./Square";

export const WinnerModal = ({ winner, resetGame }) => {
    if (winner === null) return null;

    const finishMessage = winner === false ? "Empate" : "Gano";

    return (
        <section className="winner">
            <div className="text">
                <h2>{finishMessage}</h2>
                <header className="win">{winner && <Square value={winner} />}</header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
};

export const Square = ({ isSelected, updateBoard, value, index }) => {
    const className = `square ${isSelected ? "is-selected" : ""}`;

    const handleSquareClick = () => {
        updateBoard(index);
    };

    return (
        <div className={className} onClick={handleSquareClick}>
            {value}
        </div>
    );
};

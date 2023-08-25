import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [enabled, setEnable] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setPosition({ x: clientX, y: clientY });
        };

        if (enabled) {
            window.addEventListener("pointermove", handleMouseMove);
        }

        return () => {
            window.removeEventListener("pointermove", handleMouseMove);
        };
    }, [enabled]);

    useEffect(() => {
        document.body.classList.toggle("no-cursor");
        return () => {
            document.body.classList.remove("no-cursor");
        };
    }, [enabled]);

    return (
        <main>
            <div
                style={{
                    position: "absolute",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    opacity: 0.3,
                    border: "1px solid white",
                    pointerEvents: "none",
                    top: -20,
                    left: -20,
                    width: 40,
                    height: 40,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            />
            <button onClick={() => setEnable(!enabled)}>{enabled ? "Desactivar" : "Activar"} seguir puntero</button>
        </main>
    );
}

export default App;

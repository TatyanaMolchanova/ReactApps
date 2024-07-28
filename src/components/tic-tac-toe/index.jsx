import "./styles.css";
import {useEffect, useState} from "react";

const Square = ({value, onClick}) => {
    return (
        <button onClick={onClick} className="square">{value}</button>
    )
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(''))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState('')

    const getWinner = (squares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i]

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {

                return squares[x]
            }
        }

        return null;
    }

    const handleClick = (getCurrentSquare) => {
        let copySquares = [...squares];
        if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
        copySquares[getCurrentSquare] = isXTurn ? 'X' : '0';
        setIsXTurn(!isXTurn)
        setSquares(copySquares)
    }

    const handleRestart = () => {
        setIsXTurn(true)
        setSquares(Array(9).fill(''))
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(square => square !== '')) {
            setStatus('This is a draw! Please, play again...')
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. Please, play again`)
        } else {
            setStatus(`Next player is ${isXTurn ? 'X' : '0'}`)
        }
    }, [squares, isXTurn]);

    return (
        <div className="tick-tac-toe-container">
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart Game</button>
        </div>
    )
}
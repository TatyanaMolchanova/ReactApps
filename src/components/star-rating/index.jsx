import { FaStar } from 'react-icons/fa';
import { useState } from "react";
import './styles.css';

export default function StarRating({numberOfStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = (getCurrentIndex) => {
        setHover(rating)
    }

    return (
        <div className="star-rating">
            {
                [...Array(numberOfStars)].map((_, index) => {
                    index++

                    return <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    size={40}
                    />
                })
            }
        </div>
    )
}
import {useRef, useState} from "react";
import useFetch from "../use-fetch";


export default function ScrollToTopAndBottom() {
    const {data, error, pending} = useFetch(
        "https://dummyjson.com/products?limit=100",
        {},
    )

    const bottomRef = useRef(null)

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    const handleScrollToBottom = () => {
        bottomRef.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    if (error) {
        return <h1>Error occured, please, try again...</h1>
    }

    if (pending) {
        return <h1>Loading data, please, wait...</h1>
    }

    return (
        <div>
            <h1>Scroll To Top and Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
            <ul style={{listStyle: 'none'}}>
                {
                    data && data.products && data.products.length ?
                        data.products.map(item => <li key={item.title}>{item.title}</li>)
                        : null
                }
            </ul>
            <button onClick={handleScrollToTop}>Scroll To Top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom of the page</h3>
        </div>
    )





}
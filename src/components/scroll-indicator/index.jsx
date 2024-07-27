import {useEffect, useState} from "react";
import "./scroll.css"

export default function ScrollIndicator({url}) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const fetchData = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            console.log(data)

            if (data && data.products && data.products.length) {
                setData(data.products)
                setLoading(false)
            }

        } catch(error) {
            console.log(error)
            setErrorMessage(error.message)
            setLoading(false)
        }
    }

    const handleScrollPercentage = () => {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100)
    }


    useEffect(() => {
        fetchData(url)
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, []);

    if (loading) {
        return (
            <div>Loading data, please, wait...</div>
        )
    }

    if (errorMessage) {
        return (<div>Error: {errorMessage}</div>)
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        style={{width: `${scrollPercentage}%`}}
                        className="current-progress-bar"></div>
                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <p key={dataItem.title}>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}
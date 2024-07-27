import {useEffect, useState} from "react";
import "./styles.css"

export default function LoadMoreDataButton() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)
    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            console.log('result', result)

            if (result && result.products && result.products.length) {
                setProducts((previousData) => [...previousData, ...result.products])
                setLoading(false)
            }
        } catch(e) {
            console.log('e', e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products && products.length) setDisableButton(true)
    }, [products])

    if (loading) {
        return (
            <div>Loading data, please, wait...</div>
        )
    }


    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length ?
                        products.map((product, index) => (
                            <div
                                className="product"
                            key={product.thumbnail + index}
                            >
                                <img
                                    key={product.title + index}
                                    src={product.thumbnail}
                                    alt={product.title}/>
                                {product.title}
                            </div>
                        ))
                        : null
                }
            </div>
            <div className="button-container">
                <button
                    disabled={disableButton}
                    onClick={() => setCount(count + 1)}
                >Load More Products</button>
                {
                    disableButton
                    ? <p>You have reached to 100 products</p>
                    : null
                }
            </div>
        </div>
    )
}
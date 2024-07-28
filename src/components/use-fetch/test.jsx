import useFetch from "./index";


export default function UseFetchHookTest() {

    const {data, error, pending} = useFetch(`https://dummyjson.com/products`, {});

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {
                pending ? <h3>Pending, please, wait</h3> : null
            }
            {
                error ? <h3>There is {error}</h3> : null
            }
            {
                data && data.products && data.products.length ?
                    data.products.map(productItem => (
                        <p key={productItem.key}>{productItem.title}</p>
                    ))
                    : null
            }
        </div>
    )
}
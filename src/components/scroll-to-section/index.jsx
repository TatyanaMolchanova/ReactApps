import {useRef} from "react";


export default function ScrollToSection() {
    const ref = useRef(null)

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red',
            }
        },
        {
            label: 'Fourth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue',
            }
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'black',
            }
        },
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red',
            }
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'yellow',
            }
        },
        {
            label: 'Sixth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'orange',
            }
        },
    ]

    const handleScrollToSection = () => {
        let position = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: position,
            behavior: 'smooth',
        })
    }

    return (
        <div>
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToSection}>Click to Scroll</button>
            {
                data.map((dataItem, index) => <div
                    ref={index === 3 ? ref : null}
                    style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                </div>)
            }
        </div>
    )
}
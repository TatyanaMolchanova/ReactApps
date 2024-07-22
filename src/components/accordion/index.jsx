import { useState } from "react";
import data from "./data";
import "./styles.css"


export default function Accordion() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (currentID) => {
        setSelected(currentID === selected ? null : currentID)
    }

    const handleMultiSelection = (currentID) => {
        let copyMultiple = [...multiple]
        const findIndexOfCurrentID = copyMultiple.indexOf(currentID)

        if (findIndexOfCurrentID === -1) {
            copyMultiple.push(currentID)
        } else {
            copyMultiple.splice(findIndexOfCurrentID, 1)
        }

        setMultiple(copyMultiple)
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => (
                            <div className="item" key={dataItem.id}>
                                <div
                                    onClick={
                                    enableMultiSelection ?
                                        () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)}
                                    className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection ?
                                        multiple.indexOf(dataItem.id) !== -1 &&
                                        (<div className="content">{dataItem.answer}</div>)
                                        : selected === dataItem.id &&
                                        (<div className="content">{dataItem.answer}</div>)
                                }
                            </div>
                        ))
                        : <div>No data found</div>
                }
            </div>
        </div>
    )
}
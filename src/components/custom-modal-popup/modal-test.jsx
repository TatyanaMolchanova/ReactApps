import {useState} from "react";
import Modal from "./modal";


export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false)

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup)
    }

    const onClose = () => {
        setShowModalPopup(false)
    }


    return (
        <div>
            <button
                onClick={handleToggleModalPopup}
            >Open Modal Popup</button>
            {
                showModalPopup && <Modal
                    onClose={onClose}
                    id={"test-modal"}
                    header={<h1>Customized Header</h1>}
                    body={<div>Customized body</div>}
                    footer={<h3>Customized Footer</h3>}
                />
            }
        </div>
    )
}
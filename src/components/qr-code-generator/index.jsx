import QRCode from "react-qr-code";
import {useState} from "react";


export default function QRCodeGenerator() {

    const [qrCode, setQRCode] = useState('')
    const [input, setInput] = useState('')

    const handleGenerateQRCode = () => {
        setQRCode(input)
        setInput('')
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Enter your text here"
                />
                <button
                    disabled={!(input && input.trim() !== '')}
                    onClick={handleGenerateQRCode}>Generate</button>
            </div>
            <div>
                <QRCode
                    id="qr-code"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                />
            </div>
        </div>
    )
}
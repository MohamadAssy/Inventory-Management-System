import { useState } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function BarcodeScanner({ onScan, onClose }) {
    const [error, setError] = useState(null);

    return (
        <div className="scanner-modal">
            <button className="btn btn-danger close-btn" onClick={onClose}>X</button>

            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (err) setError(err.message);
                    if (result) onScan(result.text);
                }}
            />

            {error && <div className="alert alert-danger">{error}</div>}
            <div className="text-center mt-2">
                <div className="scanner-frame"></div>
                <p>Scan product barcode</p>
            </div>
        </div>
    );
}
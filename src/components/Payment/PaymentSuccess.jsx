import React from 'react'

import logo from "../../assets/image/Vector (4).png";
import { IoClose } from 'react-icons/io5';
import { BsCheckCircle } from "react-icons/bs";

const PaymentSuccess = ({ onClose }) => {
    return (
        <div className='popup-overlay'>
            <div className="popup-box-wrapper">
                <IoClose className="popup-close" onClick={onClose} />
                <div className="popup-box">
                    <div className="popup-header">

                        <div className="popup-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <BsCheckCircle className="popup-check-icon" />
                    </div>
                    <div className="popup-body">
                        <h2 className="popup-title">Ödəniş həyata keçirildi!</h2>
                        <p className="popup-amount">1.00 AZN</p>
                        <div className="popup-details-box">
                            <ul className="pop-up-details">
                                <li className='popup-list-item'><span className='popup-list-label'>Ödəniş tarixi:</span><span className='popup-list-value'>11.06.2024, 15:15</span></li>
                                <li className='popup-list-item'><span className='popup-list-label'>Ödəniş nömrəsi:</span><span className='popup-list-value'>6267753</span></li>
                                <li className='popup-list-item'><span className='popup-list-label'>Şəxsi hesab:</span><span className='popup-list-value'>18328565</span></li>
                                <li className='popup-list-item'><span className='popup-list-label'>Xidmət</span><span className='popup-list-value'>Balansı artır</span></li>
                                <li className='popup-list-item'><span className='popup-list-label'>Ödəniş üsulu:</span><span className='popup-list-value'>Bank kartı</span></li>
                            </ul>
                        </div>
                    </div>
                    <button className='popup-button'>
                        Əla
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PaymentSuccess
import React from 'react'
import { IoClose } from 'react-icons/io5';
import logo from "../../assets/image/Vector (4).png";

const BalancePopup = ({ onClose }) => {
  return (
    <div className='popup-overlay'>
      <div className="popup-box-wrapper">
        <IoClose className="popup-close" onClick={onClose} />
        <div className="popup-box">
          <div className="popup-header">
            <div className="popup-logo">
              <img src={logo} alt="Logo" />
            </div>
            <p className='balance-popup-title'>Şəxsi hesabı artır</p>
          </div>
          <form className="balance-popup-form">
            <div className="balance-payment-amount">
              <span className='balance-amount-label'>Ödəniləcəq məbləğ</span>
              <span className='balance-amount-value'>1.00 Azn</span>
            </div>
            <div className="card-input-group">
              <label className='input-label'>Kart nömrəsi</label>
              <input type="text" className="card-input"
                placeholder="XXXX XXXX XXXX XXXX"
                required />
            </div>
            <div className="card-extra-info">
              <div className="card-expiry-group">
                <label className='input-label'>Son istifadə tarixi</label>
                <input type="text" className="card-input"
                  placeholder="MM/YY"
                  required />
              </div>
              <div className="card-cvv-group">
                <label className='input-label'>CVV/CVC</label>
                <input type="text" className="card-input"
                  placeholder="***"
                  required />
              </div>
            </div>
          </form>
          <button className='popup-button'>
            Ödə
          </button>
          <div className="checkbox-group">
            <input type="checkbox" className="checkbox-input" />
            <label className="checkbox-label">
              Sürətli ödənişlər üçün kartı yadda saxla
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalancePopup
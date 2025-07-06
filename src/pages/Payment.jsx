import React, { useState } from 'react'
import PaymentSuccess from '../components/Payment/PaymentSuccess';
import BalancePopup from '../components/Payment/BalancePopup';



const Payment = () => {

    const [showPopup, setShowPopup]=useState(false);
    const [showBalancePopup,setShowBalancePopup]=useState(false)

    const handlePayment=()=>{
        setShowPopup(true)
    }
    const handleBalanceIncrease=()=>{
        setShowBalancePopup(true)
    }

  return (
    <section style={{display:"flex", flexDirection:"column", gap:"24px"}}>
        <h2>Ödəniş səhifəsi</h2>
        <button style={{width:"150px", height:"28px"}} onClick={handlePayment}>Ödəniş həyata keçrildi</button>
        {
            showPopup && <PaymentSuccess onClose={()=>setShowPopup(false)}/>
        }
        <button style={{width:"150px", height:"28px"}} onClick={handleBalanceIncrease}>Şəxsi Hesabı artır</button>
        {
            showBalancePopup && <BalancePopup onClose={()=>setShowBalancePopup(false)}/>
        }
    </section>
  )
}

export default Payment
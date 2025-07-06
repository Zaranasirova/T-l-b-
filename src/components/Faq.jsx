import React, { useState } from 'react'
import { faqData } from '../data';
import { FaChevronDown } from "react-icons/fa6";



const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };
    return (
        <section className="faq-section">
            <h3 className="faq-title">Tez-tez verilən suallar</h3>
            <div className="faq-body">
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                            {item.question}
                            <span className={`arrow ${activeIndex === index ? 'open' : ''}`}><FaChevronDown /></span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Faq
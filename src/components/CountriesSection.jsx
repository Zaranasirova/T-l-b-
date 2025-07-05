import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import CountryCard from './CountryCard';

const CountriesSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <section className='countries-section'>
            <div className='countries-header'>
                <h3 className='countries-title'>Ölkələr</h3>
                <div className="country-dropdown">
                    <div className="dropdown-wrapper" onClick={toggleDropdown}>
                        <div className="dropdown-texts">
                            <label className="dropdown-label">Ölkə</label>
                            <span className="selected-text">Seçilməyib</span>
                        </div>
                        <IoIosArrowDown className="dropdown-icon" />
                    </div>

                    <ul className={`dropdown-options ${isOpen ? "show" : "hidden"}`}>
                        <li className="dropdown-option">Azərbaycan</li>
                        <li className="dropdown-option">Türkiyə</li>
                        <li className="dropdown-option">Böyük Britaniya</li>
                    </ul>
                </div>
            </div>
            <div className="countries-body">
                <CountryCard />
            </div>
        </section>
    )
}

export default CountriesSection
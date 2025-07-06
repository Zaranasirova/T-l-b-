import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ label = "Seçim", options = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedText, setSelectedText] = useState('');

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (option) => {
        setSelectedText(option);
        setIsOpen(false);
    };
    
    return (
        <div className="country-dropdown">
            <div className="dropdown-wrapper" onClick={toggleDropdown}>
                <div className="dropdown-texts">
                    <label className="dropdown-label">{label}</label>
                    <span className="selected-text">
                        {selectedText || 'Seçilməyib'}
                    </span>
                </div>
                <IoIosArrowDown className="dropdown-icon" />
            </div>

            <ul className={`dropdown-options ${isOpen ? "show" : "hidden"}`}>
                {options.map((item, index) => (
                    <li
                        key={index}
                        className="dropdown-option"
                        onClick={() => handleSelect(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
     

    )
}

export default Dropdown
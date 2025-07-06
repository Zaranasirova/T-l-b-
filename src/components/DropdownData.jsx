import React from 'react'
import Dropdown from './Dropdown';

const DropdownData = () => {
    const dropdownData = [
        { label: 'Ölkə', options: ['Azərbaycan', 'Türkiyə', 'Almaniya'] },
        { label: 'Şəhər', options: ['Bakı', 'Antalya', 'Berlin'] },
        { label: 'Universitet', options: ['Alanya Alaaddin Keybukat Üniversitesi', 'UNEC', 'BDU'] },
        { label: 'İxtisas', options: ['İqtisadiyyat', 'Neft-qaz mühəndisliyi'] },
        { label: 'Müddət', options: ['4il', '5il'] },
    ];
    return (
        <div className='dropdown-data'>
            {dropdownData.map((item, index) => (
                <Dropdown key={index} label={item.label} options={item.options} />
            ))}
        </div>
    )
}

export default DropdownData
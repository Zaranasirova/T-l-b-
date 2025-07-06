import React from 'react'

import CountryCard from './CountryCard';
import Dropdown from './Dropdown';

const CountriesSection = () => {

    return (
        <section className='countries-section'>
            <div className='countries-header'>
                <h3 className='countries-title'>Ölkələr</h3>
               
                <Dropdown
                    label="Ölkə"
                    options={['Azərbaycan', 'Türkiyə', 'Böyük Britaniya']}
                />
            </div>
            <div className="countries-body">
                <CountryCard />
            </div>
        </section>
    )
}

export default CountriesSection
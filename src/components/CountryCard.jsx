import React from 'react'
import { countriesData } from '../data'


const CountryCard = () => {
    return (
        <div>
            <div className="countries-grid">
                {
                    countriesData.map((country) => (
                        <div className='country-card' key={country.id}>
                           <div className='country-image'>
                             <img src={country.image} alt={country.name}  />
                           </div>
                            <div className="country-info">
                                <h3 className='country-name'>{country.name}</h3>
                            <p className='country-description'>{country.description}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default CountryCard
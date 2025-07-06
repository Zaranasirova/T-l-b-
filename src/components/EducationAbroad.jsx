import React from 'react';


const EducationAbroad = ({image,title,description}) => {
    return (
        <section className='study-abroad-section'>
            <div className="study-abroad-container">
                <div className="study-abroad-content">
                    <h3 className='study-abroad-title'>{title}</h3>
                    <p className='study-abroad-description'>{description}</p>
                </div>
                <div className="study-abroad-image">
                    <div className='study-abroad-img-wrapper'> <img src={image} alt="main_image" /></div>
                </div>
            </div>
        </section>
    )
}

export default EducationAbroad
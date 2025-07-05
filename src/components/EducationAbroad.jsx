import React from 'react';
import main_image from "../assets/image/Frame 1436.png";

const EducationAbroad = () => {
    return (
        <section className='study-abroad-section'>
            <div className="study-abroad-container">
                <div className="study-abroad-content">
                    <h3 className='study-abroad-title'>Xaricdə Təhsil</h3>
                    <p className='study-abroad-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>
                <div className="study-abroad-image">
                    <div className='study-abroad-img-wrapper'> <img src={main_image} alt="main_image" /></div>
                </div>
            </div>
        </section>
    )
}

export default EducationAbroad
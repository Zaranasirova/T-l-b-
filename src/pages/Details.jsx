import React from 'react'
import EducationAbroad from '../components/EducationAbroad'
import britaniya from "../assets/image/Britaniya.png";
import DropdownTableSection from '../components/DropdownTableSection';
import Faq from '../components/Faq';

const Details = () => {
  return (
    <main className='container'>
        <EducationAbroad title="Böyük Britaniya" image={britaniya} description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."/>
        <DropdownTableSection/>
        <Faq/>
    </main>
  )
}

export default Details
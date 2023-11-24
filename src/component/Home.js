import React from 'react';
import "../css/Home.css";
import img1 from "../image/1.jpg";
import Aboutus from './Aboutus.js';
import Skills from './skills.js';
import Contact from './Contact.js';


function Home() {
  return (
 <>
 {/* <div className="m1">
 <div className="dd">
    <h1>Adithya Shetty B</h1>
    <h3>Iam a frontend developer </h3></div>
    <div className="ddd">
    <img src={img1}></img>
 </div>
   
</div> */}
 <section id="profile">
      <div class="section__pic-container">
        <img src={img1} alt="John Doe profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h2 class="title">Adithya Shetty B</h2>
        <p class="section__text__p2">Full-Stack Developer</p>
       
        <div id="socials-container">

    <i class='bx bxl-instagram bx-lg'/>
    <i class='bx bxl-facebook-circle bx-lg '/>
    <i class='bx bxl-twitter bx-lg' />
    <i class='bx bxl-linkedin bx-lg'/>
    </div>
      
      </div>
    </section>
  <Aboutus/>
  <Skills/>
  <Contact/>
 </>
  );
}

export default Home;
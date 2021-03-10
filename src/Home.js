import React from 'react';
import './../src/styles.css';
import C3 from './img/C3.jpg';
import about from './img/about.jpg';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import icon6 from './img/icon6.png';
import KashyT from './img/KashyT.png';
import Loan from './img/Loan.png';
import Nike from './img/Nike.png';
import Timer from './img/Timer.png';
import github from './img/github.jpg';
import { Link } from 'react-router-dom';





const Home = () => {

 window.addEventListener('scroll', function(){
  var header = document.querySelector('header');

  // This is how you DE-BUG your code. You console out everyepeice realtedto the things thats not working
  // in a page with a lot of logic youwill have a ton of cosole log statements...
  // that is normale butbefore you push your code up you must delete them all!
  // console.log('header tag', header);

  if (header) {
   header.classList.toggle('sticky', window.scrollY > 0);
  }
 })

 function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  if (menuToggle.classList) {
   menuToggle.classList.toggle('active');
   menu.classList.toggle('active');
  }}


      return (
<div>
 <header>
  <a href="#" className="logo">Ralph Claude</a>
  <div className="toggle" onClick={toggleMenu} />
  <ul className="menu">
   <li><a href="#home" onClick={toggleMenu}>Home</a></li>
   <li><a href="#about" onClick={toggleMenu}>About</a></li>
   <li><a href="#services" onClick={toggleMenu}>Services</a></li>
   <li><a href="#work" onClick={toggleMenu}>Projects</a></li>
   <li><a href="#testimonial" onClick={toggleMenu}>Testimonial</a></li>
   <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
  </ul>
 </header>


 <section className="banner" id="home" style={{
  backgroundImage: `url(${C3})`,
  position: `relative`,
  display: `flex`,
  minheight: `100vh`,
  backgroundSize: `cover`,
  backgroundPosition: `right`,
  justifyself: `center`,
  alignitems: `center`,
  transform: `0.6s`
 }}>
  
  <div className="textBx">
   <h2> Ralph Claude</h2>
   <h3> Web developer</h3>
   <a href="#about" className="btn"> About me</a>
  </div>
 </section>

 {/* About Me */}

 <section className="about" id="about">
  <div className="heading">
   <h2>About me </h2>
  </div>
  <div className="content">
   <div className="contentBx w50">
    <h3> My Story</h3>
    <p>Just a kid from Florida, I have always been a creative person, the first time started drawing was in my books and getting into trouble with his strict Haitian parents. In 2020 I decided to not let my inner child’s imagination and passion die down, I took a step purchased a starter HP laptop and successfully started my programming Journey. During this time I continued to assist other entrepreneurs and peers with web design. I have a growing portfolio and offer my services to young creatives and entrepreneurs looking for a direction or a push. I believe in people and the power of human connection.</p>
   </div>

   <div className="w50">
    <img src={about} alt="" className="img" />
   </div>

  </div>
 </section>

 {/* Services  */}
 <section className="services" id="services">

  <div className="heading white">
   <h2> My Services</h2>
   <p> Languages  Skills </p>
  </div>
  <div className="content">
   <div className="servicesBx">
    <img src={icon1} alt="" className="img" />
    <h2>HTML</h2>
    <p>A very strong knowledge of the language. able to produce clean and percise lines of code. A Strong foundation of nested tags and Div's. Straight to the point no unnecessary divs.  </p>
   </div>
   <div className="servicesBx">
    <img src={icon2} alt="" className="img" />
    <h2>CSS</h2>
    <p>An Elite desinger. Able to design neat and colorful pages. The ability to create stylish webpages with reasonable amount of code. Clean and Neat code. </p>
   </div>
   <div className="servicesBx">
    <img src={icon3} alt="" className="img" />
    <h2>Javascript</h2>
    <p>Strong knowledge of functions, OPP's, ES6, Promises, Ajax and fetch API and DOM Manipulation and the Javascript basics </p>
   </div>
   <div className="servicesBx">
    <img src={icon4} alt="" className="img" />
    <h2>React </h2>
    <p> Hooks, React Router, Redux, React bootstrap and Gestalt. Very minor/Beginner knowledge of react. Formilar with the basics  </p>
   </div>

   <div className="servicesBx">
    <img src={icon6} alt="" className="img" />
    <h2>Web developer</h2>
    <p>My services and prices will be dicuss with contact</p>
   </div>
  </div>
 </section>

 {/* End of section */}

 {/* Services */}

 <section className="work" id="work">
  <div className="heading">
   <h2> My Latest work</h2>
   <p> Work using HTML, CSS, Javascript, Bootstrap</p>
  </div>

  <div className="gallery-center">
   <article className="gallery-img-container">
    <a href="https://kashy.netlify.app/">
     <img src={KashyT} alt="" className="gallery-img" />
    </a>
    <a href="#" className="gallery-icon">
     <i className="fa fa-search" />
    </a>
   </article>
   <br />
   <article className="gallery-img-container">
    <a href="https://loan1.netlify.app">
     <img src={Loan} alt="" className="gallery-img" />
    </a>
    <a href="#" className="gallery-icon">
     <i className="fa fa-search" />
    </a>
   </article>
   <br />
   <article className="gallery-img-container">
    <a href="https://nike2.netlify.app">
     <img src={Nike} alt="" className="gallery-img" />
    </a>
    <a href="#" className="gallery-icon">
     <i className="fa fa-search" />
    </a>
   </article>
   <br />
   <article className="gallery-img-container">
    <a href="https://timerrs.netlify.app/">
     <img src={Timer} alt="" className="gallery-img" />
    </a>
    <a href="#" className="gallery-icon">
     <i className="fa fa-search" />
    </a>
   </article>
  </div>
  <br />
  <article className="gallery-img-container">
   <a href="https://githubrc.netlify.app">
    <img src={github} alt="" className="gallery-img" />
   </a>
   <a href="#" className="gallery-icon">
    <i className="fa fa-search"> </i>
   </a>
  </article>

 <Link to="/project">
         <div className="heading">
          <a href="Projects.html" className="btn-2" >View More</a>
         </div>
 </Link>


 </section>





 <section className="testimonal" id="testimonial">
  <div className="heading">
   <h2> Testimonial</h2>
   <p>.</p>
  </div>
  <div className="content">
   <div className="testimonialBx">
    <p> A great web developer he's work and skills have helped me understand my  own code better. He brings a different approach to the world of software engineering Thanks to him he has inspire me to do better in my personal code </p>
    <h3>-Rene Claude<br /><span>Senior Web developer</span></h3>
   </div>
   <div className="testimonialBx">
    <p> He's legit. He made my website and now more and more people want to do business. he has single handly brought more clientele A great preson too. </p>
    <h3>-Kashy T<br /><span> Celebrity Barber</span></h3>
   </div>
  </div>
 </section>



 <section className="contact" id="contact">
  <div className="heading white">
   <h2> Contact Me</h2>
   <p>For any service and bussiness inquiries, please contact me.</p>
  </div>

  <div className="content">
   <div className="contactInfoBox">
    <h3>Contact Info</h3>
    <div className="contactInfoBx">
     <div className="box">
      <div className="icon">
       <i className="fa fa-map-marker"></i>
      </div>
      <div className="text">
       <h3>Address</h3>
       <p>Fort Myers, Florida <br /> 33936 </p>
      </div>
     </div>
     <div className="box">
      <div className="icon">
       <i
        className="fa fa-phone"></i>
      </div>
      <div className="text">
       <h3>Phone</h3>
       <p>(239)-867-1723</p>
      </div>
     </div>

     <div className="box">
      <div className="icon">
       <i className="fa fa-envelope"></i>
      </div>
      <div className="text">
       <h3>Email</h3>
       <p>Clauderalph256@gmail.com</p>
      </div>
     </div>
    </div>
   </div>

   {/* <div className="content">
            <div className="contactInfoBox">

               <h3>Contact Info</h3>

              <div className="contactInfoBx">
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>Fort Myers, Florida <br /> 33936 </p>
                  </div>
                </div>

                <div className="box">
                  <div className="icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="text">
                    <h3>Phone</h3>
                    <p>(239)-867-1723</p>
                  </div>
                </div>

                <div className="box">
                  <div className="icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="text">
                    <h3>Email</h3>
                    <p>Clauderalph256@gmail.com</p>
                  </div>
                </div>

              </div>
            </div>
          </div> */}
   <div className="formBx">
    <form action="https://formspree.io/f/mbjpzzbe" method="POST">
     <h3>Message Me</h3>
     <input type="text" name="name" placeholder="Full Name" />
     <input type="email" name placeholder="Email" />
     <textarea name="" id="" cols='30' rows='10' placeholder="Your Message"></textarea>
     <input type="submit" name='' defaultValue="send" />
    </form>
   </div>
  </div>
 </section>




</div>
)
}

export default Home;
import React from 'react';
import './../src/styles.css';
import KashyT from './img/KashyT.png';
import Loan from './img/Loan.png';
import Nike from './img/Nike.png';
import Timer from './img/Timer.png';
import github from './img/github.jpg';
import teap from './img/teap.png';
import numberG from './img/numberG.png';
import Booklist from './img/Booklist.png';
import backroads from './img/numberG.png';
import Calc from './img/Calc.png';
import nike2 from './img/nike2.png';
import tip from './img/tip.png';
import slider from './img/slider.png';
import SmoothNavbar from './img/SmoothNavbar.png';
import birds from './img/birds.png';
import { Link } from 'react-router-dom';




const Project = () => {
 return (
  <div>
   <div className="Project-css">
    <h1>More Projects </h1>
   </div>

    <div className="Project-css2">
        <p> Some of my lastest projects and ideas </p>
    </div>


   <div className="grid-container1">
        <article className="gallery-img-container1">
            <a href="https://kashy.netlify.app/">
            <img src={KashyT} alt="" className="gallery-img1" />
            </a>

            <a href="#" className="gallery-icon1">
            <i className="fa fa-search"></i>
            </a>

        </article>

        <br/>

        <article
            className="gallery-img-container1">
            <a href="https://loan1.netlify.app">
           <img src={Loan} alt="" className="gallery-img1" />
             </a>
            <a href="#"
                className="gallery-icon1">
                <i
                    className="fa fa-search"></i>
            </a>
        </article>

        <br/>


        <article className="gallery-img-container1">
            <a href="https://nike2.netlify.app">
            <img src={Nike} alt="" className="gallery-img1" />
            </a>
            <a href="#"
                className="gallery-icon1">
                <i
                    className="fa fa-search"></i>
            </a>
        </article>

        <br/>


        <article
            className="gallery-img-container1">
            <a href="https://timerrs.netlify.app/">
           <img src={Timer} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>

        <br/>

        <article
            className="gallery-img-container1">
            <a
                href="https://githubrc.netlify.app">
               <img src={github} alt="" className="gallery-img1" />
            </a>
            <a href="#"
                className="gallery-icon1">
                <i
                    className="fa fa-search"></i>
            </a>
        </article>

        <br/>

        <article className="gallery-img-container1">
            <a href="https://musing-bose-b2bd94.netlify.app/">
               <img src={teap} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>

        <br/>

          <article className="gallery-img-container1">
            <a href="https://sleepy-jackson-d37803.netlify.app/">
                 <img src={numberG} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>

        <br/>

         <article className="gallery-img-container1">
            <a href="https://vigorous-noyce-2fa27e.netlify.app/">
                 <img src={Booklist} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>

        <br/>

         <article className="gallery-img-container1">
            <a href="https://eloquent-wilson-04488d.netlify.app/">
                <img src={backroads} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>



    <br/>

     <article className="gallery-img-container1">
         <a href="https://suspicious-brattain-07dbcf.netlify.app/">
             <img src={Calc} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>

            <br/>

   </div>

         <div className="Project-css">
            <h1>Mini Projects </h1>
        </div>

        <div className="Project-css2">
        <p> Some projects and ideas that are not full in length and depth but still project </p>
    </div>


<div className="grid-container1">
    <article className="gallery-img-container1">
        <a
            href="https://affectionate-newton-6927a3.netlify.app/">
           <img src={nike2} alt="" className="gallery-img1" />
        </a>
        <a href="#"
            className="gallery-icon1">
            <i
                className="fa fa-search"></i>
        </a>
    </article>

        <br/>

        <article
            className="gallery-img-container1">
            <a
                href="https://wonderful-leavitt-9f6e5f.netlify.app/">
                 <img src={tip} alt="" className="gallery-img1" />
            </a>
            <a href="#"
                className="gallery-icon1">
                <i
                    className="fa fa-search"></i>
            </a>
        </article>

        <br/>

        <article
            className="gallery-img-container1">
            <a href="https://optimistic-lamport-285da2.netlify.app/">
                <img src={slider} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>

        <br/>

        <article
            className="gallery-img-container1">
            <a href="https://angry-goldberg-511dd9.netlify.app/">
                <img src={SmoothNavbar} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>

        <br/>
        <article
            className="gallery-img-container1">
            <a href="https://competent-aryabhata-f61b45.netlify.app/">
                <img src={birds} alt="" className="gallery-img1" />
            </a>
            <a href="#" className="gallery-icon1">
                <i className="fa fa-search"></i>
            </a>
        </article>

 </div>

      <Link to="/">
        <div className="heading">
        <a href="Projects.html" className="btn-2"> View More </a>
        </div>
      </Link>

</div>
 )
}

export default Project;
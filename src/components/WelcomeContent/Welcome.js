import React from "react";
import "./Welcome.css";
import primary from '../../images/primary.jpg';
import ssc from '../../images/ssc.png';
import lab from '../../images/lab.png';
import graduate from '../../images/graduate.png';
import SlideBoard from "./SlideBoard/SlideBoard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTrophy, faChalkboard, faUserEdit } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="bg-image">
            <div className="bg-image-text">
              <h5>Group Study in Library</h5>
              <p>
                Web have a big library , Students can be maked their Group
                study.
              </p>
            </div>
          </div>
          <p className="nav-newsText">
            Welcome to Education School and College
          </p>
            <div className="text-justify p-4 bg-white welcomeText">
              <p className="" >
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable. Lorem ipsum dolor sit amet, consectetur Adipisicing
                elit. Quibusdam eligendi expedita, provident cupiditate in
                excepturi. There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some form,
                by injected humour, or randomised words which don't look even
                slightly believable. Lorem ipsum dolor sit amet, consectetur
                Adipisicing elit. Quibusdam eligendi expedita, provident cupiditate
                in excepturi. which don't look even slightly believable. Lorem ipsum
                dolor sit amet, consectetur
              </p>
            </div>

            <div className="courses mb-3">
                <p className="nav-newsText">Popular Courses</p>

                <div className="row ">
                  <div className="col-md-4 course-card">
                    <img className="img-fluid  my-2" src={primary} alt=""/>
                    <h5>Primary Level Courses</h5>
                    <ul>
                      <li>Bangla Medium</li>
                      <li>English Medium</li>
                      <li>Technical</li>
                    </ul>
                    <button className="nav-newsText">Go Details</button>
                  </div>    

                  <div className="col-md-4 course-card">
                    <img className="img-fluid my-2" src={ssc} alt=""/>
                    <h5>Secondary Level Courses</h5>
                    <ul>
                      <li>Bangla Medium</li>
                      <li>English Medium</li>
                      <li>Technical</li>
                    </ul>
                    <button className="nav-newsText">Go Details</button>
                  </div>
                  
                  <div className="col-md-4 course-card">
                    <img className="img-fluid my-2" src={lab} alt=""/>
                    <h5>College Level Courses</h5>
                    <ul>
                      <li>Science</li>
                      <li>Business Studies</li>
                      <li>Humanities</li>
                    </ul>
                    <button className="nav-newsText">Go Details</button>
                  </div>
                </div>
            </div>


                <div className="best-blog bg-light">

                    <p className="nav-newsText">Why We Are The Best?</p>

                    <div className="row">
                      <div className="col-md-5 d-flex align-items-end">
                        <img className="img-fluid" src={graduate} alt="" />
                      </div>

                      <div className="col-md-3 best-card">

                        <FontAwesomeIcon className="icon fa-2x" icon={faBookOpen} />
                        <h4>Scholarship News</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, velit.</p>

                          <FontAwesomeIcon className="icon fa-2x" icon={faTrophy} />
                          <h4>Our Achievements</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, velit.</p>

                      </div>

                      <div className="col-md-3 best-card">

                        <FontAwesomeIcon className="icon fa-2x" icon={faChalkboard} />
                        <h4>Our notice Board</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, velit.</p>

                          <FontAwesomeIcon className="icon fa-2x" icon={faUserEdit} />
                          <h4>Admission Now</h4>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, velit.</p>
                      </div>

                    </div>
            
                </div>

        </div>


        <div className="col-md-4">
          <SlideBoard/>
        </div>

      </div>
    </section>
  );
};

export default Welcome;

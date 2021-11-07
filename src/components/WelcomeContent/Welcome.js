import React from "react";
import "./Welcome.css";
// import studyBg from '../../images/bg-1.png';

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
          <p className="p-4 bg-white" >
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

            <div className="courses">
                <p className="nav-newsText">Popular Courses</p>
            </div>


        </div>

      </div>
    </section>
  );
};

export default Welcome;

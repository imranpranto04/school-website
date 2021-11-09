import React from "react";
import card from "../../images/bg-card.png";
import "./Events.css";

const Events = () => {
  return (
    <section className="">
      <div>

        <div className="event-background container-fluid "></div>

        <div className="container">

          <div className="card">

            <div className="row">
              <div className="col-md-4">
                <div className="card-box">
                <img className="img-fluid" src={card} alt="" />
                <p>This is Title</p>
                <p>
                  This is Details of mentioned avobe title. This is Details of
                  mentioned avobe title.
                </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-box">
                  <img className="img-fluid" src={card} alt="" />
                  <p>This is Title</p>
                  <p>
                    This is Details of mentioned avobe title. This is Details of
                    mentioned avobe title.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-box">
                  <img className="img-fluid" src={card} alt="" />
                  <p>This is Title</p>
                  <p>
                    This is Details of mentioned avobe title. This is Details of
                    mentioned avobe title.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Events;

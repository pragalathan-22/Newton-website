import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6">
                <div className="testimonial">
                  <div className="testimonial-image">
                    <img src={d.img} alt={d.name} />
                  </div>
                  <div className="testimonial-content">
                    <p>{d.text}</p>
                    <div className="testimonial-meta">- {d.name}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading testimonials...</p>
          )}
        </div>
      </div>
    </div>
  );
};

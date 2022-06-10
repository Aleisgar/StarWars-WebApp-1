import React from "react";

export const DetailCharacter = () => {
  return (
    <>
      <div className="container">
        <div className="card mb-3" style={{ maxWidth: "540px;" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://elcomercio.pe/resizer/CCzKYeli5rmsCSECl_r9VfrE8s4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7IN5YML5RRFNBKOV2T3UVJ6VLI.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Características */}
    <div className="container">
    <hr style={{ color: "red", height: "2px" }} />
      <div className="d-flex justify-content-between">
        <span className="eyes text-danger fw-bold">Eyes color</span>
        <span className="name text-danger fw-bold">Name</span>
        <span className="genre text-danger fw-bold">Gender</span>
        <span className="height text-danger fw-bold">Height</span>
        <span className="birth text-danger fw-bold">Year of Birth</span>
      </div>
    </div>
 
    </>
  );
  }
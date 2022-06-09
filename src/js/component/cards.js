import React from "react";

export const Cards = () => {
  return (
    <>
    
        <div className="card me-3" style={{width: "18rem"}}>
          <img src="https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w" alt="placehold.it" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
            <a href="#" class="btn">
              Favoritos
            </a>
          </div>
        </div>
    
    </>
  );
};

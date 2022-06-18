import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const CardPlanet = ({planetName,population,terrain,id}) => {
  const {store,actions} = useContext(Context);

  return (
    <>
      <div className="card me-3 h-100" style={{ width: "18rem" }}>
        <img
          src="https://www.nosolobits.com/imagenes/guia/coruscant_1843754588.jpg"
          alt="planet"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{planetName}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Population: {population}</li>
            <li className="list-group-item">Terrain: {terrain}</li>
          </ul> </div>
          <div className="card-footer bg-white">
          <Link to={"detailPlanet/" + id}> 
          <span href="#" className="btn btn-outline-primary">
            Learn More
          </span></Link>
          <button type="button" onClick={()=>{actions.addFavorites(planetName)}}  className="btn btn-outline-warning float-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
              color="orange"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
       
        </div>
      </div>
    </>
  );
};

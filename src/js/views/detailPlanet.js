import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailPlanet = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={store.planet_images[theid]}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h4 className="card-title">{store.planet[theid]?.name}</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Características */}
      <div className="container">
        <div className="table-responsive">
          <table className="table text-warning text-center border-bottom-0">
            <thead>
              <tr>
                <th scope="col text-warning">Name</th>
                <th scope="col text-warning">Population</th>
                <th scope="col text-warning">Diameter</th>
                <th scope="col text-warning">Climate</th>
                <th scope="col text-warning">Terrain</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="text-warning">{store.planet[theid]?.name}</td>
                <td className="text-warning">
                  {store.planet[theid]?.population}
                </td>
                <td className="text-warning">{store.planet[theid]?.diameter}</td>
                <td className="text-warning">{store.planet[theid]?.climate}</td>
                <td className="text-warning">{store.planet[theid]?.terrain}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

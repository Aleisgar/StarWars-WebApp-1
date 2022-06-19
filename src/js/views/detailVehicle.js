import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailVehicle = () => {
  const { store, actions } = useContext(Context);

  const { theid } = useParams(); //extrae el valor theid, que es el nombre de la ruta que se le ha dado en el layout
  //console.log(theid);
  const shipData =store.starship
 console.log(shipData);
  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={store.ship_images[theid]}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h4 className="card-title">{shipData[theid]?.name}</h4>
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
                <th scope="col text-warning">Model</th>
                <th scope="col text-warning">Length</th>
                <th scope="col text-warning">Manufacturer</th>
                <th scope="col text-warning">Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="text-warning">{shipData[theid]?.name}</td>
                <td className="text-warning">{shipData[theid]?.model}</td>
                <td className="text-warning">{shipData[theid]?.length}</td>
                <td className="text-warning">{shipData[theid]?.manufacturer}</td>
                <td className="text-warning">{shipData[theid]?.cargo_capacity}</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

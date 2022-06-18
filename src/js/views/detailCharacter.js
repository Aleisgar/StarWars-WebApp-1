import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailCharacter = () => {
  const { store, actions } = useContext(Context);

  const { theid } = useParams(); //extrae el valor theid, que es el nombre de la ruta que se le ha dado en el layout
  console.log(theid);
  const characterData = store.character;
  //console.log(characterData[theid]); //asignale ese valor que hay en la ruta para y así accederá solo a la info de el personaje que está en esa posición

  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://elcomercio.pe/resizer/CCzKYeli5rmsCSECl_r9VfrE8s4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7IN5YML5RRFNBKOV2T3UVJ6VLI.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h4 className="card-title">{characterData[theid]?.name}</h4>
                <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Características */}
      <div className="container">
        <div className="table-responsive">
        <table className="table text-danger text-center border-bottom-0">
          <thead>
            <tr>
              <th scope="col text-danger">Name</th>
              <th scope="col text-danger">Gender</th>
              <th scope="col text-danger">Eye Color</th>
              <th scope="col text-danger">Hair Color</th>
              <th scope="col text-danger">Year of Birth</th>
            </tr>
          </thead>
          <tbody>
          <tr className="text-center">
            <td className="text-danger">{characterData[theid]?.name}</td>
            <td className="text-danger">{characterData[theid]?.gender}</td>
            <td className="text-danger">{characterData[theid]?.eye_color}</td>
            <td className="text-danger">{characterData[theid]?.hair_color}</td>
            <td className="text-danger">{characterData[theid]?.birth_year}</td>
          </tr>
          </tbody>
           </table>
        </div>
      </div>
     
    </>
  );
};

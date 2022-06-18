import React, { useContext } from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/CardCharacter.jsx";
import { CardPlanet } from "../component/CardPlanet.jsx";
import {CardVehicle} from "../component/CardVehicle.jsx"
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const people = store.character;
  const starship= store.starship;
  const planet =store.planet;

  return (

    <div className="container">
      {/* Menú scroll */}
      <div id="list-example" className="list-group">
        <a
          className="list-group-item list-group-item-action border-0 text-danger fs-3"
          href="#characters"
        >
          Characters
        </a>
        <a
          className="list-group-item list-group-item-action border-0 text-danger fs-3"
          href="#planets"
        >
          Planets
        </a>
        <a
          className="list-group-item list-group-item-action border-0 text-danger fs-3"
          href="#vehicles"
        >
          Vehicles
        </a>
      </div>

      {/*Cards characters */}
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        <h4 className="my-3" id="characters">
          Characters
        </h4>
        <div className="d-flex overflow-auto">
            {people.map((item,index) => (<div className="col" key={index}>
              <CardCharacter id={index} name={item.name} eye={item.eye_color} gender={item.gender} hair = {item.hair_color} /></div>
            ))} 
         </div>
          
        {/* Cards planetas */}
        <div
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-offset="0"
          className="scrollspy-example"
          tabIndex="0"
        >
          <h4 className="my-3" id="planets">
            Planets
          </h4>
          <div className="d-flex overflow-auto">
          {planet.map((item,index) => (<div className="col" key={index}>
              <CardPlanet id={index} planetName={item.name} population={item.population} terrain={item.terrain} /></div>
            ))} 
          </div>

           </div>
           {/* Cards vehiculos */}
        <div
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-offset="0"
          className="scrollspy-example"
          tabIndex="0"
        >
          <h4 className="my-3" id="planets">
            Vehicles
          </h4>
          <div className="d-flex overflow-auto">
          {starship.map((item,index) => (<div className="col" key={index}>
              <CardVehicle  id={index} starshipName={item.name} model={item.model} length={item.length} /></div>
            ))} 
          </div>
       </div>
      </div>
    </div>
  );
};

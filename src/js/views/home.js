import React, { useContext } from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/CardCharacter.jsx";
import { CardPlanet } from "../component/CardPlanet.jsx";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
 // console.log(store.character);
  const people = store.character;
  
  //console.log(store.planet);
  const planet =store.planet;
  return (
    <div className="container">
      {/* Menú scroll */}
      <div id="list-example" className="list-group">
        <p
          className="list-group-item list-group-item-action border-0 text-danger fs-3"
          href="#characters"
        >
          Characters
        </p>
        <p
          className="list-group-item list-group-item-action border-0 text-danger fs-3"
          href="#planets"
        >
          Planets
        </p>
        <p
          className="list-group-item list-group-item-action border-0 text-danger fs-3"
          href="#vehicles"
        >
          Vehicles
        </p>
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
            {people.map((item,index) => (<div className="col"key={item.uid}>
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
          {planet.map((item) => (<div className="col"key={item.uid}>
              <CardPlanet  planetName={item.name}/></div>
            ))} 
          </div>
          <h4 id="vehicles">Vehicles</h4>
          <Cards />
        </div>
      </div>
    </div>
  );
};

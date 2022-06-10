import React from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/CardCharacter.jsx";
import { CardPlanet } from "../component/CardPlanet.jsx";
import { Cards } from "../component/cards";

export const Home = () => {
  return (
    <div className="container">

      {/* Menú scroll */}

      <div id="list-example" class="list-group">
        <a
          class="list-group-item list-group-item-action border-0 text-danger fs-3"
          href="#characters"
        >
          Characters
        </a>
        <a
          class="list-group-item list-group-item-action border-0 text-danger fs-3"
          href="#planets"
        >
          Planets
        </a>
        <a
          class="list-group-item list-group-item-action border-0 text-danger fs-3"
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
        class="scrollspy-example"
        tabindex="0"
      >
        <h4 className="my-3" id="characters">
          Characters
        </h4>
        <div className="d-flex overflow-auto">
          <div className="col">
            <CardCharacter />
          </div>
          <div className="col">
            <CardCharacter/>
          </div>
          <div className="col">
            <CardCharacter />
          </div>
          <div className="col">
            <CardCharacter />
          </div>
          <div className="col">
            <CardCharacter />
          </div>
          <div className="col">
            <CardCharacter />
          </div>
          <div className="col">
            <CardCharacter />
          </div>
        </div>

        {/* Cards planetas */}

      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <h4 className="my-3" id="planets">
          Planets
        </h4>
        <div className="d-flex overflow-auto">
          <div className="col">
            <CardPlanet/>
          </div>
          <div className="col">
            <CardPlanet/>
          </div>
          <div className="col">
            <CardPlanet />
          </div>
          <div className="col">
            <CardPlanet />
          </div>
          <div className="col">
            <CardPlanet />
          </div>
          <div className="col">
            <CardPlanet />
          </div>
          <div className="col">
            <CardPlanet />
          </div>
        </div>
        <h4 id="vehicles">Vehicles</h4>
        <Cards />
      </div>
    </div>
    </div>

  );
};

import React from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";


export const Home = () => {
    return (
		 <div className="container">
         <div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action border-0 text-danger fs-3" href="#characters">Characters</a>
  <a class="list-group-item list-group-item-action border-0 text-danger fs-3" href="#planets">Planets</a>
  <a class="list-group-item list-group-item-action border-0 text-danger fs-3" href="#vehicles">Vehicles</a>
 
</div>
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 className="" id="characters">Characters</h4>
  <div className="caca d-flex overflow-auto">
 <div className="col"><Cards/></div> 
 <div className="col"><Cards/></div> 
 <div className="col"><Cards/></div> 
 <div className="col"><Cards/></div> 
 <div className="col"><Cards/></div> 
 <div className="col"><Cards/></div> 
 <div className="col"><Cards/></div> 
</div>
  <h4 id="planets">Planets</h4>
  <Cards/>
  <h4 id="vehicles">Vehicles</h4>
  <Cards/>
</div>

</div>
)};
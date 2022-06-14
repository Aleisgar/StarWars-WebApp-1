import React, {useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const {store,actions} = useContext(Context);

  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3">
        <div className="container">
          <Link to="/">
            <img
              src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
              alt="logo Star Wars"
              width="70"
              height="44"
            />
          </Link>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos <span className="badge badge-light">{store.favorites.length}</span>
            </button>
            
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             {store.favorites.length > 0 ? store.favorites.map((item,index)=><li key={index} className="dropdown-item">
              {item}<button
							className="btn-trash border border-1 float-end"
							onClick={() => {actions.deleteFavorites(item)
              }}>
							<i className="fas fa-trash-alt"></i>
						</button>
              </li>): <li className="dropdown-item text-center fst-italic">
              (empty)</li>} 
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};



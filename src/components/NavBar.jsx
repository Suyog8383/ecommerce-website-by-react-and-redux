import React from "react";
import { Link } from "react-router-dom";
import WishList from "./WishList";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ justifyContent: "space-around" }}
      >
        <a
          className="navbar-brand"
          style={{
            color: "blue",
          }}
          href="#"
        >
          Suyog Mall
        </a>

        <div style={{ display: "flex", gap: "15px" }}>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <Link to="cart">Cart</Link>
          </button>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <Link to="WishList">Wishlist</Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

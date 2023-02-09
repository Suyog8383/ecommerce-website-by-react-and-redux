import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddCart } from "../reducer/cartSlice";
import { clearCart, clearItem } from "../reducer/cartSlice copy";

import "./cartStyle.css";
function WishList() {
  const { cartProducts2 } = useSelector((state) => state.products2);

  const dispatch = useDispatch();
  const handleOnclick = (item) => {
    dispatch(AddCart(item));
  };
  return (
    <div>
      <section className="h-100 gradient-custom">
        <button type="button" class="btn btn-dark">
          <Link to="/">Back</Link>
        </button>
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div
                  className="card-header py-3"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5 className="mb-0">Cart Item:={cartProducts2.length}</h5>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Wish List
                  </button>
                </div>
                {cartProducts2.length > 0 ? (
                  <>
                    {cartProducts2.map((item, index) => {
                      return (
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                              <div
                                className="bg-image hover-overlay hover-zoom ripple rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  className="w-100"
                                  alt="Blue Jeans Jacket"
                                />
                                <a href="#!">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(251, 251, 251, 0.2)",
                                    }}
                                  ></div>
                                </a>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                              <p>Color: blue</p>
                              <p>Size: M</p>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm me-1 mb-2"
                                data-mdb-toggle="tooltip"
                                title="Remove item"
                                onClick={() => dispatch(clearItem(item))}
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                              <button
                                className="btn"
                                onClick={() => handleOnclick(item)}
                              >
                                Add To Cart
                              </button>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                              <div
                                className="d-flex mb-4"
                                style={{
                                  maxWidth: "300px",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <span>Quantity:= {item.quantity}</span>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>Price:= {item.price}</strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <h1>Wish List is empty...</h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WishList;

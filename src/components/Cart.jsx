import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  clearItem,
  decrement,
  getCartTotalandQuantity,
  increment,
} from "../reducer/cartSlice";

import "./cartStyle.css";
function Cart() {
  const { cartProducts, cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getCartTotalandQuantity());
  }, [cartProducts]);

  const dispatch = useDispatch();
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
                  <h5 className="mb-0">Cart Item:={cartProducts.length}</h5>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </button>
                </div>
                {cartProducts.length > 0 ? (
                  <>
                    {cartProducts.map((item, index) => {
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
                                type="button"
                                className="btn btn-danger btn-sm mb-2"
                                data-mdb-toggle="tooltip"
                                title="Move to the wish list"
                              >
                                <i className="fas fa-heart"></i>
                              </button>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn btn-primary px-3 me-2"
                                  onClick={() => dispatch(decrement(item))}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                  className="btn btn-primary px-3 ms-2"
                                  onClick={() => dispatch(increment(item))}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>{item.price}</strong>
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
                    <h1>Cart is empty...</h1>
                  </>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{cartTotalAmount}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${cartTotalAmount}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;

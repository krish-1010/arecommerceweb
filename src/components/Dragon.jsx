import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import  dragon  from "./dragon.jpg";
import Skeleton from "react-loading-skeleton";

const Dragon = () => {
  const { id } = useParams();
  //const [product, setProduct] = useState([]);
   const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const product = {
    "id":100,
    "title":"Dragon",
    "price":509.00,
    "description":"This beautiful sculpture of a ferrocious dragon is a go to for choosing a good sculpture to design your interior and decorate your room.",
    "category":"Sculpture",
    "image":dragon,
    "rating":{"rate":5.0,"count":20}
  };

 
  return (
     <div className="container py-5">
        <div className="row py-4">
          <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating: {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">₹ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => {
              addProduct(product);
            }}
          >
            Add to cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to cart
          </NavLink>
        </div>
        </div>
      </div>
  )
}

export default Dragon
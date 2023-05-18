import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import  chair  from "./chair.png";
import Skeleton from "react-loading-skeleton";

const Chair = () => {
  const { id } = useParams();
  //const [product, setProduct] = useState([]);
   const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const product = {
    "id":900,
    "title":"Chair",
    "price":9000,
    "description":"A single seater chair made of a wood like material on the outside called vibranium, made from the most skillful manufactures around the world.",
    "category":"Furniture",
    "image":chair,
    "rating":{"rate":4.9,"count":900}
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

export default Chair
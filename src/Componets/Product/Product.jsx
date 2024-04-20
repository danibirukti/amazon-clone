import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from "./Product.module.css";
import Loader from "../Loader/Loader"

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Initially set to true

    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products/")
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false); // Set loading to false after data is fetched
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false); // Set loading to false in case of error
        });
    }, []);

    return (
      <>
         {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard renderAdd={true}
                product={singleProduct}
                key={singleProduct.id}
                // renderAdd={true}
              />
            );
          })}
          </section>
        )}
      </>
  );
}; 
        
export default Product;

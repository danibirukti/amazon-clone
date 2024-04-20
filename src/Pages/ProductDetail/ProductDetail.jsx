import React, { useEffect, useState } from "react";
import LayOut from '../../Componets/LayOut/LayOut'
import classes from './ProductDetail.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from "../../Componets/Product/ProductCard";
import Loader from "../../Componets/Loader/Loader";


function ProductDetail() {
  const { productId } = useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [product, setproduct] = useState({});
  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false);
      });
  }, [])

  return (
    <LayOut>
      
      
      {isLoading ? (<Loader />) : (<ProductCard 
      product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
      />)}
    </LayOut>
  )
}

export default ProductDetail;
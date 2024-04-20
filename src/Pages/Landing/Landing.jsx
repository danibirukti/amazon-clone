import React from 'react'
import LayOut from '../../Componets/LayOut/LayOut'
import Carousel from '../../Componets/Carousel/CarouseEffectl'
import Category from '../../Componets/Category/Category'
import Product from '../../Componets/Product/Product'

function Landing() {
  return (
    <>
    < LayOut>
        <Carousel/>
        <Category/>
        <Product/>
    </ LayOut>
    </>
  )
}

export default Landing
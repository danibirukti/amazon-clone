import React from "react";
import {Carousel} from "react-responsive-carousel";
// import classes from "./CarouselEffect.module.css";
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";



// import { Carousel } from "react-responsive-carousel";

function CarouselEffect() {
	return (
		<div>
			<Carousel
				autoPlay={true}
				infiniteloop={true}
				showIndicators={false}
				showThumbs={false}
			>
				{img.map((imageItemLink) => {
					return <img key={imageItemLink} src={imageItemLink} />;
				})}
			</Carousel>
			{/* <div className={classes.hero_image}></div> */}
		</div>
	);
}

export default CarouselEffect;
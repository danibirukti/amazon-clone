import { CategoryInfos } from "./categoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

import React from 'react'

function Category() {
  return (
    <section className={classes.category__container}>
			{CategoryInfos.map((info) => (
				<CategoryCard data={info} key={info.imgLink} />
			))}
		</section>
  )
}

export default Category
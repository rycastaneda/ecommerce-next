import React, { FunctionComponent } from 'react';

import { Category } from "./type";
import CategoryCard from './CategoryCard';

const CategoryCards: FunctionComponent<{ categories: Category[] }> = ({ categories }) => {
  const categoryList = categories.map((cat, i) => {
    let className = 'row-span-2'
    switch(i) {
      case 0: 
        className = 'row-span-4'; break;
      case 1:
        className = 'col-span-2 row-span-2'; break;
    }

    return (<CategoryCard classNameExt={className} key={i} {...cat} />)
  })
  return (
    <div className={`grid grid-rows-4 grid-flow-col gap-4 h-154`}>
      {categoryList}
    </div>
  );
}

export default CategoryCards;
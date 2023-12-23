import React, { FunctionComponent } from 'react';

import { Category } from "./type";
import CategoryCard from './CategoryCard';

const CategoryCards: FunctionComponent<{ categories: Category[] }> = ({ categories }) => {
  const categoryList = categories.map((cat, i) => {
    let className = 'lg:row-span-2'
    switch(i) {
      case 0: 
        className = 'lg:row-span-4'; break;
      case 1:
        className = 'lg:col-span-2 lg:row-span-2'; break;
    }

    return (<CategoryCard classNameExt={className} key={i} {...cat} />)
  })
  return (
    <div className={`lg:grid lg:grid-rows-4 lg:grid-flow-col gap-4 lg:h-154 space-y-4 lg:space-y-0 text-center lg:text-left`}>
      {categoryList}
    </div>
  );
}

export default CategoryCards;
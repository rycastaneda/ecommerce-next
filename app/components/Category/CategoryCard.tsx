import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Category } from './type';

interface CategoryCardProps extends Category {
  classNameExt: string
}

const CategoryCard: FunctionComponent<CategoryCardProps> = ({ itemCount, name, link, background, classNameExt}) => {
  return (
    <div className={`bg-cover font-bold bg-center p-4 ${classNameExt}`} style={{backgroundImage: `url(${background})`}}>
      <span className="text-secondary">{itemCount} Items</span>
      <h1 className="lg:text-3xl text-lg lg:my-4">{name}</h1>
      <Link href={`/${link}`}>Read More</Link>
    </div>
  );
}

export default CategoryCard;
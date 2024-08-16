import React from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ProductCard = ({ product }) => {
  const { title, image, description, price, rating, brandName } =
    product;
  return (
    <div className="card bg-base-100 w-auto shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex  gap-10">
          <h2 className="card-title ">{title}</h2>
          <p className="text-center my-auto right-0">${price}</p>
        </div>
        <p>{description}</p>
        <p>
        <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      readOnly
    />
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

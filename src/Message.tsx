import React from 'react';

const Message: React.FC = () => {
  return <h1>Hello World.</h1>;
};

type ProductListingProps = {
  name: string;
  images: string[];
  description?: string;
};

export const ProductListing: React.FC<ProductListingProps> = ({ name, images, description }) => {
  return (
    <div className="product-listing">
      <h2>{name}</h2>
      {images && images[0] && <img src={images[0]} alt={name} />}
      <p>{description}</p>
    </div>
  );
};

export default Message;
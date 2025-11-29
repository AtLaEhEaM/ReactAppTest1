import React from 'react';
import ProductCard from './ProductCard.tsx';
import type { Product } from '../types.ts';

const Featured: React.FC<{ items: Product[] }> = ({ items }) => {
  return (
    <section id="featured" className="featured-section container">
      <h2 className="section-heading">Featured</h2>
      <div className="featured-grid">
        {items.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default Featured;

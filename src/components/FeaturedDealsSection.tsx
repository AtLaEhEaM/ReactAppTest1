import React from 'react';
import type { Product } from '../types.ts';
import ProductCard from './ProductCard.tsx';

const FeaturedDealsSection: React.FC<{ items: Product[] }> = ({ items }) => {
  // Prefer chocolate + birthday as the two main featured items for symmetry.
  const chocolate = items.find((p) => /chocolate/i.test(p.title));
  const birthday = items.find((p) => /birthday/i.test(p.title) || /birthday cakes?/i.test(p.title));

  let mainFeatured: Product[] = [];
  if (chocolate && birthday) mainFeatured = [chocolate, birthday];
  else mainFeatured = items.slice(0, Math.min(2, items.length));

  const rest = items.filter((p) => !mainFeatured.includes(p));

  return (
    <section id="featured-deals" className="featured-deals-section container">
      <h2 className="section-heading">Featured</h2>

      {mainFeatured.length > 0 && (
        <div className="featured-main">
          {mainFeatured.map((p) => (
            <ProductCard key={p.id} product={p} showCalories={false} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="featured-deals-inner">
          <div className="right-split">
            <div className="featured-grid">
              {rest.map((p) => (
                <ProductCard key={p.id} product={p} showCalories={false} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedDealsSection;

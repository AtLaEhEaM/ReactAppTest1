import React from 'react';
import type { Product } from '../types.ts';

type Props = { product: Product; showCalories?: boolean };

const ProductCard: React.FC<Props> = ({ product, showCalories = true }) => {
  return (
    <article className="product-card" role="article" aria-label={product.title}>
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        {product.deal ? <div className="deal-badge">{product.deal}</div> : null}
        <p className="product-desc">{product.description}</p>
        <div className="product-meta">
          <strong>${product.price.toFixed(2)}</strong>
          {showCalories && typeof product.calories === 'number' ? (
            <span className="calories"> · {product.calories} kcal</span>
          ) : null}
        </div>
        {product.ingredients && product.ingredients.length > 0 && (
          <details>
            <summary>Ingredients</summary>
            <ul>
              {product.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </article>
  );
};

export default ProductCard;

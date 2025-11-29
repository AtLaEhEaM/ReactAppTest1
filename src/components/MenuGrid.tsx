import React from 'react';
import ProductCard from './ProductCard.tsx';
import type { Product } from '../types.ts';

const MenuGrid: React.FC<{ items: Product[]; query?: string; onQueryChange?: (v: string) => void }> = ({ items, query = '', onQueryChange }) => {
  return (
    <section id="menu" className="menu-section container">
      <h2 className="section-heading">Menu</h2>

      {onQueryChange && (
        <div className="menu-search">
          <label className="search-input">
            <span className="icon">🔍</span>
            <input aria-label="Search menu" placeholder="Search breads, cakes, pastries..." value={query} onChange={(e) => onQueryChange(e.target.value)} />
          </label>
        </div>
      )}

      <div className="menu-grid">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} showCalories={true} />
        ))}
      </div>
    </section>
  );
};

export default MenuGrid;

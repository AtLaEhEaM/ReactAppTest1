import React, { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard.tsx';
import createProduct from '../utils/createProduct.ts';
import DealsSection from '../components/DealsSection.tsx';

const products = [
  createProduct({
    id: 1,
    title: 'Classic Sourdough',
    description: 'Tangy crust, open crumb — baked daily.',
    price: 6.5,
    image: '/bread.jpg',
    ingredients: ['Flour', 'Water', 'Salt', 'Starter'],
  }),
  createProduct({
    id: 2,
    title: 'Chocolate Cake',
    description: 'Moist chocolate layer cake with ganache.',
    price: 24.0,
    image: '/cake.jpg',
    ingredients: ['Cocoa', 'Flour', 'Sugar', 'Eggs'],
    steps: ['Preheat oven', 'Mix', 'Bake', 'Cool', 'Assemble'],
  }),
  createProduct({
    id: 3,
    title: 'Berry Tart',
    description: 'Buttery tart shell filled with custard and fresh berries.',
    price: 18.0,
    image: '/placeholder.jpg',
  }),
  createProduct({
    id: 4,
    title: 'Butter Croissant',
    description: 'Flaky, buttery, perfect for morning coffee.',
    price: 3.25,
    image: '/croissant.jpg',
  }),
];

const ProductsPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => (p.title + ' ' + p.description).toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="menu-page">
      <div className="menu-inner">
        <div className="deals-half">
          <DealsSection />
        </div>

        <div className="menu-half">
          <div className="container">
            <h2 className="section-heading animate-heading">Our Menu</h2>
            <div className="search-row">
              <label className="search">
                <span className="search-icon">🔍</span>
                <input
                  placeholder="Search breads, cakes, pastries..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
            </div>

            <div className="grid animate-items">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;

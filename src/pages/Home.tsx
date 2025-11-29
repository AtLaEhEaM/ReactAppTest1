import React from 'react';
import ProductCard from '../components/ProductCard.tsx';
import createProduct from '../utils/createProduct.ts';

const featured = [
  createProduct({
    id: 1,
    title: 'Classic Sourdough',
    description: 'Tangy crust, open crumb — baked daily.',
    price: 6.5,
    image: '/bread.jpg',
  }),
  createProduct({
    id: 2,
    title: 'Chocolate Cake',
    description: 'Moist chocolate layer cake with ganache.',
    price: 24.0,
    image: '/cake.jpg',
  }),
  createProduct({
    id: 3,
    title: 'Butter Croissant',
    description: 'Flaky, buttery, perfect for morning coffee.',
    price: 3.25,
    image: '/croissant.jpg',
  }),
];

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="hero">
        <img src="/hero.jpg" alt="Bakery hero" />
        <div className="hero-text">
          <h1>Sunny Side Bakery</h1>
          <p>Freshly baked every morning. Artisanal breads and sweet treats.</p>
        </div>
      </div>

      <div className="container intro">
        <h2>Welcome</h2>
        <p>
          At Sunny Side Bakery we craft small-batch breads, pastries, and cakes with
          care and seasonal ingredients. Stop by for a croissant and coffee.
        </p>
      </div>

      <div className="container featured">
        <h1><center>Featured Items</center></h1>
        <div className="grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

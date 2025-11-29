import React, { useMemo, useState } from 'react';
import './styles.css';
import NavBar from './components/NavBar.tsx';
import Hero from './components/Hero.tsx';
import FeaturedDealsSection from './components/FeaturedDealsSection';
import MenuGrid from './components/MenuGrid.tsx';
import AboutBlock from './components/AboutBlock.tsx';
import ContactFooter from './components/ContactFooter.tsx';
import { products as allProducts } from './data/products.ts';

const App: React.FC = () => {
  const [query, setQuery] = useState('');

  // menuItems excludes featured items so featured products aren't duplicated in the menu
  const menuItems = useMemo(() => {
    const base = allProducts.filter((p) => !p.featured);
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((p) => (p.title + ' ' + p.description).toLowerCase().includes(q));
  }, [query]);

  const featured = allProducts.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="site-root">
      <NavBar />
      <main>
        <Hero />
        <FeaturedDealsSection items={featured} />
        <MenuGrid items={menuItems} query={query} onQueryChange={setQuery} />
        <AboutBlock />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
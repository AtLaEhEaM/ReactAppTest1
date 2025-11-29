import React from 'react';

type Props = { value: string; onChange: (v: string) => void };

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <section id="search" className="search-section container">
      <label className="search-input">
        <span className="icon">🔍</span>
        <input
          aria-label="Search menu"
          placeholder="Search breads, cakes, pastries..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </section>
  );
};

export default SearchBar;

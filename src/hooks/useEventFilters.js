import { useState } from 'react';

export default function useEventFilters() {
  const [activeFilters, setActiveFilters] = useState({
    location: null,
    date: null,
    price: null,
    category: null
  });

  const handleFilterSelect = (filterType) => (selectedOption) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: selectedOption
    }));
    // Aqui você pode adicionar lógica adicional como logging ou analytics
    console.log(`${filterType} selected:`, selectedOption);
  };

  const clearFilters = () => {
    setActiveFilters({
      location: null,
      date: null,
      price: null,
      category: null
    });
  };

  return { activeFilters, handleFilterSelect, clearFilters };
}
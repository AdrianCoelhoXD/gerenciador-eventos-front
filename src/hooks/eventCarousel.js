import { useState } from 'react';

export const useCarousel = (items, itemsPerPage = 3) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? items.length - itemsPerPage : prevIndex - 1
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return { visibleItems, next, prev };
};

export default useCarousel;
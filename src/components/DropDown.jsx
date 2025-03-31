import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ 
  label, 
  options = [], 
  onSelect, 
  className = '',
  type = 'default' // Adicionamos um tipo para diferentes estilos de dropdown
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Opções padrão baseadas no tipo
  const defaultOptions = {
    location: [
      { value: 'all', label: 'Todos os locais' },
      { value: 'sp', label: 'São Paulo, SP' },
      { value: 'rj', label: 'Rio de Janeiro, RJ' },
      { value: 'online', label: 'Evento Online' }
    ],
    date: [
      { value: 'all', label: 'Todas as datas' },
      { value: 'today', label: 'Hoje' },
      { value: 'week', label: 'Esta semana' },
      { value: 'month', label: 'Este mês' }
    ],
    price: [
      { value: 'all', label: 'Qualquer preço' },
      { value: 'free', label: 'Gratuito' },
      { value: 'paid', label: 'Pago' }
    ],
    category: [
      { value: 'all', label: 'Todas categorias' },
      { value: 'music', label: 'Música' },
      { value: 'business', label: 'Negócios' },
      { value: 'education', label: 'Educação' }
    ]
  };

  // Usa as opções personalizadas ou as padrão baseadas no tipo
  const dropdownOptions = options.length > 0 ? options : defaultOptions[type] || [];

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect && onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-purple-400 hover:bg-purple-50 transition-colors ${
          isOpen ? 'border-purple-400 bg-purple-50' : ''
        } ${
          selectedOption ? 'text-purple-700' : ''
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedOption ? selectedOption.label : label}
        <svg 
          className={`w-4 h-4 ml-2 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg py-1 border border-gray-200 max-h-60 overflow-y-auto">
          {dropdownOptions.map((option) => (
            <button
              key={option.value}
              className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 ${
                selectedOption?.value === option.value ? 'bg-purple-50 text-purple-600' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onSelect: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['location', 'date', 'price', 'category', 'default']),
};

Dropdown.defaultProps = {
  options: [],
  onSelect: () => {},
  className: '',
  type: 'default'
};

export default Dropdown;
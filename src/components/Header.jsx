import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ user }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-purple-600">Eventopia</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/about" className="text-gray-700 hover:text-purple-600">Sobre Nós</Link>
            <Link to="/organize-event" className="text-gray-700 hover:text-purple-600">Organizar Eventos</Link>
            <Link to="/organizer" className="text-gray-700 hover:text-purple-600">Seus eventos</Link>

          </nav>
        </div>
        {user && (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  })
};

export default Header;
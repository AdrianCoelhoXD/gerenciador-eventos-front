import { createContext, useState, useContext } from 'react';
import { jwtDecode } from 'jwt-decode'; 

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwtDecode(token) : null;
  });

  const login = (token) => {
    const decodedUser = jwtDecode(token);
    setUser(decodedUser);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
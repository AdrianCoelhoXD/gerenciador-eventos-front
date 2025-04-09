import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Login from './pages/auth/Login';
import Welcome from './pages/Welcome';
import OrganizeEvent from './pages/OrganizeEvents';
import OrganizerPage from './pages/OrganizerPage';

import { AuthProvider } from './utils/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AboutUs from './About';

function App() {

  return (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/organize-event" element={<OrganizeEvent />} />
        <Route path="/organizer" element={<PrivateRoute element={<OrganizerPage />} />} />     
        <Route path="/about" element={<AboutUs/>} />
 
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App

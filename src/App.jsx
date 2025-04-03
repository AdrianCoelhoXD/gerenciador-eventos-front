import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/Register'
import Home from './pages/home'
import Login from './pages/auth/Login';
import Welcome from './pages/Welcome';
import OrganizeEvent from './pages/OrganizeEvents';
import OrganizerPage from './pages/OrganizerPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/organize-event" element={<OrganizeEvent />} />
        <Route path="/organizer" element={<OrganizerPage />} />
      </Routes>
    </Router>
  )
}

export default App

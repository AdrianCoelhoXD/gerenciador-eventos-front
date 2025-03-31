import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/register'
import Home from './pages/home'
import Login from './pages/auth/Login';
import Welcome from './pages/Welcome';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />

      </Routes>
    </Router>
  )
}

export default App

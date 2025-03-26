import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/register'
import Home from './pages/home'
import Login from './pages/auth/Login';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  )
}

export default App

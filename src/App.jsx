import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

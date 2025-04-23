import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Attendance from './pages/Attendance';
import Material from './pages/Material';
import Outcomes from './pages/Outcomes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/material" element={<Material />} />
        <Route path="/outcomes" element={<Outcomes />} />
      </Routes>
    </BrowserRouter>
  );
}
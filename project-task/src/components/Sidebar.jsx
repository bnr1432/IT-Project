import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/home">Dashboard</Link>
      <Link to="/attendance">Attendance</Link>
      <Link to="/material">Materials</Link>
      <Link to="/outcomes">Outcomes</Link>
    </div>
  );
}
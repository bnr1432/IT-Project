import Sidebar from '../components/Sidebar';

export default function Material() {
  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <h2>Material Page</h2>
        <ul>
          <li>HTML Material.pdf</li>
          <li>CSS File.pdf</li>
          <li>Java Script.pdf</li>
          <li>Node JS.pdf</li>
          <li>React JS.pdf</li>
        </ul>
      </div>
    </div>
  );
}

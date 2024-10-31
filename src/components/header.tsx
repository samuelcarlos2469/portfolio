import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Meu Portfólio</h1>
    <nav className="flex items-center">
      <a
        href="https://github.com/samuelcarlos2469"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4"
      >
        GitHub
      </a>
      <Link to="/">Home</Link>
    </nav>
  </header>
);

export default Header;

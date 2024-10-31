import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Meu Portfólio</h1>
    <nav>
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/about">Sobre</Link>
    </nav>
  </header>
);

export default Header;

const Footer = () => (
  <footer className="bg-gray-800 text-white text-base p-4 flex justify-center">
    <p className="text-base">
      &copy; {new Date().getFullYear()} Samuel Carlos.
    </p>
    <a
      href="https://github.com/samuelcarlos2469"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-4 text-base"
    >
      GitHub
    </a>
  </footer>
);

export default Footer;

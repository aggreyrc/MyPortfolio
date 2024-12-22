const Header = () => {
    return (
      <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">ProjectPortfolio</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  
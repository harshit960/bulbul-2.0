const Header = () => {
  return (
    <header className="flex justify-between p-5 absolute w-full">
      <div className="text-2xl font-bold">SPACE</div>
      <nav className="nav">
        <a href="#home" className="m-0 mx-10">Home</a>
        <a href="#discovery" className="m-0 mx-10">Discovery</a>
        <a href="#about" className="m-0 mx-10">About</a>
        <a href="#menu" className="m-0 mx-10">Menu</a>
      </nav>
    </header>
  );
};

export default Header;

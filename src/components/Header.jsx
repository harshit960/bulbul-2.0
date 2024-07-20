const Header = () => {
  return (
    <header className="flex justify-between p-5 w-full exo-2">
      <img src="logo.png" alt="" srcset="" className="w-32 mx-10" />
      <nav className="nav flex gap-12 mr-12 mt-4">
        {["Home", "Discovery", "About", "Menu"].map((item, id) => (
          <a
            href="#home"
            className={`text-${item === "Home" ? "black" : "white"} bg-${
              item === "Home" ? "white" : "transparent"
            } text-sm h-fit px-[12px] py-[2px] rounded-md`}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;

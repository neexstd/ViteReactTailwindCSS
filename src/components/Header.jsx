import logo from "../logo.png";

function Header() {
  return (
    <div>
      <nav className="bg-gray-900 p-10 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center gap-4 text-2xl font-bold">
          <img src={logo} alt="Text" className="w-14" />
          <h1 className="text-cyan-500">ReactFacts</h1>
        </div>
        <div>
          <h2 className="text-gray-300 text-lg font-semibold">
            React course - Project 1
          </h2>
        </div>
      </nav>
    </div>
  );
}

export default Header;

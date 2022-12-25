import logo from "../logo.png";

function MainContent() {
  return (
    <div>
      <main className="bg-gray-800 py-20 rounded-b-lg relative overflow-hidden">
        <h1 className="text-5xl text-white font-bold px-10 mb-10">
          Fun facts about React
        </h1>
        <ul className="text-gray-300 font-medium">
          <li className="before:text-cyan-500 before:text-4xl flex items-center  before:content-['\2022'] before:mr-4 before:ml-20">
            Was first released in 2013
          </li>
          <li className="before:text-cyan-500 before:text-4xl flex items-center  before:content-['\2022'] before:mr-4 before:ml-20">
            Was originally created by Jordan Walke
          </li>
          <li className="before:text-cyan-500 before:text-4xl flex items-center  before:content-['\2022'] before:mr-4 before:ml-20">
            Has well over 100K stars on GitHub
          </li>
          <li className="before:text-cyan-500 before:text-4xl flex items-center  before:content-['\2022'] before:mr-4 before:ml-20">
            In maintained by Facebook
          </li>
          <li className="before:text-cyan-500 before:text-4xl flex items-center  before:content-['\2022'] before:mr-4 before:ml-20">
            Powers thousands of enterprise apps, including
            <br /> mobile apps
          </li>
        </ul>
        <img
          src={logo}
          alt=""
          className="absolute w-80 -right-36 top-[25%] opacity-5"
        />
      </main>
    </div>
  );
}

export default MainContent;

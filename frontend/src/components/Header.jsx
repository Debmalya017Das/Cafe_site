import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-lg rounded-b-[25px] border-black">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between h-[5rem] ">
        <Link to="/" className="text-red-500 font-bold text-2xl lg:ml-24">Café</Link>
        <nav>
          <ul className="flex space-x-4 ">
            <li><Link to="/" className="text-slate-800 mx-3 hover:scale-110 inline-block duration-300 hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="text-slate-800 mx-3 hover:text-red-500 hover:scale-110 inline-block duration-300">About Us</Link></li>
            <li><Link to="/menu" className="text-slate-800 mx-3 hover:text-red-500 hover:scale-110 inline-block duration-300">Menu</Link></li>
            <li><Link to="/order" className="text-slate-800 mx-3 hover:text-red-500 hover:scale-110 inline-block duration-300">Order Online</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 lg:mr-12">
          <button className="text-slate-800 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-slate-800 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="text-slate-800 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
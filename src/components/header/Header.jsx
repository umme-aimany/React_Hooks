import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => 
    {
    setOpen(!open);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Tech</div>

    
        <nav className='hidden md:block'>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>

      
        <div className='md:hidden'>
          <button onClick={handleToggle}>
            <FaBars />
          </button>
        </div>
      </div>

    
      <div className={`${open ? 'block' : 'hidden'} md:hidden mt-4`}>
        <nav>
          <ul className="flex flex-col space-y-2">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>

            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>

            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>

            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default Header;

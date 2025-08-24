

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { assets } from '../assets/assets';



const Navbar = ({ onLoginClick, isLoggedIn, onLogout }) => { 
  const navLinks = []

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate(); 

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between 
              px-2 py-2 md:px-16 md:py-2 lg:px-24 xl:px-32 
              transition-all duration-500 z-50 ${isScrolled
          ? 'bg-white/80 shadow-md text-gray-700 backdrop-blur-lg'
          : ''
        }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="h-8 md:h-12 lg:h-16 w-auto rounded-[25%]"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${isScrolled ? 'text-gray-200' : 'text-white'
              }`}
          >
            {link.name}
            <div
              className={`${isScrolled ? 'bg-gray-700' : 'bg-white'
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
      </div>

      {/* Desktop Right */}
        <div className="flex md:flex items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={() => {
                onLogout();
                navigate("/");
              }}
              className={`px-4 py-2 md:px-8 md:py-2.5 rounded-full ml-2 md:ml-4 transition-all duration-500 
                ${isScrolled
                  ? 'text-white bg-red-600 hover:bg-white hover:text-red-600'
                  : 'bg-red-600 text-white hover:bg-white hover:text-red-600'
                }`}
            >
              Log Out
            </button>
          ) : (
            <>
              <button
                onClick={onLoginClick}
                className={`px-4 py-2 md:px-8 md:py-2.5 rounded-full ml-2 md:ml-4 transition-all duration-500 
                  ${isScrolled
                    ? 'text-white bg-black hover:bg-white hover:text-black'
                    : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
              >
                Log In
              </button>
            </>
          )}
        </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;

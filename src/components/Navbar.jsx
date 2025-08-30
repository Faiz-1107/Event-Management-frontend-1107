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
          ? 'bg-white/60 shadow-md text-gray-700 backdrop-blur-sm'
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

      {isLoggedIn && (
        <Link
          to="/events"
          className="ml-250 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
        >
          Events
        </Link>
      )}

        {/* Login and Logout */}
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
                  : 'bg-red-800 text-white hover:bg-white hover:text-red-600'
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
    </nav>
  )
}

export default Navbar;

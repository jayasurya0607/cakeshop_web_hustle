import { Coffee, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <Coffee className="w-8 h-8 text-rose-400" />
            <span className="text-2xl font-semibold text-amber-900">Sweet Moments Bakery</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-rose-500' : 'text-amber-900'} hover:text-rose-400 transition-colors font-medium`}
            >
              Home
            </Link>
            <Link 
              to="/cakes" 
              className={`${isActive('/cakes') ? 'text-rose-500' : 'text-amber-900'} hover:text-rose-400 transition-colors font-medium`}
            >
              Cakes
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-rose-500' : 'text-amber-900'} hover:text-rose-400 transition-colors font-medium`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-rose-500' : 'text-amber-900'} hover:text-rose-400 transition-colors font-medium`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-amber-900 hover:text-rose-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-rose-100 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-xl font-medium ${
                isActive('/') 
                  ? 'bg-rose-50 text-rose-500' 
                  : 'text-amber-900 hover:bg-pink-50'
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/cakes"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-xl font-medium ${
                isActive('/cakes') 
                  ? 'bg-rose-50 text-rose-500' 
                  : 'text-amber-900 hover:bg-pink-50'
              } transition-colors`}
            >
              Cakes
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-xl font-medium ${
                isActive('/about') 
                  ? 'bg-rose-50 text-rose-500' 
                  : 'text-amber-900 hover:bg-pink-50'
              } transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 rounded-xl font-medium ${
                isActive('/contact') 
                  ? 'bg-rose-50 text-rose-500' 
                  : 'text-amber-900 hover:bg-pink-50'
              } transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
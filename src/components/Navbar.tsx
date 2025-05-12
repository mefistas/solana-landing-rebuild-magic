
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Simplified menu items to reduce stacking
  const menuItems = [
    {
      label: 'Build',
      dropdown: true,
      items: [
        { label: 'Developer Resources', href: 'https://solana.com/developers' },
        { label: 'Documentation', href: 'https://docs.solana.com/' },
      ]
    },
    {
      label: 'Network',
      dropdown: true,
      items: [
        { label: 'Economics', href: 'https://solana.com/solananomics' },
        { label: 'Nakamoto', href: 'https://solana.com/nakamoto' },
      ]
    },
    {
      label: 'Community',
      href: 'https://solana.com/community'
    },
    {
      label: 'About',
      href: 'https://solana.com/about'
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-white text-xl font-bold">
              Solabs
            </Link>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex justify-end flex-1 space-x-10">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="text-gray-300 hover:text-white px-3 py-2 flex items-center text-sm font-medium"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-10">
                        <div className="py-1">
                          {item.items?.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className="h-5 w-5" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.items?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href || "#"}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Navigation structure similar to solana.com
  const navItems = [
    {
      title: "Build",
      items: [
        {
          title: "Getting Started",
          href: "/getting-started",
          description: "Start building on Solana with guides, tools, and resources."
        },
        {
          title: "Documentation",
          href: "/documentation",
          description: "In-depth technical documentation and API references."
        },
        {
          title: "Tools & Frameworks",
          href: "/tools",
          description: "Essential tools, libraries, SDKs, and frameworks."
        },
        {
          title: "Scaffold Programs",
          href: "/scaffold",
          description: "Get up and running with program templates."
        },
      ]
    },
    {
      title: "Network",
      items: [
        {
          title: "Validators",
          href: "/validators",
          description: "Secure the network by running a validator."
        },
        {
          title: "Nakamoto",
          href: "/nakamoto",
          description: "The next generation consensus algorithm."
        },
        {
          title: "Economics",
          href: "/economics",
          description: "Network incentives and economic design."
        },
      ]
    },
    {
      title: "Community",
      items: [
        {
          title: "Events",
          href: "/events",
          description: "Find Solana events near you."
        },
        {
          title: "Ecosystem",
          href: "/ecosystem",
          description: "Discover projects built on Solana."
        },
        {
          title: "Grants",
          href: "/grants",
          description: "Apply for funding and support."
        },
      ]
    },
    {
      title: "About",
      href: "/about",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold">
              Solabs
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                                    href={subItem.href}
                                  >
                                    <div className="text-sm font-medium text-white">
                                      {subItem.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                      {subItem.description}
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                      >
                        {item.title}
                      </a>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

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
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <div className="py-2">
                    <div className="text-white font-medium px-3 py-2">{item.title}</div>
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.title}
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

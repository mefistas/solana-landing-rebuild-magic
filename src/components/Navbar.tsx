
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
  
  // Updated navigation structure directly from solana.com
  const navItems = [
    {
      title: "Developers",
      items: [
        {
          title: "Start Building",
          href: "/developers",
          description: "Learn how to build on Solana's high-performance blockchain."
        },
        {
          title: "Documentation",
          href: "https://docs.solana.com",
          description: "Technical documentation for developers building on Solana."
        },
        {
          title: "Solana Cookbook",
          href: "https://solanacookbook.com",
          description: "Recipes and code examples for common Solana tasks."
        },
        {
          title: "Program Examples",
          href: "https://github.com/solana-developers/program-examples",
          description: "Example Solana programs to learn from and build upon."
        },
        {
          title: "DApp Scaffold",
          href: "https://github.com/solana-labs/dapp-scaffold",
          description: "Start building Solana dApps with this starter template."
        }
      ]
    },
    {
      title: "Network",
      items: [
        {
          title: "Mainnet Beta",
          href: "/network",
          description: "Explore Solana's production blockchain network."
        },
        {
          title: "Validators",
          href: "/validators",
          description: "Learn about running a Solana validator node."
        },
        {
          title: "Delegation Program",
          href: "/delegation-program",
          description: "Details on Solana's validator delegation program."
        },
        {
          title: "Nakamoto Coefficient",
          href: "/nakamoto-coefficient",
          description: "Understand Solana's decentralization metrics."
        },
        {
          title: "State Compression",
          href: "/state-compression",
          description: "Learn about on-chain data compression technology."
        }
      ]
    },
    {
      title: "Community",
      items: [
        {
          title: "Ecosystem",
          href: "/ecosystem",
          description: "Explore projects and teams building on Solana."
        },
        {
          title: "Grant Program",
          href: "https://solana.org/grants-funding",
          description: "Get funding support for your Solana project."
        },
        {
          title: "Hackathon: Hivemapper",
          href: "https://solana.com/news/case-study-hivemapper",
          description: "Hivemapper decentralizes mapping with better real-time data and community incentives."
        },
        {
          title: "Events",
          href: "/events",
          description: "Find Solana events happening around the world."
        },
        {
          title: "Breakpoint",
          href: "https://breakpoint.solana.com",
          description: "Solana's annual developer conference."
        }
      ]
    },
    {
      title: "Products",
      items: [
        {
          title: "Solana Mobile",
          href: "/solana-mobile",
          description: "Web3 mobile devices and software stack."
        },
        {
          title: "Saga",
          href: "/saga",
          description: "The crypto-friendly mobile phone by Solana."
        },
        {
          title: "Solana Pay",
          href: "/solana-pay",
          description: "Next-generation payment protocol built on Solana."
        }
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
          
          {/* Desktop Navigation - improved text clarity and spacing */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-white hover:text-white/90 font-medium text-base tracking-wide">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black/95 border border-gray-800">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
                                    href={subItem.href}
                                    target={subItem.href.startsWith('http') ? "_blank" : undefined}
                                    rel={subItem.href.startsWith('http') ? "noopener noreferrer" : undefined}
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
                        className="text-white hover:text-white/90 px-3 py-2 text-base font-medium tracking-wide"
                      >
                        {item.title}
                      </a>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Connect Wallet Button - fixed to be properly rounded without square frames */}
            <div className="ml-4">
              <div className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-solana-purple to-solana-green rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                <button 
                  className="relative py-2 px-6 bg-black text-white font-medium text-sm rounded-full border border-solana-purple/30 z-10 transition-all duration-300 group-hover:shadow-lg"
                  onClick={() => window.openModal && window.openModal()}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
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
        <div className="md:hidden bg-black/95 border-t border-gray-800">
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
                          target={subItem.href.startsWith('http') ? "_blank" : undefined}
                          rel={subItem.href.startsWith('http') ? "noopener noreferrer" : undefined}
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

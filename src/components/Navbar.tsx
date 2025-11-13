import React from 'react';
import { Newspaper, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import ModeToggle from './ModeToggle'; // Import ModeToggle

const navItems = [
  { name: 'الرئيسية', href: '/' },
  { name: 'سياسة', href: '/politics' },
  { name: 'اقتصاد', href: '/economy' },
  { name: 'رياضة', href: '/sports' },
  { name: 'تكنولوجيا', href: '/tech' },
];

interface NavbarProps {
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Newspaper className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">موقع الأخبار</span>
        </div>

        {/* Desktop Navigation (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-4 rtl:space-x-reverse">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Search Bar & Mode Toggle */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {onSearchChange && searchTerm !== undefined && (
            <div className="hidden lg:block">
              <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
            </div>
          )}
          <ModeToggle />
          
          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 pt-6">
                {/* Mobile Search Bar */}
                {onSearchChange && searchTerm !== undefined && (
                  <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
                )}
                
                {/* Mobile Navigation Links */}
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors hover:text-primary ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
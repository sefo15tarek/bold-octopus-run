import React from 'react';
import Navbar from './Navbar';
import { MadeWithDyad } from './made-with-dyad';

interface LayoutProps {
  children: React.ReactNode;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, searchTerm, onSearchChange }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Layout;
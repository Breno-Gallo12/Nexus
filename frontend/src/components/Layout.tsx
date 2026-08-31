import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer'; // Adicione a importação

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer /> {/* Adicione aqui */}
    </div>
  );
}
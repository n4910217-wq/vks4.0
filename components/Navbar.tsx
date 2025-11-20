import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'О компании', path: '/about' },
    { name: 'Таможенный Склад', path: '/warehouse' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-vks-beige/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Text Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-vks-copper font-bold text-lg md:text-xl tracking-widest uppercase hover:opacity-80 transition-opacity leading-tight">
              ВНЕШТОРГ<br className="md:hidden" /> КОНСЬЕРЖ СЕРВИС
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-vks-copper border-b-2 border-vks-copper' : 'text-vks-dark hover:text-vks-copper'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
             <a
              href="https://t.me/vks_expert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vks-copper hover:bg-vks-milky p-2 rounded-full transition-colors"
              title="Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </a>
            <a
              href="https://wa.me/79038911468"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-2 rounded-md border border-vks-copper bg-white text-vks-copper font-medium text-sm hover:bg-vks-copper hover:text-white transition-all duration-300"
            >
              Получить консультацию
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-vks-dark hover:text-vks-copper p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-vks-beige">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-vks-milky text-vks-copper'
                    : 'text-vks-dark hover:bg-vks-milky hover:text-vks-copper'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3 px-3">
              <a
                href="https://wa.me/79038911468"
                className="w-full text-center px-4 py-3 rounded-md border border-vks-copper bg-white text-vks-copper font-medium"
              >
                Получить консультацию
              </a>
              <a
                href="https://t.me/vks_expert"
                className="w-full text-center px-4 py-3 rounded-md bg-vks-copper text-white font-medium"
              >
                Telegram канал
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
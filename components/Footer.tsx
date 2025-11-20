import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vks-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-widest uppercase text-vks-beige">
              ВНЕШТОРГ<br/>КОНСЬЕРЖ СЕРВИС
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ваш надежный партнер в сфере импорта и логистики.
            </p>
            <ul className="text-sm text-gray-300 space-y-2 mt-4">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vks-copper"></span>
                <span>Более 25 лет опыта</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vks-copper"></span>
                <span>Работаем официально</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vks-copper"></span>
                <span>Собственный Таможенный Склад</span>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-vks-beige">Навигация</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/warehouse" className="hover:text-white transition-colors">Таможенный Склад</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-vks-beige">Контакты</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <p>Садовод, корпус А, вход 5, этаж 1,<br/>офис 1Г-100</p>
              <p className="text-lg font-medium text-white">+7 (903) 891-14-68</p>
              
              <div className="flex flex-col space-y-3 mt-4">
                <a 
                  href="https://wa.me/79038911468" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-center py-2 px-4 border border-vks-beige rounded hover:bg-vks-beige hover:text-vks-dark transition-colors"
                >
                  Написать в WhatsApp
                </a>
                <a 
                  href="https://t.me/vks_expert" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-center py-2 px-4 bg-vks-copper border border-vks-copper rounded hover:bg-opacity-90 transition-colors"
                >
                  Telegram канал
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ООО «Внешторг Консьерж Сервис». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
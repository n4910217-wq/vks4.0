import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Send } from 'lucide-react';

export const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Ваша заявка отправлена. Мы свяжемся с вами по номеру ${formData.phone}.`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-vks-dark mb-12 text-center">Контакты</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-vks-milky p-8 md:p-12 rounded-2xl">
             <h2 className="text-2xl font-semibold text-vks-dark mb-8">Наши координаты</h2>
             
             <div className="space-y-8">
                <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-vks-copper mt-1 mr-4" />
                    <div>
                        <h3 className="font-medium text-vks-dark">Адрес офиса</h3>
                        <p className="text-gray-600 mt-1">
                            Садовод, корпус А, вход 5,<br/>
                            этаж 1, офис 1Г-100
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <Phone className="w-6 h-6 text-vks-copper mt-1 mr-4" />
                    <div>
                        <h3 className="font-medium text-vks-dark">Телефон</h3>
                        <a href="tel:+79038911468" className="text-lg font-bold text-vks-dark hover:text-vks-copper block mt-1">
                            +7 (903) 891-14-68
                        </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <MessageCircle className="w-6 h-6 text-vks-copper mt-1 mr-4" />
                    <div>
                        <h3 className="font-medium text-vks-dark">Мессенджеры</h3>
                        <div className="flex gap-4 mt-2">
                            <a 
                                href="https://wa.me/79038911468"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white border border-vks-copper text-vks-copper rounded hover:bg-vks-copper hover:text-white transition-colors text-sm"
                            >
                                WhatsApp
                            </a>
                            <a 
                                href="https://t.me/vks_expert"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-vks-copper text-white rounded hover:bg-opacity-90 transition-colors text-sm"
                            >
                                Telegram
                            </a>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-2xl shadow-lg">
             <h2 className="text-2xl font-semibold text-vks-dark mb-6">Обратная связь</h2>
             <p className="text-gray-500 mb-8">Оставьте заявку, и мы перезвоним вам в течение 15 минут.</p>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-vks-copper focus:ring-1 focus:ring-vks-copper outline-none transition-colors"
                        placeholder="Иван Иванов"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-vks-copper focus:ring-1 focus:ring-vks-copper outline-none transition-colors"
                        placeholder="+7 (___) ___-__-__"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Комментарий (необязательно)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-vks-copper focus:ring-1 focus:ring-vks-copper outline-none transition-colors resize-none"
                        placeholder="Какой вопрос вас интересует?"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-4 bg-vks-copper text-white font-bold rounded hover:bg-vks-dark transition-colors flex justify-center items-center"
                >
                    Отправить заявку <Send className="ml-2 w-4 h-4" />
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};
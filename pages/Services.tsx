import React from 'react';
import { FileText, Truck, CheckSquare, Shield, BookOpen, UserCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    {
      title: "Импорт под ключ",
      desc: "Полное сопровождение сделки от поиска поставщика до доставки на ваш склад.",
      benefits: ["Поиск поставщиков", "Контроль качества", "Таможенное оформление"],
      icon: <Truck className="w-10 h-10 text-vks-copper" />
    },
    {
      title: "Разрешительные документы",
      desc: "Оформление всех необходимых сертификатов и деклараций соответствия.",
      benefits: ["Декларации соответствия", "Сертификаты ГОСТ Р", "СГР"],
      icon: <FileText className="w-10 h-10 text-vks-copper" />
    },
    {
      title: "Маркировка «Честный Знак»",
      desc: "Помощь в регистрации и маркировке товаров согласно законодательству РФ.",
      benefits: ["Регистрация в системе", "Заказ кодов", "Нанесение маркировки"],
      icon: <CheckSquare className="w-10 h-10 text-vks-copper" />
    },
    {
      title: "Логистика",
      desc: "Оптимальные маршруты доставки грузов любым видом транспорта.",
      benefits: ["Автоперевозки", "Ж/Д перевозки", "Мультимодальные схемы"],
      icon: <Shield className="w-10 h-10 text-vks-copper" />
    },
    {
      title: "Бухгалтерия и юр. поддержка",
      desc: "Профессиональное ведение бухгалтерии ВЭД и юридическая защита.",
      benefits: ["Валютный контроль", "Налоговое планирование", "Защита интересов"],
      icon: <BookOpen className="w-10 h-10 text-vks-copper" />
    },
    {
      title: "Комплексное сопровождение",
      desc: "Аутсорсинг ВЭД для вашего бизнеса.",
      benefits: ["Персональный менеджер", "Отчетность 24/7", "Минимизация рисков"],
      icon: <UserCheck className="w-10 h-10 text-vks-copper" />
    }
  ];

  return (
    <div className="bg-vks-milky min-h-screen">
      <div className="bg-vks-dark py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Наши Услуги</h1>
        <p className="text-vks-beige max-w-2xl mx-auto px-4">
            Мы предлагаем полный спектр услуг для участников внешнеэкономической деятельности.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border-t-4 border-vks-copper">
              <div className="p-8 flex-grow">
                <div className="mb-6 bg-vks-milky w-16 h-16 rounded-full flex items-center justify-center">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold text-vks-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                
                <h4 className="font-medium text-vks-copper mb-3 text-sm uppercase tracking-wide">Что входит:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-gray-700">
                      <span className="mr-2 text-vks-copper">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
                 <a href="https://wa.me/79038911468" className="text-vks-copper font-medium text-sm hover:text-vks-dark transition-colors">
                    Заказать услугу &rarr;
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
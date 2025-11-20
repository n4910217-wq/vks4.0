import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
       {/* Header */}
       <div className="bg-vks-milky py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <span className="text-vks-copper font-semibold tracking-widest uppercase mb-2 block">О компании</span>
           <h1 className="text-4xl md:text-5xl font-bold text-vks-dark mb-6">ООО «Внешторг Консьерж Сервис»</h1>
           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             Более 25 лет безупречной работы на рынке внешнеэкономической деятельности.
           </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
           <div>
              <h2 className="text-3xl font-bold text-vks-dark mb-6">Надежность и опыт</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Мы начали свой путь более четверти века назад. За это время рынок менялся многократно, но наши принципы остались неизменными: честность, законность и ориентация на клиента.
                </p>
                <p>
                  ВКС сегодня — это команда профессионалов, объединяющая логистов, юристов, таможенных брокеров и бухгалтеров. Мы создаем среду, в которой бизнес может расти, не отвлекаясь на бюрократические сложности импорта.
                </p>
                <p>
                  Наша гордость — собственный Таможенный Склад, который позволяет нам предлагать уникальные условия хранения и оформления грузов.
                </p>
              </div>
           </div>
           <div className="bg-vks-milky rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                 <div className="text-center">
                    <span className="block text-4xl font-bold text-vks-copper mb-2">25+</span>
                    <span className="text-sm text-vks-dark">Лет опыта</span>
                 </div>
                 <div className="text-center">
                    <span className="block text-4xl font-bold text-vks-copper mb-2">100%</span>
                    <span className="text-sm text-vks-dark">Официально</span>
                 </div>
                 <div className="text-center col-span-2 mt-4">
                    <span className="block text-lg font-bold text-vks-dark mb-2">Собственный СВХ</span>
                    <span className="text-sm text-gray-600">Полный контроль груза</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-vks-dark text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-vks-beige mb-4">Наша миссия</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto italic">
              «Сделать импорт простым, прозрачным и безопасным процессом для каждого предпринимателя в России, от крупного импортёра до продавца на маркетплейсе».
            </p>
        </div>
      </div>
    </div>
  );
};
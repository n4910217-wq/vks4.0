import React from 'react';
import { ShieldCheck, Clock, Layers, Zap } from 'lucide-react';

export const Warehouse: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-vks-dark py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Таможенный Склад ВКС</h1>
            <p className="text-xl text-vks-beige max-w-2xl mx-auto">
                Собственная инфраструктура для максимальной скорости и контроля.
            </p>
         </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-vks-copper text-white">
                                <ShieldCheck />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg leading-6 font-medium text-vks-dark">Официальный статус</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Наш склад включен в реестр владельцев таможенных складов. Все операции прозрачны для таможенных органов.
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-vks-copper text-white">
                                <Layers />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg leading-6 font-medium text-vks-dark">Контроль груза</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Современные системы видеонаблюдения и учета. Вы всегда знаете, где находится ваш товар и в каком он состоянии.
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-vks-copper text-white">
                                <Clock />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg leading-6 font-medium text-vks-dark">Быстрое оформление</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Отсутствие посредников между складом и брокером позволяет сократить время оформления документов в разы.
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-vks-copper text-white">
                                <Zap />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg leading-6 font-medium text-vks-dark">Снижение рисков</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Возможность осмотра, взвешивания и переупаковки груза до подачи декларации исключает ошибки и штрафы.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
                     <img 
                        src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop" 
                        alt="Warehouse Interior" 
                        className="absolute inset-0 w-full h-full object-cover"
                     />
                </div>
            </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-vks-milky py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-vks-dark mb-6">Нужны услуги складского хранения?</h2>
              <a 
                href="https://wa.me/79038911468"
                className="inline-block px-8 py-3 bg-white border border-vks-copper text-vks-copper font-bold rounded hover:bg-vks-copper hover:text-white transition-colors"
              >
                  Обсудить условия
              </a>
          </div>
      </div>
    </div>
  );
};
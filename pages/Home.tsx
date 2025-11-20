import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, Users, PackageCheck, TrendingUp } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-vks-milky relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-vks-dark mb-6 leading-tight">
              Легальный импорт<br/>
              <span className="text-vks-copper">и сопровождение бизнеса</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-light">
              ВКС — один партнёр для честного и безопасного бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/79038911468"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-white text-vks-copper border-2 border-vks-copper rounded-md font-medium text-lg hover:bg-vks-copper hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Получить консультацию
              </a>
              <a 
                href="https://t.me/vks_expert"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-vks-dark text-white rounded-md font-medium text-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Перейти в Telegram-канал
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vks-dark">О компании</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { text: "Более 25 лет опыта", icon: <TrendingUp className="w-8 h-8 text-vks-copper mb-4 mx-auto"/> },
              { text: "Работаем официально", icon: <ShieldCheck className="w-8 h-8 text-vks-copper mb-4 mx-auto"/> },
              { text: "Собственный Таможенный Склад", icon: <PackageCheck className="w-8 h-8 text-vks-copper mb-4 mx-auto"/> },
              { text: "Сопровождаем предпринимателей «Садовода» и импортёров по всей России", icon: <Users className="w-8 h-8 text-vks-copper mb-4 mx-auto"/> },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-vks-milky/30 rounded-lg hover:shadow-md transition-shadow h-full flex flex-col justify-start items-center">
                {item.icon}
                <h3 className="text-lg font-medium text-vks-dark">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-vks-milky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-vks-dark mb-4">Наши услуги</h2>
            <div className="w-24 h-1 bg-vks-copper mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Импорт под ключ",
              "Разрешительные документы",
              "Маркировка «Честный Знак»",
              "Сертификация",
              "Логистика",
              "Бухгалтерия и юридическая поддержка",
              "Комплексное сопровождение бизнеса"
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-vks-beige">
                <div className="w-10 h-10 bg-vks-milky rounded-full flex items-center justify-center mb-6 group-hover:bg-vks-copper transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-vks-copper group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-vks-dark mb-3">{service}</h3>
                <p className="text-gray-500 text-sm">Профессиональное решение задач любой сложности.</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="text-vks-copper font-medium hover:underline inline-flex items-center">
              Посмотреть все услуги <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-vks-dark rounded-2xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-vks-beige">Преимущества</h2>
                <div className="space-y-6">
                  {[
                    "Правильное оформление",
                    "Скорость работы",
                    "Отсутствие штрафов",
                    "Безопасность и законность"
                  ].map((adv, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 bg-vks-copper p-1 rounded-full mt-1 mr-4">
                         <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-lg text-gray-200">{adv}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-full flex items-center justify-center">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4 text-vks-beige">ООО «Внешторг Консьерж Сервис»</h3>
                    <p className="text-gray-300">
                        Мы берем на себя все риски и бюрократические вопросы, чтобы вы могли сосредоточиться на развитии своего бизнеса.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Teaser */}
      <section className="py-20 bg-vks-milky/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                     <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                        alt="Склад" 
                        className="rounded-lg shadow-xl w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                     />
                </div>
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-vks-dark mb-6">Собственный Таможенный Склад</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Наличие собственного склада позволяет нам гарантировать сохранность груза, ускорять процессы оформления и минимизировать издержки клиентов.
                    </p>
                    <Link 
                        to="/warehouse" 
                        className="inline-block px-8 py-3 bg-vks-copper text-white rounded hover:bg-vks-dark transition-colors"
                    >
                        Подробнее
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-vks-dark mb-4">Процесс работы</h2>
            <p className="text-gray-500">Прозрачный и понятный путь от заявки до результата</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            
            {[
                { step: "01", title: "Заявка" },
                { step: "02", title: "Анализ" },
                { step: "03", title: "Оформление" },
                { step: "04", title: "Доставка" },
                { step: "05", title: "Передача документов" }
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-white p-4 md:p-0 mb-8 md:mb-0 w-full md:w-auto">
                    <div className="w-16 h-16 rounded-full bg-vks-copper text-white flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg mb-4">
                        {item.step}
                    </div>
                    <h4 className="font-semibold text-vks-dark text-center">{item.title}</h4>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-vks-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-vks-beige">Для кого услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-gray-700 rounded-lg hover:border-vks-copper transition-colors">
                    <h3 className="text-xl font-bold mb-2">Импортёры</h3>
                    <p className="text-gray-400 text-sm">Компании, занимающиеся внешнеэкономической деятельностью.</p>
                </div>
                <div className="p-6 border border-gray-700 rounded-lg hover:border-vks-copper transition-colors">
                    <h3 className="text-xl font-bold mb-2">Предприниматели</h3>
                    <p className="text-gray-400 text-sm">Средний и малый бизнес, ищущий надежных партнеров.</p>
                </div>
                <div className="p-6 border border-gray-700 rounded-lg hover:border-vks-copper transition-colors">
                    <h3 className="text-xl font-bold mb-2">Продавцы на «Садоводе»</h3>
                    <p className="text-gray-400 text-sm">Помощь в легализации товара и документов.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-vks-milky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-vks-dark mb-6">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left max-w-2xl mx-auto">
               <div>
                 <h4 className="font-bold text-vks-dark">Адрес:</h4>
                 <p className="text-gray-600">Садовод, корпус А, вход 5, этаж 1, офис 1Г-100</p>
               </div>
               <div>
                 <h4 className="font-bold text-vks-dark">Связь:</h4>
                 <p className="text-gray-600">+7 (903) 891-14-68</p>
               </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <a 
                    href="https://wa.me/79038911468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-vks-copper border border-vks-copper rounded font-medium hover:bg-vks-copper hover:text-white transition-colors"
                 >
                    WhatsApp
                 </a>
                 <a 
                    href="https://t.me/vks_expert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-vks-dark text-white rounded font-medium hover:bg-opacity-90 transition-colors"
                 >
                    Telegram
                 </a>
            </div>
        </div>
      </section>
    </div>
  );
};
import React from 'react';
import { BookingModule } from './components/BookingModule';
import { DuplicateModule } from './components/DuplicateModule';
import { GeminiAssistant } from './components/GeminiAssistant';
import { Check, Shield, Clock, FileText, Phone, MapPin, Menu, X, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate position with offset for the sticky header
      const headerOffset = 85; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 shadow-lg shadow-black/20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg font-bold text-xl shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:bg-blue-500 transition-colors">ТО</div>
            <span className="font-bold text-white text-lg tracking-tight">Техосмотр<span className="text-blue-500">Онлайн</span></span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#booking" onClick={(e) => scrollToSection(e, 'booking')} className="hover:text-blue-400 hover:scale-105 transition-all">Запись</a>
            <a href="#duplicate" onClick={(e) => scrollToSection(e, 'duplicate')} className="hover:text-blue-400 hover:scale-105 transition-all">Дубликат карты</a>
            <a href="#steps" onClick={(e) => scrollToSection(e, 'steps')} className="hover:text-blue-400 hover:scale-105 transition-all">Как работает</a>
            <a href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')} className="hover:text-blue-400 hover:scale-105 transition-all">Контакты</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="tel:88001234567" className="hidden sm:flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors bg-slate-900 border border-slate-700 hover:border-blue-500/50 px-3 py-1.5 rounded-full text-sm">
              <Phone size={14} className="text-blue-500 fill-current" />
              <span>8 (800) 123-45-67</span>
            </a>
            <button 
              className="md:hidden text-slate-300 hover:text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl flex flex-col transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-4 flex flex-col gap-2">
            <a href="#booking" onClick={(e) => scrollToSection(e, 'booking')} className="text-slate-300 p-3 hover:bg-slate-800 rounded-xl hover:text-white flex items-center justify-between group">
              <span>Запись на ТО</span>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-500" />
            </a>
            <a href="#duplicate" onClick={(e) => scrollToSection(e, 'duplicate')} className="text-slate-300 p-3 hover:bg-slate-800 rounded-xl hover:text-white flex items-center justify-between group">
              <span>Дубликат карты</span>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-500" />
            </a>
            <a href="#steps" onClick={(e) => scrollToSection(e, 'steps')} className="text-slate-300 p-3 hover:bg-slate-800 rounded-xl hover:text-white flex items-center justify-between group">
              <span>Как работает</span>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-500" />
            </a>
            <a href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')} className="text-slate-300 p-3 hover:bg-slate-800 rounded-xl hover:text-white flex items-center justify-between group">
              <span>Контакты</span>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-500" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-slate-900/50 border border-slate-700/50 backdrop-blur-md text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-8 animate-in fade-in slide-in-from-top-4 duration-700 shadow-lg hover:border-blue-500/50 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Официальные станции РСА
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 tracking-tight">
            Запись на технический осмотр <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 drop-shadow-sm">без очередей</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 leading-relaxed">
            Гарантированное внесение в базу ЕАИСТО (ГИБДД). 
            <br className="hidden md:block"/> Работаем с физическими и юридическими лицами в 45 городах РФ.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 animate-in fade-in zoom-in duration-700 delay-200">
             <div className="flex items-center gap-2 bg-slate-900/60 px-5 py-2.5 rounded-full shadow-lg border border-slate-800 backdrop-blur-md hover:bg-slate-800 hover:border-slate-600 transition-all cursor-default">
                <Check className="text-green-500" size={18} strokeWidth={3} />
                <span className="font-medium text-slate-200 text-sm">Аккредитация РСА</span>
             </div>
             <div className="flex items-center gap-2 bg-slate-900/60 px-5 py-2.5 rounded-full shadow-lg border border-slate-800 backdrop-blur-md hover:bg-slate-800 hover:border-slate-600 transition-all cursor-default">
                <Shield className="text-blue-500" size={18} />
                <span className="font-medium text-slate-200 text-sm">Гарантия прохождения</span>
             </div>
             <div className="flex items-center gap-2 bg-slate-900/60 px-5 py-2.5 rounded-full shadow-lg border border-slate-800 backdrop-blur-md hover:bg-slate-800 hover:border-slate-600 transition-all cursor-default">
                <Clock className="text-orange-500" size={18} />
                <span className="font-medium text-slate-200 text-sm">30 минут на всё</span>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-4 pb-20 -mt-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Booking Module */}
          <div className="lg:col-span-8 space-y-8">
            <div id="booking" className="scroll-mt-32">
               <BookingModule />
            </div>
            
            <div id="steps" className="bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-800 p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="bg-blue-600/20 text-blue-500 p-2 rounded-lg"><FileText size={24} /></span>
                Как проходит осмотр?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-6 left-16 right-16 h-0.5 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-800 -z-10"></div>

                <div className="space-y-4 relative group">
                  <div className="w-12 h-12 bg-slate-900 border border-blue-500/50 text-blue-400 rounded-2xl flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">1</div>
                  <h4 className="font-bold text-white text-lg">Заявка</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Выберите пункт ТО на карте и запишитесь на удобное время через форму выше.</p>
                </div>
                <div className="space-y-4 relative group">
                   <div className="w-12 h-12 bg-slate-900 border border-blue-500/50 text-blue-400 rounded-2xl flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">2</div>
                  <h4 className="font-bold text-white text-lg">Заезд</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Приезжайте на станцию. Эксперт сверит VIN-номер и проверит узлы автомобиля.</p>
                </div>
                <div className="space-y-4 relative group">
                   <div className="w-12 h-12 bg-slate-900 border border-blue-500/50 text-blue-400 rounded-2xl flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">3</div>
                  <h4 className="font-bold text-white text-lg">Результат</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Данные мгновенно уходят в ЕАИСТО. Вы получаете карту на руки и в электронном виде.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Duplicate & Info */}
          <div className="lg:col-span-4 space-y-8">
            <div id="duplicate" className="scroll-mt-32">
              <DuplicateModule />
            </div>
            
            <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-slate-800 p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                <FileText className="text-blue-500" size={20} />
                Что взять с собой?
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  <span>Паспорт гражданина РФ (или доверенность)</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  <span>СТС или ПТС (оригинал)</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  <span>Чистый автомобиль</span>
                </li>
              </ul>
            </div>

            <div id="contacts" className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden group scroll-mt-24">
              <div className="absolute top-0 right-0 p-20 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-white/20 transition-all duration-700"></div>
              <h3 className="font-bold text-xl mb-3 relative z-10">Нужна помощь?</h3>
              <p className="text-blue-100 text-sm mb-8 relative z-10 leading-relaxed">
                Не нашли свой город или возникли сложности с документами? Позвоните нам прямо сейчас.
              </p>
              <a href="tel:88001234567" className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold py-3.5 rounded-xl w-full hover:bg-blue-50 transition-all shadow-lg active:scale-[0.98] relative z-10">
                <Phone size={18} className="fill-blue-700" />
                8 (800) 123-45-67
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO/City Footer Section */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 text-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-slate-800 text-blue-500 p-1 rounded font-bold text-sm">ТО</div>
                <span className="font-bold text-white text-base">Техосмотр Онлайн</span>
              </div>
              <p className="mb-6 text-slate-500 leading-relaxed">
                Федеральная сеть пунктов технического осмотра. Мы помогаем автовладельцам быстро и законно получить диагностическую карту.
              </p>
              <div className="flex items-center gap-3">
                 <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white transition-all rounded-xl flex items-center justify-center font-bold text-xs shadow-lg">VK</a>
                 <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white transition-all rounded-xl flex items-center justify-center font-bold text-xs shadow-lg">TG</a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold mb-5 text-base">Категории ТС</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span>Легковые (M1)</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span>Такси и Автобусы</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span>Грузовые (N1-N3)</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-slate-600 rounded-full"></span>Мотоциклы (L)</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-5 text-base">Популярные города</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Москва</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Санкт-Петербург</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Екатеринбург</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Новосибирск</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors text-blue-500 font-medium">Все 45 городов &rarr;</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-5 text-base">Контакты</h5>
              <p className="flex items-center gap-3 mb-4 text-slate-300 group cursor-pointer hover:text-white transition-colors">
                <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all"><Phone size={16}/></span> 
                8 (800) 123-45-67
              </p>
              <p className="flex items-center gap-3 mb-4 text-slate-300 group cursor-pointer hover:text-white transition-colors">
                <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all"><MapPin size={16}/></span> 
                г. Москва, Пресненская наб., 12
              </p>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-xs">
              &copy; 2024 Techosmotr Online. Информация не является публичной офертой.
            </p>
            <div className="flex gap-6 text-xs font-medium">
               <a href="#" className="text-slate-500 hover:text-white transition-colors">Политика конфиденциальности</a>
               <a href="#" className="text-slate-500 hover:text-white transition-colors">Реквизиты</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gemini AI Assistant */}
      <GeminiAssistant />
    </div>
  );
};

export default App;
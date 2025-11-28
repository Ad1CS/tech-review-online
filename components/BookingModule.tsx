import React, { useState } from 'react';
import { MapPin, Calendar, Car, CheckCircle, Loader2, ChevronDown } from 'lucide-react';

const CITIES = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород", "Краснодар"];
const VEHICLE_TYPES = ["Легковой (M1)", "Мотоцикл (L)", "Грузовой (N1, N2)", "Автобус (M2)"];

export const BookingModule: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(prev => prev + 1);
    }, 600);
  };

  const reset = () => setStep(1);

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
      <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex justify-between items-center backdrop-blur-sm">
        <h3 className="font-bold text-lg flex items-center gap-2 text-white">
          <Calendar className="w-5 h-5 text-blue-500" />
          Онлайн запись на ТО
        </h3>
        <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded">Модуль РСА</span>
      </div>

      <div className="p-6 md:p-8 min-h-[420px]">
        {/* Progress Bar */}
        <div className="flex mb-10 items-center justify-between px-4 relative">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center relative z-10">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                step >= i 
                  ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' 
                  : 'bg-slate-800 text-slate-500 border border-slate-700'
              }`}>
                {step > i ? <CheckCircle size={18}/> : i}
              </div>
              <span className={`text-xs mt-2 font-medium transition-colors ${step >= i ? 'text-blue-400' : 'text-slate-600'}`}>
                {i === 1 ? 'Город' : i === 2 ? 'Авто' : 'Запись'}
              </span>
            </div>
          ))}
          {/* Progress Line */}
          <div className="absolute top-[18px] w-full h-[2px] bg-slate-800 -z-0 left-0 px-8">
            <div 
              className="h-full bg-blue-600 transition-all duration-500 ease-out" 
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Выберите пункт осмотра</h2>
              <p className="text-slate-400 text-sm">Показаны аккредитованные станции в вашем регионе</p>
            </div>
            
            <div className="grid gap-6 max-w-lg mx-auto">
              <label className="block group">
                <span className="text-sm font-medium text-slate-400 mb-1.5 block group-focus-within:text-blue-400 transition-colors">Ваш город</span>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 text-slate-500 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                  <select 
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-10 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none cursor-pointer transition-all hover:border-slate-600"
                  >
                    {CITIES.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 text-slate-500 w-5 h-5 pointer-events-none" />
                </div>
              </label>
              
              <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                <div className="p-3 bg-slate-800 border-b border-slate-700 text-xs font-bold text-slate-400 uppercase tracking-wider">
                   Доступные станции ({selectedCity})
                </div>
                <div className="divide-y divide-slate-700/50">
                  <div className="flex items-center p-4 cursor-pointer hover:bg-slate-800 transition-colors group" onClick={handleNext}>
                    <div className="relative mr-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white group-hover:text-blue-400 transition-colors">Пункт ТО №1245</div>
                      <div className="text-xs text-slate-500 mt-0.5">ул. Ленина, 45Б &bull; 09:00 - 21:00</div>
                    </div>
                    <button className="bg-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg group-hover:bg-blue-600 transition-colors">Выбрать</button>
                  </div>
                  <div className="flex items-center p-4 cursor-pointer hover:bg-slate-800 transition-colors group" onClick={handleNext}>
                    <div className="relative mr-4">
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white group-hover:text-blue-400 transition-colors">Пункт ТО №882</div>
                      <div className="text-xs text-slate-500 mt-0.5">пр. Мира, 12 &bull; Круглосуточно</div>
                    </div>
                    <button className="bg-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg group-hover:bg-blue-600 transition-colors">Выбрать</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-lg mx-auto">
             <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Данные транспорта</h2>
                <p className="text-slate-400 text-sm">Укажите тип и номер автомобиля для брони</p>
             </div>
             
             <div className="grid gap-5">
                <label className="block group">
                  <span className="text-sm font-medium text-slate-400 mb-1.5 block group-focus-within:text-blue-400 transition-colors">Тип ТС</span>
                  <div className="relative">
                    <Car className="absolute left-3 top-3.5 text-slate-500 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                    <select className="w-full pl-10 pr-10 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none cursor-pointer">
                      {VEHICLE_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-slate-500 w-5 h-5 pointer-events-none" />
                  </div>
                </label>
                
                <label className="block group">
                  <span className="text-sm font-medium text-slate-400 mb-1.5 block group-focus-within:text-blue-400 transition-colors">Гос. номер (если есть)</span>
                  <input type="text" placeholder="А 000 АА 777" className="w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none uppercase font-mono tracking-wider transition-all" />
                </label>
                
                <button 
                  onClick={handleNext}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-2 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
                >
                  {loading ? <Loader2 className="animate-spin" /> : 'Продолжить запись'}
                </button>
             </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500 pt-4">
            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <CheckCircle size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Заявка сформирована!</h2>
              <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                Мы зарезервировали время на станции в г. {selectedCity}. 
                <br/>Вам придет СМС с кодом подтверждения в течение 2 минут.
              </p>
            </div>
            
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 max-w-sm mx-auto shadow-inner">
              <div className="flex justify-between text-sm mb-3 border-b border-slate-700 pb-2">
                <span className="text-slate-500">Услуга</span>
                <span className="font-bold text-white">Техосмотр (Категория B)</span>
              </div>
              <div className="flex justify-between text-sm mb-3 border-b border-slate-700 pb-2">
                <span className="text-slate-500">Стоимость</span>
                <span className="font-bold text-white">от 900 ₽</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Оплата</span>
                <span className="font-medium text-blue-400">На станции</span>
              </div>
            </div>
            
            <button 
              onClick={reset}
              className="text-slate-500 hover:text-white font-medium text-sm transition-colors py-2"
            >
              Записаться еще раз
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
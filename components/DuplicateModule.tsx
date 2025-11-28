import React, { useState } from 'react';
import { Search, CreditCard, Download, ShieldCheck, Loader2 } from 'lucide-react';

export const DuplicateModule: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<'idle' | 'found' | 'paid'>('idle');
  const [vin, setVin] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vin) return;
    setLoading(true);
    // Simulate API search delay
    setTimeout(() => {
      setLoading(false);
      setResult('found');
    }, 1500);
  };

  const handlePayment = () => {
    setLoading(true);
    // Simulate Payment processing
    setTimeout(() => {
      setLoading(false);
      setResult('paid');
    }, 1500);
  };

  return (
    <div className="bg-slate-800 text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 p-32 bg-yellow-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      
      <div className="p-6 md:p-8 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-yellow-500 p-2.5 rounded-xl text-slate-900 shadow-lg shadow-yellow-500/20">
            <Search size={24} className="stroke-[2.5]" />
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight">Дубликат <br/>диагностической карты</h3>
          </div>
        </div>

        {result === 'idle' && (
          <form onSubmit={handleSearch} className="space-y-5">
            <p className="text-slate-400 text-sm leading-relaxed">
              Потеряли карту? Мы найдем действующий техосмотр в официальной базе ЕАИСТО и отправим PDF вам на почту.
            </p>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block ml-1">VIN номер или Госномер</label>
              <input 
                type="text" 
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all font-mono uppercase"
                placeholder="XTA..."
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Найти карту в базе'}
            </button>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 justify-center mt-2 bg-slate-900/50 py-1.5 rounded-full border border-slate-700/50">
              <ShieldCheck size={12} className="text-green-500" />
              <span>Официальный запрос в ЕАИСТО</span>
            </div>
          </form>
        )}

        {result === 'found' && (
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck className="text-green-400 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-green-400 text-sm">Карта найдена!</p>
                <p className="text-sm text-slate-300">Действует до 12.05.2025</p>
                <p className="text-xs text-slate-500 mt-1 font-mono">VIN: {vin.toUpperCase()}</p>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-400 text-sm">Стоимость восстановления:</span>
                <span className="text-2xl font-bold text-white">490 ₽</span>
              </div>
              <button 
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : <>
                  <CreditCard size={18} />
                  Оплатить и скачать
                </>}
              </button>
            </div>
          </div>
        )}

        {result === 'paid' && (
          <div className="text-center py-6 animate-in fade-in zoom-in">
             <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
               <Download size={32} />
             </div>
             <h3 className="text-xl font-bold mb-2 text-white">Оплата прошла успешно!</h3>
             <p className="text-slate-400 text-sm mb-6 leading-relaxed">
               Ваша диагностическая карта отправлена на email. Вы также можете скачать её прямо сейчас.
             </p>
             <button className="bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-200 transition-colors w-full mb-3">
               Скачать PDF
             </button>
             <button 
               onClick={() => { setResult('idle'); setVin(''); }}
               className="block w-full text-xs text-slate-500 hover:text-white transition-colors"
             >
               Найти другую карту
             </button>
          </div>
        )}
      </div>
    </div>
  );
};
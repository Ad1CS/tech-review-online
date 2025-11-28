import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getAIResponse = async (userMessage: string, chatHistory: { role: string; parts: { text: string }[] }[]) => {
  if (!API_KEY) {
    return "Система ИИ временно недоступна (отсутствует API ключ). Пожалуйста, свяжитесь с оператором по телефону.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // System instruction to act as a helpful techosmotr consultant
    const systemInstruction = `
      Вы — профессиональный консультант официального оператора технического осмотра в России (РФ).
      Ваша цель — помочь клиенту записаться на техосмотр или получить дубликат карты.
      
      Ваши знания:
      1. Техосмотр обязателен для: такси, автобусов, грузовиков, и при перерегистрации авто старше 4 лет на нового владельца.
      2. Для личных легковых авто физлиц техосмотр сейчас добровольный (нужен только для выезда за границу или по желанию).
      3. Стоимость техосмотра зависит от региона (обычно от 900 до 1500 руб для легковых).
      4. Дубликат карты можно восстановить через наш сервис (платно, 490 руб).
      5. Необходимые документы: СТС или ПТС, Паспорт владельца (или доверенность).
      
      Стиль общения:
      - Вежливый, короткий, продающий.
      - Если клиент спрашивает "как записаться", ответьте, что это можно сделать через форму на сайте выше.
      - Если клиент спрашивает про "покупку" техосмотра без заезда — СТРОГО отвечайте, что это незаконно. Мы проводим только официальный осмотр с заездом на линию.
    `;

    // Map history to Gemini format (user/model)
    // Note: The new SDK chat history management is usually automatic within a chat session,
    // but here we are using a simple stateless request for simplicity or maintaining own state.
    // Let's use chat session.

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: chatHistory,
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Извините, сейчас я не могу ответить. Пожалуйста, позвоните нам.";
  }
};
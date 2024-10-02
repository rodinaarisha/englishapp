import React, { createContext, useState } from 'react';

// Создаём контекст
export const WordContext = createContext();

// Провайдер контекста
export  const WordProvider = ({ children }) => {
    const [words, setWords] = useState([]); // Состояние для хранения слов

    return (
        <WordContext.Provider value={{ words, setWords }}>
            {children}
        </WordContext.Provider>
    );
};

import React, { useState } from 'react';

const AddWordForm = ({ onAdd }) => {
    const [term, setTerm] = useState('');
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
    const [theme, setTheme] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWord = { term, transcription, translation, theme };
        onAdd(newWord);
        setTerm('');
        setTranscription('');
        setTranslation('');
        setTheme('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Слово" 
                value={term} 
                onChange={(e) => setTerm(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Транскрипция" 
                value={transcription} 
                onChange={(e) => setTranscription(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Перевод" 
                value={translation} 
                onChange={(e) => setTranslation(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Тема" 
                value={theme} 
                onChange={(e) => setTheme(e.target.value)} 
                required 
            />
            <button type="submit">Добавить слово</button>
        </form>
    );
};

export default AddWordForm;
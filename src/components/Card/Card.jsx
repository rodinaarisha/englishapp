import React, { useState } from 'react';

import data from '../data.json';
import './Card.css';

const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);

    const nextCard = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowTranslation(false); // Скрыть перевод при смене карточки
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowTranslation(false); // Скрыть перевод при смене карточки
        }
    };

    const { english, transcription, russian } = data[currentIndex];

    return (
        <div className="word-card-container">
            <button onClick={prevCard} disabled={currentIndex === 0}>Предыдущее</button>
            <div className="word-card">
                <h3>{english}</h3>
                <p>Транскрипция: {transcription}</p>
                {showTranslation && <p>Перевод: {russian}</p>}
                <button onClick={() => setShowTranslation(!showTranslation)}>
                    {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
                </button>
            </div>
            <button onClick={nextCard} disabled={currentIndex === data.length - 1}>Следующее</button>
        </div>
    );
};

export default Card;


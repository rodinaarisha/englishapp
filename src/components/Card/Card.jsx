import React, { useState } from 'react';

import data from '../data.json';

import styles from './Card.module.css';

import next from '../../next.svg';
import previous from '../../previous.svg';

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
        <div className={`${styles.word_card_container} ${styles.study_block}`}>
            <button className={styles.button_previous} onClick={prevCard} disabled={currentIndex === 0}>
            <img src={previous} alt="Предыдущий" />
            </button>
            <div className={styles.word_card}>
                <h3>{english}</h3>
                <p>Транскрипция: {transcription}</p>
                {showTranslation && <p>Перевод: {russian}</p>}
                <button className={styles.button}  onClick={() => setShowTranslation(!showTranslation)}>
                    {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
                </button>
            </div>
            <button className={styles.button_next}  onClick={nextCard} disabled={currentIndex === data.length - 1}>
                
            <img src={next} alt="Следующий" />
            </button>
        </div>
    );
};

export default Card;


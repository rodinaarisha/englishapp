import React, { useState } from 'react';
import next from '../../assets/images/next.svg';
import previous from '../../assets/images/previous.svg';
import Card from '../Card/Card';
import styles from './CardContainer.module.css';

const CardContainer = ({ words }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wordsStudied, setWordsStudied] = useState(0);
    const [studiedWordsIndices, setStudiedWordsIndices] = useState([]); // Массив для отслеживания изученных слов


    const incrementWordsStudied = () => {
        // Проверяем, было ли слово уже изучено
        if (!studiedWordsIndices.includes(currentIndex)) {
            setWordsStudied(prev => prev + 1);
            setStudiedWordsIndices(prev => [...prev, currentIndex]); // Добавляем индекс изученного слова
        }
    };

    const [showTranslation, setShowTranslation] = useState(false); // Состояние для показа перевода

    const updateTranslationVisibility = (index) => {
        if (studiedWordsIndices.includes(index)) {
            setShowTranslation(true);
        } else {
            setShowTranslation(false);
        }
    };


    const nextCard = () => {
        // Проверяем, есть ли следующая карточка
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
            updateTranslationVisibility(currentIndex + 1); // Обновляем видимость перевода
        }
    };


    const prevCard = () => {
        // Проверяем, есть ли предыдущая карточка
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            updateTranslationVisibility(currentIndex - 1); // Обновляем видимость перевода
        }
    };


    const handleToggleTranslation = () => {
        setShowTranslation((prev) => !prev);
    };

    return (
        <div className={styles.card}>
            <div className={styles.word_card_container}>
                <button
                    className={styles.button_previous}
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                >
                    <img src={previous} alt="Предыдущий" />
                </button>
                <Card
                    word={words[currentIndex]}
                    showTranslation={showTranslation} // Передаем состояние видимости перевода
                    onToggleTranslation={handleToggleTranslation}
                    onWordStudied={incrementWordsStudied}
                    currentIndex={currentIndex}

                />
                <button
                    className={styles.button_next}
                    onClick={nextCard}
                    disabled={currentIndex === words.length - 1}
                >
                    <img src={next} alt="Следующий" />
                </button>

            </div>
            <h4>Изучено слов: {wordsStudied}</h4>
            <h4>{currentIndex + 1}/{words.length}</h4>
        </div>
    );
};

export default CardContainer;
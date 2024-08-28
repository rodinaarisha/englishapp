import React, { useState } from 'react';
import next from '../../assets/images/next.svg';
import previous from '../../assets/images/previous.svg';
import Card from '../Card/Card';
import styles from './CardContainer.module.css';

const CardContainer = ({ words }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false); // Состояние для показа перевода

    const nextCard = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowTranslation(false); // Скрыть перевод при переходе на следующую карточку
        }
    };

    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setShowTranslation(false); // Скрыть перевод при переходе на предыдущую карточку
        }
    };

    const handleToggleTranslation = () => {
        setShowTranslation((prev) => !prev); // Переключаем видимость перевода
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
                    onToggleTranslation={handleToggleTranslation} // Передаем функцию переключения
                />
                <button
                    className={styles.button_next}
                    onClick={nextCard}
                    disabled={currentIndex === words.length - 1}
                >
                    <img src={next} alt="Следующий" />
                </button>
            </div>
            <h4>{currentIndex + 1}/{words.length}</h4>
        </div>
    );
};

export default CardContainer;
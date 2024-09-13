import React, { useEffect, useRef } from 'react';
import styles from './Card.module.css';


const Card = ({ word, showTranslation, onToggleTranslation, onWordStudied, currentIndex }) => {
    const { english, transcription, russian } = word;

    // Создаем реф для кнопки
    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [currentIndex]);

    const handleToggleTranslation = () => {
        onToggleTranslation(); // Переключаем видимость перевода
        onWordStudied(); // Увеличиваем количество изученных слов
    };


    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.word_card_container} ${styles.study_block}`}>
                <div className={styles.word_card}>
                    <h3>{english}</h3>
                    <p>Транскрипция: {transcription}</p>
                    {showTranslation && <p>Перевод: {russian}</p>}
                    <button ref={buttonRef} className={styles.button} onClick={
                        handleToggleTranslation
                    } disabled={false}>

                        {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Card;
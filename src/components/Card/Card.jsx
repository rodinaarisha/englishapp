import React from 'react';
import styles from './Card.module.css';

const Card = ({ word, showTranslation, onToggleTranslation }) => {
    const { english, transcription, russian } = word;

    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.word_card_container} ${styles.study_block}`}>
                <div className={styles.word_card}>
                    <h3>{english}</h3>
                    <p>Транскрипция: {transcription}</p>
                    {showTranslation && <p>Перевод: {russian}</p>}
                    <button className={styles.button} onClick={onToggleTranslation}>
                        {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
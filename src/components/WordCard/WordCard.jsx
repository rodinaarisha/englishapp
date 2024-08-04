import React from 'react';

const WordCard = ({ word, onEdit, onDelete }) => {
    const { term, transcription, translation, theme } = word;

    return (
        <div className="word-card">
            <h3>{term}</h3>
            <p>Транскрипция: {transcription}</p>
            <p>Перевод: {translation}</p>
            <p>Тема: {theme}</p>
            <button onClick={onEdit}>Редактировать</button>
            <button onClick={onDelete}>Удалить</button>
        </div>
    );
};

export default WordCard;
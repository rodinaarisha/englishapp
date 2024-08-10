import React from 'react';
import './WordCard.css'; // Импортируем файл стилей

const WordCard = ({ word, onEdit, onDelete }) => {
    const { term, transcription, translation, theme } = word;

    return (
        <div className="word-card">
            <table>
                <tbody>
                    <tr>
                        <td className="term">{term}</td>
                        <td className="transcription">Транскрипция: {transcription}</td>
                        <td className="translation">Перевод: {translation}</td>
                        <td className="theme">Тема: {theme}</td>
                        <td className="word-buttons">
                            <button onClick={onEdit}>Ред.</button>
                            <button onClick={onDelete}>Уд.</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WordCard;
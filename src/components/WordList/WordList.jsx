import React from 'react';
import WordCard from '../WordCard/WordCard';

const WordList = ({ words, onEdit, onDelete }) => {
    return (
        <div>
            {words.map((word) => (
                <WordCard 
                    key={word.id} 
                    word={word} 
                    onEdit={() => onEdit(word.id)} 
                    onDelete={() => onDelete(word.id)} 
                />
            ))}
        </div>
    );
};

export default WordList;
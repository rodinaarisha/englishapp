import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddWordForm from '../components/AddWordForm/AddWordForm';
import Table from '../components/Table/Table';
import WordList from '../components/WordList/WordList';



const WordListPage = () => {
    const [words, setWords] = useState([]);

    const addWord = (newWord) => {
        // Здесь можно добавить логику для присвоения уникального ID
        setWords([...words, { ...newWord, id: Date.now() }]);
    };

    const editWord = (id) => {        // Логика редактирования слова
    };

    const deleteWord = (id) => {
        setWords(words.filter(word => word.id !== id));
    };

    return (
        <div>
            <AddWordForm onAdd={addWord} />
            <WordList words={words} onEdit={editWord} onDelete={deleteWord} />
            <Table />
        </div>
    );
};

export default WordListPage;
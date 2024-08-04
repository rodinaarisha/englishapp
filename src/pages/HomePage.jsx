import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WordList from '../components/WordList/WordList';
import AddWordForm from '../components/AddWordForm/AddWordForm';

const HomePage = () => {
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
            <Header />
            <AddWordForm onAdd={addWord} />
            <WordList words={words} onEdit={editWord} onDelete={deleteWord} />
            <Footer />
        </div>
    );
};

export default HomePage;
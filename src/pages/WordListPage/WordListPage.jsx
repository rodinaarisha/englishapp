import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddWordForm from '../../components/AddWordForm/AddWordForm';
import WordCardList from '../../components/WordList/WordCardList';
import styles from './WordListPage.module.css';



const WordListPage = () => {

    const [showAddWordForm, setShowAddWordForm] = useState(false);

    const handleAddWordClick = () => {
        setShowAddWordForm(prev => !prev); // переключаем состояние отображения формы
    };


    return (
        <div className={styles.WordCardPage} style={{ marginTop: '10%' }}>
            <div className={styles.WordCardPageContainer}>
                <button onClick={handleAddWordClick} className={styles.add_button}>
                    {showAddWordForm ? "Скрыть форму" : "Добавить слово"}
                </button>
                {showAddWordForm && <AddWordForm onAdd={(newWord) => { /* Тут можно обработать добавление нового слова */ }} />}

                <WordCardList /></div>
        </div >
    );
};

export default WordListPage;
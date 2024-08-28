import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WordCardList from '../../components/WordList/WordCardList';
import styles from './WordListPage.module.css';



const WordListPage = () => {

    return (
        <div className={styles.WordCardPage}>
            <button>Создать слово</button>
            <WordCardList />
        </div>
    );
};

export default WordListPage;
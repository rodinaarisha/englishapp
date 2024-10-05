import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import wordStore from '../../store/WordStore';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddWordForm from '../../components/AddWordForm/AddWordForm';
import WordCardList from '../../components/WordList/WordCardList';
import styles from './WordListPage.module.css';

const WordListPage = observer(() => {
    const [showAddWordForm, setShowAddWordForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAddWordClick = () => {
        setShowAddWordForm(prev => !prev); // Переключаем состояние отображения формы
    };

    useEffect(() => {
        const loadWords = async () => {
            setLoading(true);
            try {
                await wordStore.fetchWords();
                setError(null); // Очистка ошибки при успешной загрузке
            } catch (error) {
                setError('Ошибка при загрузке слов'); // Установка сообщения об ошибке
            } finally {
                setLoading(false);
            }
        };
        loadWords();
    }, []);

    return (
        <div className={styles.WordCardPage} style={{ marginTop: '10%' }}>
            <div className={styles.WordCardPageContainer}>
                <button onClick={handleAddWordClick} className={styles.add_button}>
                    {showAddWordForm ? "Скрыть форму" : "Добавить слово"}
                </button>
                {showAddWordForm && (
                    <AddWordForm />
                )}
                {loading && <p className={styles.loading_message}>Загрузка...</p>}
                {error && <p className={styles.error_message}>{error}</p>}
                <WordCardList words={wordStore.words} /> {/* Обновляем список слов из wordStore */}
            </div>
        </div>
    );
});

export default WordListPage;
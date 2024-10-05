import { observer } from 'mobx-react';
import React, { useEffect } from "react";
import wordStore from '../../store/WordStore';
import WordCard from "../WordCard/WordCard";
import styles from './WordCardList.module.css';


const WordCardList = observer(() => {
    const handleDelete = (id) => {
        wordStore.deleteWord(id);
        console.log(`Удалить элемент с id: ${id}`);
    };
    useEffect(() => {
        wordStore.fetchWords();
    }, []);


    return (
        <div className={styles.word_card_list}>
            {wordStore.words.length ? (
                wordStore.words.map((item) => (
                    <WordCard
                        key={item.id} // Используем уникальный id
                        {...item} onDelete={() => handleDelete(item.id)} // Передаем функцию для удаления
                    />
                ))
            ) : (
                <p>Нет данных для отображения.</p>
            )}
        </div>
    );
})

export default WordCardList;
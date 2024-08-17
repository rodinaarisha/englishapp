import React from "react";
import data from '../data.json';
import WordCard from "../WordCard/WordCard";
import styles from './WordCardList.module.css';

export default function WordCardList() {
    const handleDelete = (id) => {
        // Логика для удаления элемента
        console.log(`Удалить элемент с id: ${id}`);
    };

    return (
        <div className={styles.word_card_list}>
            {data.length > 0 ? (
                data.map((item) => (
                    <WordCard 
                        key={item.id} // Используем уникальный id
                        {...item}                        onDelete={() => handleDelete(item.id)} // Передаем функцию для удаления
                        />
                    ))
                ) : (
                    <p>Нет данных для отображения.</p>
                )}
            </div>
        );
    }
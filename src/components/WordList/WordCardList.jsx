import React, { Component } from 'react';
import WordCard from '../WordCard/WordCard';
import styles from './WordCardList.module.css'; // Убедитесь, что этот путь верный

export default class WordCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            isLoading: true, // Индикатор загрузки
            error: null, // Для обработки ошибок
        };
    }

    componentDidMount() {
        fetch('/api/words')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                return response.json();
            })
            .then(data => this.setState({ words: data, isLoading: false }))
            .catch(error => this.setState({ error: error.message, isLoading: false }));
    }

    handleDelete = (id) => {
        this.setState(prevState => ({

            words: prevState.words.filter(word => word.id !== id) // Удаление слова из состояния
        }));
        console.log(`Удалить элемент с id: ${id}`);
    };

    render() {
        const { words, isLoading, error } = this.state;

        if (isLoading) {

            return <p className={styles.loading}>Загрузка...</p>; // Индикатор загрузки
        }

        if (error) {
            return <p>Ошибка загрузки данных: {error}</p>; // Сообщение об ошибке
        }

        return (
            <div className={styles.word_card_list}>
                {words.length ? (
                    words.map((item) => (
                        <WordCard
                            key={item.id} // Используем уникальный id
                            {...item}
                            onDelete={() => this.handleDelete(item.id)} // Передаем функцию для удаления
                        />
                    ))
                ) : (
                    <p>Нет данных для отображения.</p>
                )}
            </div>
        );
    }
}
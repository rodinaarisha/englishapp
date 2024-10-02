import React, { useEffect, useState } from 'react';

//import data from '../../components/data.json';

import CardContainer from '../../components/CardContainer/CardContainer';

const CardPage = () => {
    let [words, setWords] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/words')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setWords(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Произошла ошибка: {error.message}</p>;
    }



    return (
        <div style={{ marginTop: '10%' }}>
            {words.length > 0 ? (
                <CardContainer words={words} />
            ) : (
                <p>Слов не найдено.</p>
            )}
        </div>

    );
};

export default CardPage;

import React, { useState } from 'react';
import styles from './AddWordForm.module.css';

const AddWordForm = ({ onAdd }) => {
    const [term, setTerm] = useState('');
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
    const [theme, setTheme] = useState('');

    const resetForm = () => {
        setTerm('');
        setTranscription('');
        setTranslation('');
        setTheme('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWord = { term, transcription, translation, theme };
        onAdd(newWord);

        resetForm()
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input_group_container}>
                <div className={styles.input_card_bloc1}>
                    <input className={styles.input}
                        type="text"
                        placeholder="Тема"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        required
                    />
                    <input className={styles.input}
                        type="text"
                        placeholder="Слово"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input_card_bloc2}>
                    <input className={styles.input}
                        type="text"
                        placeholder="Перевод"
                        value={translation}
                        onChange={(e) => setTranslation(e.target.value)}
                        required
                    />
                    <input className={styles.input}
                        type="text"
                        placeholder="Транскрипция"
                        value={transcription}
                        onChange={(e) => setTranscription(e.target.value)}
                    />
                </div>
            </div>
            <button className={styles.add_button_form} type="submit">Добавить слово</button>
        </form>
    );
};

export default AddWordForm;
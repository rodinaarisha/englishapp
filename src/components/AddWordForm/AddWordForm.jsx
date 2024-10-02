import { useState } from 'react';
import styles from './AddWordForm.module.css';

const AddWordForm = ({ onAdd }) => {
    const [term, setTerm] = useState('');
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
    const [theme, setTheme] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    const resetForm = () => {
        setTerm('');
        setTranscription('');
        setTranslation('');
        setTheme('');
    };

    // Состояние для отслеживания пустых полей
    const [emptyFields, setEmptyFields] = useState({
        term: false,
        transcription: false,
        translation: false,
        theme: false,
    });


    const checkEmptyFields = () => {
        const fields = {
            term: term.trim() === '',
            transcription: transcription.trim() === '',
            translation: translation.trim() === '',
            theme: theme.trim() === '',
        };
        setEmptyFields(fields); // Здесь не должно быть ошибки
        return fields;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = checkEmptyFields();

        // Проверяем пустые поля и показываем уведомление
        if (fields.term || fields.transcription || fields.translation || fields.theme) {
            setShowNotification(true);
            return;
        }

        setShowNotification(false); // Скрываем уведомление, если все поля заполнены

        const tags = "";
        const tags_json = ""
        const newWord = { term, transcription, translation, theme, tags, tags_json };
        onAdd(newWord);

        resetForm();
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
                    <div className={styles.showNotification} >{showNotification && <span>Пожалуйста, заполните все обязательные поля.</span>}</div>
                </div>
                <button className={styles.add_button_form} type="submit">Добавить слово</button>
            </div>
        </form>

    );
};

export default AddWordForm;
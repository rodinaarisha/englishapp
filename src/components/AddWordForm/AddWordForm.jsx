import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import wordStore from '../../store/WordStore';
import styles from './AddWordForm.module.css';


const AddWordForm = observer(() => {
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [russian, setRussian] = useState('');
    const [tags, setTags] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    const resetForm = () => {
        setEnglish('');
        setTranscription('');
        setRussian('');
        setTags('');
    };

    const [emptyFields, setEmptyFields] = useState({
        english: false,
        transcription: false,
        russian: false,
        tags: false,
    });

    const checkEmptyFields = () => {
        const fields = {
            english: english.trim() === '',
            transcription: transcription.trim() === '',
            russian: russian.trim() === '',
            tags: tags.trim() === '',
        };
        setEmptyFields(fields);
        return fields;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = checkEmptyFields();

        // Проверяем пустые поля и показываем уведомление
        if (fields.english || fields.transcription || fields.russian || fields.tags) {
            setShowNotification(true);
            return;
        }

        setShowNotification(false);
        const newWord = {
            tags_json: JSON.stringify(tags.split(',').map(tag => tag.trim())), // или в нужном вам формате
            english: english.trim(),
            transcription: transcription.trim() === '' ? '[no transcription]' : transcription.trim(),
            russian: russian.trim(),
            tags: tags.trim(),
        };
        wordStore.addWord(newWord);
        resetForm();

        console.log(newWord);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input_group_container}>
                <div className={styles.input_card_bloc1}>
                    <input className={styles.input}
                        type="text"
                        placeholder="Тема"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        required
                    />
                    <input className={styles.input}
                        type="text"
                        placeholder="Слово"
                        value={english}
                        onChange={(e) => setEnglish(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input_card_bloc2}>
                    <input className={styles.input}
                        type="text"
                        placeholder="Перевод"
                        value={russian}
                        onChange={(e) => setRussian(e.target.value)}
                        required
                    />
                    <input className={styles.input}
                        type="text"
                        placeholder="Транскрипция"
                        value={transcription}
                        onChange={(e) => setTranscription(e.target.value)}
                    />
                    <div className={styles.showNotification}>
                        {showNotification && <span>Пожалуйста, заполните все обязательные поля.</span>}
                    </div>
                </div>
                <button className={styles.add_button_form} type="submit">Добавить слово</button>
            </div>
        </form>
    );
});

export default AddWordForm;
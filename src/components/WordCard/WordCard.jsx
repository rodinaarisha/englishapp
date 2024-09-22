import React, { useRef, useState } from 'react';
import styles from './WordCard.module.css';

import buttonCancel from '../../assets/images/buttonCancel.svg';
import buttonChange from '../../assets/images/buttonChange.svg';
import buttonDelete from '../../assets/images/buttonDelete.svg';


function WordCard({ english, transcription, russian, tags, onDelete }) {

  function trim() {
    return tags ? tags.split(',').map(tag => tag.trim()) : [];
  };

  const englishInputRef = useRef(null);
  const transcriptionInputRef = useRef(null);
  const russianInputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editableEnglish, setEditableEnglish] = useState(english);
  const [editableTranscription, setEditableTranscription] = useState(transcription);
  const [editableRussian, setEditableRussian] = useState(russian);
  const [editableTags, setEditableTags] = useState(trim());

  // Состояние для отслеживания пустых полей
  const [emptyFields, setEmptyFields] = useState({
    english: false,
    transcription: false,
    russian: false,
  });


  const tagsTitle = editableTags.length ? editableTags.join(', ') : 'Нет раздела';

  // Проверка на пустые поля при каждом изменении
  const handleChangeEnglish = (e) => {
    setEditableEnglish(e.target.value);
    checkEmptyFields();
  };

  const handleChangeTranscription = (e) => {
    setEditableTranscription(e.target.value);
    checkEmptyFields();
  };

  const handleChangeRussian = (e) => {
    setEditableRussian(e.target.value);
    checkEmptyFields();
  };

  const checkEmptyFields = () => {
    setEmptyFields({
      english: editableEnglish.trim() === '',
      transcription: editableTranscription.trim() === '',
      russian: editableRussian.trim() === '',
    });
  };


  const handleEdit = () => {
    // Проверяем состояние полей
    if (isEditing) {
      if (emptyFields.english || emptyFields.transcription || emptyFields.russian) {
        if (emptyFields.english) {
          englishInputRef.current.focus();
        } else if (emptyFields.transcription) {
          transcriptionInputRef.current.focus();
        } else if (emptyFields.russian) {
          russianInputRef.current.focus();
        }
        return; // Прерываем выполнение, если есть пустые поля
      }
    }

    // Переключаем режим редактирования
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditableEnglish(english);
    setEditableTranscription(transcription);
    setEditableRussian(russian);
    setEditableTags(trim());
    setIsEditing(false);
  };

  return (
    <div className={styles.word_card}>
      <div className={styles.button}>
        <button className={styles.button_change} onClick={handleEdit}>
          <img src={buttonChange} alt="Изменить" />
        </button>
        {!isEditing && (
          <button className={styles.button_delete} onClick={onDelete}>
            <img src={buttonDelete} alt="Удалить" />
          </button>
        )}

        {isEditing && (
          <button className={styles.button_cancel} onClick={handleCancel}>
            <img src={buttonCancel} alt="отменить " />

          </button>
        )}
      </div>
      <div className={styles.word_card_block}>
        <div className={styles.word_card_bloc1}>
          <p><b>Тема:</b> {tagsTitle}</p>
          <h2>Слово:
            {isEditing ? (
              <input
                className={styles.input}
                ref={englishInputRef}
                value={editableEnglish}
                onChange={handleChangeEnglish}
                placeholder="Введите слово"
                onBlur={checkEmptyFields}

                required

              />
            ) : (
              editableEnglish
            )}
          </h2>
        </div>
        <div className={styles.word_card_bloc2}>
          <h2>Перевод:
            {isEditing ? (
              <input
                className={styles.input}
                ref={russianInputRef}
                value={editableRussian}
                onChange={handleChangeRussian}
                placeholder="Введите перевод"
                onBlur={checkEmptyFields}

                required
              />
            ) : (
              editableRussian
            )}
          </h2>
          <h3>Транскрипция:
            {isEditing ? (
              <input
                className={styles.input}
                ref={transcriptionInputRef}
                value={editableTranscription}
                onChange={handleChangeTranscription}
                placeholder="Введите транскрипцию"
                onBlur={checkEmptyFields}

                disabled={!isEditing}
                required
              />

            ) : (
              editableTranscription
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WordCard;
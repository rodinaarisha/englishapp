import React, { useState } from 'react';
import styles from './WordCard.module.css';

import buttonCancel from '../../assets/images/buttonCancel.svg';
import buttonChange from '../../assets/images/buttonChange.svg';
import buttonDelete from '../../assets/images/buttonDelete.svg';


function WordCard({ english, transcription, russian, tags, onDelete }) {

  function trim() {
    return tags ? tags.split(',').map(tag => tag.trim()) : [];
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editableEnglish, setEditableEnglish] = useState(english);
  const [editableTranscription, setEditableTranscription] = useState(transcription);
  const [editableRussian, setEditableRussian] = useState(russian);
  const [editableTags, setEditableTags] = useState(trim());

  const tagsTitle = editableTags.length ? editableTags.join(', ') : 'Нет раздела';

  /*const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false); // Закрываем режим редактирования после сохранения
    } else {
      setIsEditing(true); // Открываем режим редактирования
    }
  };*/
  //или лучше так
  const handleEdit = () => setIsEditing(!isEditing)

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
            <img src={buttonCancel} alt="Изменить" />

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

                value={editableEnglish}
                onChange={(e) => setEditableEnglish(e.target.value)}
                placeholder="Введите слово"
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

                value={editableRussian}
                onChange={(e) => setEditableRussian(e.target.value)}
                placeholder="Введите перевод"
              />
            ) : (
              editableRussian
            )}
          </h2>
          <h3>Транскрипция:
            {isEditing ? (
              <input
                className={styles.input}

                value={editableTranscription}
                onChange={(e) => setEditableTranscription(e.target.value)}
                placeholder="Введите транскрипцию"
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
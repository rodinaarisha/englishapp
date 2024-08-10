import React, { useState } from 'react';
import data from '../data.json';

const Table = () => { 
    const [isEditing, setIsEditing] = useState(null); 
    const [editedRow, setEditedRow] = useState({}); 

    const handleEdit = (row) => { 
        setIsEditing(row.id); 
        setEditedRow(row); 
    }; 

    const handleSave = () => { 
        // Логика сохранения, обновите вашу логику здесь
        console.log('Сохранение данных:', editedRow);
        setIsEditing(null); 
    }; 

    const handleCancel = () => { 
        setIsEditing(null); 
    };

    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setEditedRow(prevState => ({ ...prevState, [name]: value })); 
    };

    const handleDelete = (id) => { 
        // Логика удаления, обновите вашу логику здесь
        console.log('Удаление строки с id:', id);
    };

    return ( 
        <div className='table-container'> 
            <table className='table'> 
                <thead> 
                    <tr> 
                        <th>english</th> 
                        <th>transcription</th> 
                        <th>russian</th> 
                        <th>tags</th> 
                        <th>actions</th> 
                    </tr> 
                </thead> 
                <tbody> 
                    {data.map((row) => (
                        <tr key={row.id}> 
                            <td>{isEditing === row.id ? 
                                <input type="text" name="english" value={editedRow.english} onChange={handleChange} /> 
                                : row.english}
                            </td> 
                            <td>{isEditing === row.id ? 
                                <input type="text" name="transcription" value={editedRow.transcription} onChange={handleChange} /> 
                                : row.transcription}
                            </td> 
                            <td>{isEditing === row.id ? 
                                <input type="text" name="russian" value={editedRow.russian} onChange={handleChange} /> 
                                : row.russian}
                            </td> 
                            <td>{isEditing === row.id ? 
                                <input type="text" name="tags" value={editedRow.tags} onChange={handleChange} /> 
                                : row.tags}
                            </td> 
                            <td>
                                {isEditing === row.id ? 
                                    <>
                                        <button onClick={handleSave}>Сохранить</button>
                                        <button onClick={handleCancel}>Отмена</button>
                                    </> : 
                                    <>
                                        <button onClick={() => handleEdit(row)}>Редактировать</button>
                                        <button onClick={() => handleDelete(row.id)}>Удалить</button>
                                    </>
                                }
                            </td>
                        </tr>
                    ))} 
                </tbody> 
            </table> 
        </div> 
    ); 
}; 

export default Table;
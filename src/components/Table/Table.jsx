import React from 'react';
import data from '../data.json';

const Table = () => { 

    return ( 
        <div className='table-container'> 
            <table className='table'> 
                <thead> 
                    <tr> 
                        <th>english</th> 
                        <th>transcription</th> 
                        <th>russian</th> 
                        <th>tags</th> 
                    </tr> 
                </thead> 
                <tbody> 
                    {data.map((row) => (
                        <tr key={row.id}> 
                            <td>{row.english}</td> 
                            <td>{row.transcription}</td> 
                            <td>{row.russian}</td> 
                            <td>{row.tags}</td> 
                        </tr>
                    ))} 
                </tbody> 
            </table> 
        </div> 
    ); 
}; 

export default Table;
import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Изучение иностранных слов</h1>
            <div className="button-container">
                <Link to="/"> {/* Ссылка на HomePage */}
                    <button className="button">Home</button>
                </Link>
                <Link to="/tablelist"> {/* Ссылка на WordList (предполагается, что такая страница есть) */}
                    <button className="button">TableList</button>
                </Link>
                <Link to="/card"> {/* Ссылка на CardPage */}
                    <button className="button">Card</button>
                </Link>
                <Link to="/wordcardlist"> {/* Ссылка на CardPage */}
                    <button className="button">WordCardList</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
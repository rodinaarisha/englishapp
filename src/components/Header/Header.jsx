import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import logo from '../../assets/images/logo.jpg';
import Menu from '../Navbar/Navbar';
import './Header.css';


const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Логотип" className="logo" />
            </Link>
            <h1 className="header__title">Изучение иностранных слов</h1>

            <Menu />
        </header>
    );
};

export default Header;
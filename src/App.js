import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import './components/Table/Table.css';
import CardPage from './pages/CardPage/CardPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import TablePage from './pages/TablePage/TablePage.jsx';


import Missing from './components/Missing/Missing.jsx';
import WordListPage from './pages/WordListPage/WordListPage.jsx';


const App = () => {
    return (
        <Router>
            <div>
                <Header /> {/* Добавляем Header */}
                
                
                {/* Определение маршрутов */}
                <div style={{ marginTop: '60px' }}> {/* Отступ для фиксированного Header */}

                <Routes> {/* Обновлено на Routes */}
                    <Route path="/" element={<HomePage />} /> {/* Главная страница */}
                    <Route path="/tablelist" element={<TablePage />} /> {/* Страница карточек */}
                    <Route path="/card" element={<CardPage />} /> {/* Страница карточек */}
                    <Route path="/wordcardlist" element={<WordListPage/>} /> {/* Страница карточек */}
                    <Route path="*" element={<Missing/>} />
                </Routes>
                <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
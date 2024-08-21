import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './components/Table/Table.css';
import CardPage from './pages/CardPage';
import HomePage from './pages/HomePage';
import TablePage from './pages/TablePage';
import WordListPage from './pages/WordlistPage';


const App = () => {
    return (
        <Router>
            <div>
                <Header /> {/* Добавляем Header */}
                
                {/* Определение маршрутов */}
                <Routes> {/* Обновлено на Routes */}
                    <Route path="/" element={<HomePage />} /> {/* Главная страница */}
                    <Route path="/tableList" element={<TablePage />} /> {/* Страница карточек */}
                    <Route path="/card" element={<CardPage />} /> {/* Страница карточек */}
                    <Route path="/wordcardlist" element={<WordListPage />} /> {/* Страница карточек */}
                    {/* Добавьте маршрут для страницы WordList, если она будет создана */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
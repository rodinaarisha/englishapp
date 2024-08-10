import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './components/AddWordForm/AddWordForm.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './components/Table/Table.css';
import './components/WordCard//WordCard.css';
import CardPage from './pages/CardPage';
import HomePage from './pages/HomePage';
import WordListPage from './pages/WordListPage';

const App = () => {
    return (
        <Router>
            <div>
                <Header /> {/* Добавляем Header */}
                
                {/* Определение маршрутов */}
                <Routes> {/* Обновлено на Routes */}
                    <Route path="/" element={<HomePage />} /> {/* Главная страница */}
                    <Route path="/WordList" element={<WordListPage />} /> {/* Страница карточек */}
                    <Route path="Card" element={<CardPage />} /> {/* Страница карточек */}
                    {/* Добавьте маршрут для страницы WordList, если она будет создана */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
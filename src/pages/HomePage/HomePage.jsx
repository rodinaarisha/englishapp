import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home__container">
            <header className="home__header">
                <h1 className="home__title">Добро пожаловать!</h1>
            </header>
            <div className="home__introduction">
                <p>Это приложение предназначено для изучения английского с помощью карточек.</p>
            </div>
            <div className="home__about">
                Это приложение для изучения и тренировки английского словарного запаса. Вы также можете использовать приложение для добавления и редактирования новых слов.
            </div>
            <Link to="/card">
                <button className=" button button__home">Game</button>
            </Link>
        </div>
    );
}

export default HomePage;
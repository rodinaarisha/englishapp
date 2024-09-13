import { Link } from 'react-router-dom'; // Импортируем Link

function Menu({ title = "Изучение иностранных слов" }) {
    return (
        <div className="menu-container">
            <Link to="/"> {/* Ссылка на HomePage */}
                <button className="button">Home</button>
            </Link>
            <Link to="/wordlist"> {/* Ссылка на CardPage */}
                <button className="button">Word List</button>
            </Link>
            <Link to="/game"> {/* Ссылка на CardPage */}
                <button className="button">Game</button>
            </Link>
        </div>
    );

}

export default Menu;
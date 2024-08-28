import { Link } from 'react-router-dom'; // Импортируем Link

function Menu({ title = "Изучение иностранных слов" }) {
    return (
        <div className="menu-container">
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
    );

}

export default Menu;
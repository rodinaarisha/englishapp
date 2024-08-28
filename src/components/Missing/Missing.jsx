import error from '../../assets/images/notfound.jpg';
import './Missing.css';


function Missing() {
    return (
        <main className='error'>
            <h2>Упс, кажется страницы не существует</h2>
            <img src={error} alt="" />
        </main>
    )
}

export default Missing;
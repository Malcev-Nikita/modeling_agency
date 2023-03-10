import '../style/header.css';

function Header() {
    return (
        <header id='main' className='header'>
            <div className='container'>
                <div className='header_select'>
                    <p className='header_upper_text'>Профессиональные</p>
                    <p className='header_downer_text'>Модели</p>

                    <button className='header_button' onClick={() => window.location.href = '#models'}><span>Выбрать модель</span></button>
                </div>
            </div>
        </header>
    );
}

export default Header;
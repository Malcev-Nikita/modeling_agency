import '../style/nav.css';

function Nav() {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav_container'>
                    {/* <a className='nav_item'>Главная</a> */}
                    <a className='nav_item'>Модели</a>
                    <a className='nav_item'>Услуги</a>
                    <a className='nav_item' href='#aboutus'>О нас</a>
                    <a className='nav_item' href='#map'>Местонахождение</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
import '../style/nav.css';

function Nav() {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav_container'>
                    {/* <a className='nav_item'>Главная</a> */}
                    <a className='nav_item' href='#models' onClick={(e) => NavActive(e)}>Модели</a>
                    <a className='nav_item' href="#" onClick={(e) => NavActive(e)}>Услуги</a>
                    <a className='nav_item' href='#aboutus' onClick={(e) => NavActive(e)}>О нас</a>
                    <a className='nav_item' href='#map' onClick={(e) => NavActive(e)}>Местонахождение</a>
                </div>
            </div>
        </nav>
    );
}

function NavActive(e) {
    const nav_item = document.getElementsByClassName("nav_item");

    for (let i = 0; i < nav_item.length; i++) {
        nav_item[i].classList.remove("nav_item_active");
    }

    e.target.classList.add("nav_item_active");
}

export default Nav;

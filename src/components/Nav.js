import '../style/nav.css';
// import logo from '../image/img/logoipsum.svg'

function Nav() {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav_container'>
                    {/* <a className='logo_link' href='#main'><img src={logo} alt='logo' className='logo' /></a> */}
                    <a className='nav_item' href='#models' onClick={(e) => NavActive(e)}>Модели</a>
                    <a className='nav_item' href="#advantages" onClick={(e) => NavActive(e)}>Преимущества</a>
                    <a className='nav_item' href='#aboutus' onClick={(e) => NavActive(e)}>О нас</a>
                    <a className='nav_item' href='#form' onClick={(e) => NavActive(e)}>Обратная связь</a>
                    <a className='nav_item' href='#map' onClick={(e) => NavActive(e)}>Местонахождение</a>

                    <button class="nav__toggle-menu" onClick={() => BurgerClick()}>
                        <span></span>
                    </button>
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

function BurgerClick() {
    const menu = document.querySelector('#menu')
    const navToggleMenu = document.querySelector('.nav__toggle-menu')

    if (menu.classList.contains('open')) {
        menu.classList.remove('open') 
        navToggleMenu.classList.remove('active')
    }
    else {
        menu.classList.add('open')
        navToggleMenu.classList.add('active')
    }
}

export default Nav;

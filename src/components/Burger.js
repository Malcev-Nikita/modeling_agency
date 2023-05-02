import '../style/burger.css';


function Burger() {
    return (
        <div id="menu" class="">
            <nav class="main-nav">
                <ul>
                    <li><a href="#models" onClick={() => ItemClick()}>Модели</a></li>
                    <li><a href="#advantages" onClick={() => ItemClick()}>Преимущества</a></li>
                    <li><a href="#aboutus" onClick={() => ItemClick()}>О нас</a></li>
                    <li><a href="#form" onClick={() => ItemClick()}>Обратная связь</a></li>
                    <li><a href="#map" onClick={() => ItemClick()}>Местонахождение</a></li>
                </ul>
            </nav>
        </div>
    );
}

function ItemClick() {
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

export default Burger;

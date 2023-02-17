import '../style/upperbutton.css';
import up_arrow from '../image/icon/up-arrow.png';

function UpperButton() {
    return (
        <section className='upperbutton_section upperbutton_section_nodisplay'>
            <a href='#main' className='upperbutton_link'> 
                <img className='upperbutton_img' src={up_arrow} alt='Наверх'/> 
            </a>
        </section>
    );
}

export default UpperButton;
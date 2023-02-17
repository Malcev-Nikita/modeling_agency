import '../style/advantages.css';
import stars from '../image/icon/stars.png'
import people from '../image/icon/people.png'
import setting from '../image/icon/setting.png'

function Advantages() {
    return (
        <section className='advantages' id="advantages">
            <div className='container'>
                <h3 className='advantages_header'>Наши преимущества</h3>

                <div className='advantages_container'>
                    <div className='advatages_item'>
                        <div className='advantages_circle'><img src={stars} alt='иконка' /></div>

                        <div className='advantages_content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet velit sit amet elit interdum, eu malesuada odio semper. Vivamus vel porta odio. Nunc dignissim at augue non tristique. Nulla facilisi. Nam sit amet nisi arcu. Vestibulum a auctor orci, eget luctus ante. Morbi justo mauris, elementum consequat posuere ut, sollicitudin lobortis elit.</p>
                        </div>
                    </div>

                    <div className='advatages_item'>
                        <div className='advantages_circle'><img src={people} alt='иконка' /></div>

                        <div className='advantages_content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet velit sit amet elit interdum, eu malesuada odio semper. Vivamus vel porta odio. Nunc dignissim at augue non tristique. Nulla facilisi. Nam sit amet nisi arcu. Vestibulum a auctor orci, eget luctus ante. Morbi justo mauris, elementum consequat posuere ut, sollicitudin lobortis elit.</p>
                        </div>
                    </div>

                    <div className='advatages_item'>
                        <div className='advantages_circle'><img src={setting} alt='иконка' /></div>

                        <div className='advantages_content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet velit sit amet elit interdum, eu malesuada odio semper. Vivamus vel porta odio. Nunc dignissim at augue non tristique. Nulla facilisi. Nam sit amet nisi arcu. Vestibulum a auctor orci, eget luctus ante. Morbi justo mauris, elementum consequat posuere ut, sollicitudin lobortis elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;
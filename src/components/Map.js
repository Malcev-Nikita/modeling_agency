import '../style/map.css';

function Map() {
    return (
        <header className='map'>
            <div className='container'>
                <div className='map_container'>
                    <h3 className='map_head'>Как нас найти</h3>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A61ac48ad6449c9c9c4b5759d44cee83e7f3d77f6d6fd8f4d255e63598b9c7454&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
                </div>
            </div>
        </header>
    );
}

export default Map;
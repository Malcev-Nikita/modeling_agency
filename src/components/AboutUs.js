import '../style/aboutus.css';

function AboutUs() {
    return (
        <header className='aboutus'>
            <div className='container'>
                <div className='aboutus_container'>
                    <h3 className='aboutus_head'>О нас</h3>
                    <p className='aboutus_text'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                </div>
            </div>
        </header>
    );
}

export default AboutUs;
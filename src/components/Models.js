import '../style/models.css';
import * as fs from 'node:fs/promises';

function Models() {
    return (
        <section className='models'>
            <div className='container'>
                <div className='models_container'>
                    
                </div>

                <button className='models_button'>Смотреть всех</button>
            </div>
        </section>
    );
}

function ModelsItem() {
    const json = fs.readFileSync('../content.json');
    const parse = JSON.parse(json);

    console.log(parse);
}

export default Models;
import React from 'react';
import '../style/models.css';

class Models extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMore: false
        };

        this.show = this.show.bind(this);
    }

    show() {
        if (!this.state.showMore) document.getElementsByClassName('models_button')[0].classList.add('models_button_noDisplay')

        this.setState({
            showMore: !this.state.secure,
        });
    }

    render () {
        const data = ModelsItem();
        const model = data.map((model) => {
            if (!this.state.showMore && model.id <= 4) {
                return (
                    <div className={`model_container`} >
                        <img src={model.photo} alt={model.name} className={`model_img model_img_${model.id}`} onMouseOver={() => MouseOver(model.id)} onMouseLeave={() => MouseDown(model.id)} />

                        <div className={`model_content model_${model.id} DisplayNone`} onMouseOver={() => MouseOver(model.id)} onMouseLeave={() => MouseDown(model.id)}>
                            <h4 className='model_name'>{model.name}</h4>
                            <p className='model_descr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum consectetur dui, et condimentum nulla luctus ac.</p>
                            <button className='model_button' onClick={() => window.location.href = '#form'}><span>Выбрать модель</span></button>
                        </div>
                    </div>
                )
            }
            
            else if (!this.state.showMore) return

            else {
                return (
                    <div className={`model_container`} >
                        <img src={model.photo} alt={model.name} className={`model_img model_img_${model.id}`} onMouseOver={() => MouseOver(model.id)} onMouseLeave={() => MouseDown(model.id)} />

                        <div className={`model_content model_${model.id} DisplayNone`} onMouseOver={() => MouseOver(model.id)} onMouseLeave={() => MouseDown(model.id)}>
                            <h4 className='model_name'>{model.name}</h4>
                            <p className='model_descr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum consectetur dui, et condimentum nulla luctus ac.</p>
                            <button className='model_button' onClick={() => window.location.href = '#form'}><span>Выбрать модель</span></button>
                        </div>
                    </div>
                )
            }
        }
        );

        return (
            <section className='models' id="models">
                <div className='container'>
                    <h3 className='models_header'>НЕКОТОРЫЕ МОДЕЛИ НАШЕГО АГЕНСТВА</h3>

                    <div className='models_container'>
                        {model}
                    </div>

                    <button className='models_button' onClick={() => this.show()}><span>Смотреть всех</span></button>
                </div>
            </section>
        );
    }
}

function MouseOver(modelId) {
    const model = document.getElementsByClassName(`model_${modelId}`)[0]
    const model_img = document.getElementsByClassName(`model_img_${modelId}`)[0]

    model.classList.remove('DisplayNone')
    model_img.classList.add('NoFilter')
}

function MouseDown(modelId) {
    const model = document.getElementsByClassName(`model_${modelId}`)[0]
    const model_img = document.getElementsByClassName(`model_img_${modelId}`)[0]

    model.classList.add('DisplayNone')
    model_img.classList.remove('NoFilter')
}

function ModelsItem() {
    const data = [
        {id: 1, name: "Ева", photo: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-of-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=740&t=st=1676473127~exp=1676473727~hmac=353cad6b1f6862528f5330cd3226c8d41ec66fc6ab9981e6d617dafab8d15112"},
        {id: 2, name: "Полина", photo: "https://img.freepik.com/free-photo/portrait-of-female-fashion-model-in-neon-light-on-dark-studio_155003-19977.jpg?w=740&t=st=1676473138~exp=1676473738~hmac=e04b0abe57fed3b1e51fce48902bebe2df2cd7d2159de248e739634ea82646d6"},
        {id: 3, name: "Милана", photo: "https://img.freepik.com/free-photo/fashion-portrait-of-young-elegant-woman_1328-2687.jpg?w=740&t=st=1676473144~exp=1676473744~hmac=8099af88db99abf48442b1e5d5825ba13fe32db41c328b5c210a89116982c3b7"},
        {id: 4, name: "Александра", photo: "https://img.freepik.com/free-photo/elegant-female-model-posing-in-stairs-in-a-jacket-suit-new-feminity-concept_23-2148951023.jpg?w=826&t=st=1676473150~exp=1676473750~hmac=4f3ef73eb4975e1131c417978fb487d6e3775cf61b06020f71ec4641573ca38c"},
        {id: 5, name: "Алиса", photo: "https://img.freepik.com/free-photo/cute-young-girl-with-medium-wavy-hairstyle-modern-makeup-green-silk-dress-black-jacket-and-stylish-accessories-posing-on-daylight-street-and-looking-at-front_197531-24458.jpg?w=740&t=st=1676473157~exp=1676473757~hmac=c175baa5a022a871e2d7d97b5606d0afb7c4d5d4ab55b487ea84e4abff570e28"},
        {id: 6, name: "Ксения", photo: "https://img.freepik.com/free-photo/side-view-smiley-woman-posing-in-desert_23-2149408646.jpg?w=740&t=st=1676473167~exp=1676473767~hmac=21c70f53182a71abeb37711ccd7e1e3cc20f3cc85a1cd748d16dc38268172ebe"},
        {id: 7, name: "Вероника", photo: "https://img.freepik.com/free-photo/front-view-model-posing-as-greek-goddess_23-2150099237.jpg?w=740&t=st=1676473199~exp=1676473799~hmac=7ddebe470da0f35ef8bed4243fbe78f59638e3db0861e0d40161944e296ad1dc"},
        {id: 8, name: "Кристина", photo: "https://img.freepik.com/free-photo/young-woman-wearing-orange-dress-with-turban-and-ethnic-jewelry_273443-4407.jpg?w=740&t=st=1676473209~exp=1676473809~hmac=e201793a0f1c107018a9d6344e926979c263201b6dfdb729dd82c79e22f30d92"},
        {id: 9, name: "Ева", photo: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-of-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=740&t=st=1676473127~exp=1676473727~hmac=353cad6b1f6862528f5330cd3226c8d41ec66fc6ab9981e6d617dafab8d15112"},
        {id: 10, name: "Полина", photo: "https://img.freepik.com/free-photo/portrait-of-female-fashion-model-in-neon-light-on-dark-studio_155003-19977.jpg?w=740&t=st=1676473138~exp=1676473738~hmac=e04b0abe57fed3b1e51fce48902bebe2df2cd7d2159de248e739634ea82646d6"},
        {id: 11, name: "Милана", photo: "https://img.freepik.com/free-photo/fashion-portrait-of-young-elegant-woman_1328-2687.jpg?w=740&t=st=1676473144~exp=1676473744~hmac=8099af88db99abf48442b1e5d5825ba13fe32db41c328b5c210a89116982c3b7"},
        {id: 12, name: "Александра", photo: "https://img.freepik.com/free-photo/elegant-female-model-posing-in-stairs-in-a-jacket-suit-new-feminity-concept_23-2148951023.jpg?w=826&t=st=1676473150~exp=1676473750~hmac=4f3ef73eb4975e1131c417978fb487d6e3775cf61b06020f71ec4641573ca38c"},
        {id: 13, name: "Алиса", photo: "https://img.freepik.com/free-photo/cute-young-girl-with-medium-wavy-hairstyle-modern-makeup-green-silk-dress-black-jacket-and-stylish-accessories-posing-on-daylight-street-and-looking-at-front_197531-24458.jpg?w=740&t=st=1676473157~exp=1676473757~hmac=c175baa5a022a871e2d7d97b5606d0afb7c4d5d4ab55b487ea84e4abff570e28"},
        {id: 14, name: "Ксения", photo: "https://img.freepik.com/free-photo/side-view-smiley-woman-posing-in-desert_23-2149408646.jpg?w=740&t=st=1676473167~exp=1676473767~hmac=21c70f53182a71abeb37711ccd7e1e3cc20f3cc85a1cd748d16dc38268172ebe"},
        {id: 15, name: "Вероника", photo: "https://img.freepik.com/free-photo/front-view-model-posing-as-greek-goddess_23-2150099237.jpg?w=740&t=st=1676473199~exp=1676473799~hmac=7ddebe470da0f35ef8bed4243fbe78f59638e3db0861e0d40161944e296ad1dc"},
        {id: 16, name: "Кристина", photo: "https://img.freepik.com/free-photo/young-woman-wearing-orange-dress-with-turban-and-ethnic-jewelry_273443-4407.jpg?w=740&t=st=1676473209~exp=1676473809~hmac=e201793a0f1c107018a9d6344e926979c263201b6dfdb729dd82c79e22f30d92"}
    ];

    return data;
}

export default Models;
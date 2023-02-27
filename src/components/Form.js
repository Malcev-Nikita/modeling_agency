import React from 'react';
import '../style/form.css';

class Form extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            inputName: document.getElementsByClassName("form_input")[0],
            inputEmail: document.getElementsByClassName("form_input")[1],
            name: "",
            email: ""
        }

        this.NameRegEx = this.NameRegEx.bind(this);
    }

    NameRegEx () {
        // const name = e.match(/А-ЯЁа-яё/)

        // if ( this.inputName)
    }

    EmailRegEx () {

    }

    render () {
        return (
            <section className='form' id="form">
                <div className='container'>
                    <h3 className='form_header'>Обратная связь</h3>
    
                    <div className='form_container'>
                        <input className='form_input' type="text" placeholder='Ваше Имя' onChange={() => this.NameRegEx()}></input>
                        <input className='form_input' type="email" placeholder='Ваш e-mail'></input>
                        <textarea className='form_textarea' placeholder='Ваше сообщение'></textarea>
                        <button className='form_button'><span>Отправить</span></button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;
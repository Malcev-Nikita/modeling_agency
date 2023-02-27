import React from 'react';
import '../style/form.css';

class Form extends React.Component {
    constructor (props) {
        super(props);

        this.NameRegEx = this.NameRegEx.bind(this);
    }

    NameRegEx () {
        const inputName = document.getElementsByClassName("form_input")[0]
        const inputNameValue = document.getElementsByClassName("form_input")[0].value
        const name = /^[А-ЯЁ]+[а-яё]{2,10}$/

        if (inputNameValue.match(name)) {
            inputName.classList.add("valid")
            inputName.classList.remove("no_valid")
        }
        else {
            inputName.classList.remove("valid")
            inputName.classList.add("no_valid")
        }
    }

    EmailRegEx () {
        const inputEmail = document.getElementsByClassName("form_input")[1]
        const inputEmailValue = document.getElementsByClassName("form_input")[1].value
        const email = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm

        if (inputEmailValue.match(email)) {
            inputEmail.classList.add("valid")
            inputEmail.classList.remove("no_valid")
        }
        else {
            inputEmail.classList.remove("valid")
            inputEmail.classList.add("no_valid")
        }
    }

    render () {
        return (
            <section className='form' id="form">
                <div className='container'>
                    <h3 className='form_header'>Обратная связь</h3>
    
                    <div className='form_container'>
                        <input className='form_input' type="text" placeholder='Ваше Имя' onChange={() => this.NameRegEx()}></input>
                        <input className='form_input' type="email" placeholder='Ваш e-mail' onChange={() => this.EmailRegEx()}></input>
                        <textarea className='form_textarea' placeholder='Ваше сообщение'></textarea>
                        <button className='form_button'><span>Отправить</span></button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;
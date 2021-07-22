class Validator {
    constructor(form) {
        this.patterns = {
            name: /^[a-z]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
        };
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон имеет вид +7(000)000-0000',
            email: 'E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        this.errClass = 'err-message';
        this.form = form;
        this.valid = false;
        this._validateForm();
    }
    _validateForm() {
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errClass}`)];
        for (let error of errors) {
            error.remove();
        }
        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        for (let field of formFields) {
            this._validate(field);
        }
        if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) {
            this.valid = true;
        }
    }
    _validate(field) {
        if (this.patterns[field.name]) {
            if (!this.patterns[field.name].test(field.value)) {
                field.classList.add('invalid');
                this._addErrMsg(field);
                this._watchField(field);
            }
        }
    }
    _addErrMsg(field) {
        let error = `<div class="${this.errClass}">${this.errors[field.name]}</div> `;
        field.parentNode.insertAdjacentHTML('beforeend', error);
    }
    _watchField(field) {
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.${this.errClass}`);
            if (this.patterns[field.name].test(field.value)) {
                field.classList.remove('invalid');
                field.classList.add('valid');
                if (error) {
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if (!error) {
                    this._addErrMsg(field);
                }
            }
        });
    }
}

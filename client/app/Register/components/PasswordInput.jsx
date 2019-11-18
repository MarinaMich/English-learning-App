import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopUpMessageArrowLeft from '~/components/PopUpMassageArrorLeft/PopUpMessageArrowLeft.jsx';
import passwordEyeOpen from '~/assets/img/passwordEyeOpen.svg';
import passwordEyeClose from '~/assets/img/passwordEyeClose.svg';

import { passwordOnChange, passwordOnBlur, clearPasswordErrorMassage } from '~/Register/actions';

class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordInputType: 'password',
        };
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    /**
     * обрабатывает ввод в поле PASSWORD и отправляет данные в глобальное хранилище при потере "фокуса" с поля
     * @param {Object} event - объект с данными события формы
     */
    onBlurHandler(event) {
        if (event.target.value !== '') {
            this.props.dispatch(passwordOnBlur(event.target.value));
        }
    }

    /**
     * Функция обрабатывает фокус поля PASSWORD и отправляет запрос на очистку ошибки валидации при фокусе на данном поле
     */
    onFocusHandler() {
        this.props.dispatch(clearPasswordErrorMassage());
    }

    /**
     * обрабатывает ввод в поле PASSWORD и отправляет данные в глобальное хранилище при заполнении поля
     * @param {Object} event - объект с данными события формы
     */
    onChangeHandler(event) {
        this.props.dispatch(passwordOnChange( event.target.value));
    }

    render() {
        return (
            <>
                <label htmlFor="PasswordForm">ПАРОЛЬ</label>
                <div className="reg-form__input-cover">
                    <input
                        type={this.state.passwordInputType}
                        id="PasswordForm"
                        className="form-control mb-3 reg-form__input-custom"
                        name="password"
                        value={this.props.value}
                        onChange={this.onChangeHandler}
                        onBlur={this.onBlurHandler}
                        onFocus={this.onFocusHandler}
                        maxLength="50"
                        required
                    />
                    <div
                        className='reg-form__show-password'
                        onClick={() => this.setState(
                            {passwordInputType: this.state.passwordInputType === 'password' ? 'text' : 'password'}
                        )}>
                        <img className="reg-form__input-eye"
                            src={this.state.passwordInputType === 'password' ? passwordEyeClose : passwordEyeOpen}
                            alt="откр/закр глаз"/>
                    </div>
                    {this.props.error
                    && <PopUpMessageArrowLeft message={this.props.error}/>}
                </div>
            </>
        );
    }
}

export default connect()(PasswordInput);
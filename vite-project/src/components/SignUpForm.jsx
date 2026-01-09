import z from 'zod';
import signUpSchema from '../schemas/signUpSchema';
import './SignUpForm.sass';
import { useState } from 'react';

export default function SignUpForm() {

const [errors, setErrors] = useState({});

    const submitHandler = event => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());

        const result = signUpSchema.safeParse(formDataObject);

        if (result.success) {
            alert('Du er nu oprettet som bruger!');

    } else{
        const readableErrors = z.treeifyError(result.error);
        console.log(readableErrors);
        setErrors(readableErrors.properties);

  }
}



    return (
        
        <form onSubmit={submitHandler} className="sign-up-form">
            <fieldset className="sign-up-form__fieldset">
                <legend className="sign-up-form__legend">Personlige opyninger</legend>
                <label className="sign-up-form__label">
                    <span className="sign-up-form__text">Fornavn</span>
                    <input type="text" name="firstName" className="sign-up-form__input" autoComplete="given-name" />
                    <ul className="sign-up-form__error-list">
                        {errors.firstName?.errors.map((message, index) => <li key={index}>{message}</li>)}
                    </ul>
                </label>
                
                <label className="sign-up-form__label">
                    <span className="sign-up-form__text">Efternavn</span>
                    <input type="text" name="lastName" className="sign-up-form__input" autoComplete="family-name"/>
                    <ul className="sign-up-form__error-list">
                        {errors.lastName?.errors.map((message, index) => <li key={index}>{message}</li>)}
                    </ul>
                </label>
                
                <label className="sign-up-form__label">
                    <span className="sign-up-form__text">Email</span>
                    <input type="email" name="email" className="sign-up-form__input" autoComplete="email"/>
                    <ul className="sign-up-form__error-list">
                        {errors.email?.errors.map((message, index) => <li key={index}>{message}</li>)}
                    </ul>
                </label>
                
                <label className="sign-up-form__label">
                    <span className="sign-up-form__text"> Password</span>
                    <input type="password" name="password" className="sign-up-form__input" autoComplete="new-password"/>
                    <ul className="sign-up-form__error-list">
                        {errors.password?.errors.map((message, index) => <li key={index}>{message}</li>)}
                    </ul>
                </label>
                
                <label className="sign-up-form__label">
                    <span className="sign-up-form__text">Gentag password</span>
                    <input type="password" name="confirmPassword"    className="sign-up-form__input" autoComplete="repeat-password"/>
                    <ul className="sign-up-form__error-list">
                        {errors.confirmPassword?.errors.map((message, index) => <li key={index}>{message}</li>)}
                    </ul>
                </label>
                
                <label className="sign-up-form__label">
                    <span className="sign-up-form__text">Fødselsdato</span>
                    <input type="date" name="birthDate" className="sign-up-form__input" autoComplete="bday"/>
                    <ul className="sign-up-form__error-list">
                        {errors.birthDate?.errors.map((message, index) => <li key={index}>{message}</li>)}
                    </ul>
                </label>
                
                <label className="sign-up-form__label">
                    <span className="sign-up-form__text">Telefonnummer</span>
                    <input type="tel" name="phone" className="sign-up-form__input" placeholder='+45' autoComplete="tel"/>
                    <ul className="sign-up-form__error-list">
                        {errors.phone?.errors.map((message, index) => <li key={index}>{message}</li>)}
                    </ul>
                </label>
            </fieldset>
            <button className="sign-up-form__button">Opret bruger</button>
        </form>
    )
}
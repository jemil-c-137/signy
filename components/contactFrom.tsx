import React, { useState } from 'react';
import Button from '@/components/button';

const EMAIL_REGEX = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, 'gm');
const PHONE_REGEX = new RegExp(/^[0-9]*$/);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [isFormTouched, setIsFormTouched] = useState(false);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const onNameChange = (value: string) => {
    setName(value);
    if (value !== '') {
      setIsNameValid(true);
    }
  };

  const onEmailChange = (value: string) => {
    setEmail(value);
    if (value !== '' && EMAIL_REGEX.test(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const onPhoneChange = (value: string) => {
    setPhone(value);
    if (value !== '' && PHONE_REGEX.test(value) && value.length > 5) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };

  const validateForm = () => {
    if (!isFormTouched) {
      setIsFormTouched(true);
    }

    if (name === '') {
      setIsNameValid(false);
    }

    if (email === '') {
      setIsEmailValid(false);
    }

    if (phone === '') {
      setIsPhoneValid(false);
    }
  };

  const getValidationClasses = (isValid: boolean): string => {
    if (isFormTouched) {
      return isValid ? 'border-green' : 'border-red-600';
    } else {
      return 'border-success';
    }
  };

  return (
    <form className="max-w-md w-full" onBlur={validateForm}>
      <div className="flex flex-col relative">
        <label className="ml-3 mb-4" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          className={`w-full border rounded-xl outline-success focus:border-2 p-2 mb-6 md:mb-0 ${getValidationClasses(
            isNameValid,
          )} `}
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          onBlur={validateForm}
        />
        {isFormTouched && (
          <span
            className={`absolute right-6 w-4 h-4 ${
              isNameValid ? 'bg-green' : 'bg-red-600'
            } flex justify-center items-center text-white rounded-full font-bold top-[50%]`}>
            {isNameValid ? '✓' : '!'}
          </span>
        )}
      </div>

      <div className="flex flex-col relative">
        <label className="ml-3 mb-4" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          className={`w-full border ${getValidationClasses(
            isEmailValid,
          )} rounded-xl outline-success focus:border-2 p-2 mb-6 md:mb-0`}
          type="email"
          onChange={(e) => onEmailChange(e.target.value)}
          onBlur={validateForm}
        />
        {isFormTouched && (
          <span
            className={`absolute right-6 w-4 h-4 ${
              isEmailValid ? 'bg-green' : 'bg-red-600'
            } flex justify-center items-center text-white rounded-full font-bold top-[50%]`}>
            {isEmailValid ? '✓' : '!'}
          </span>
        )}
      </div>

      <div className="flex flex-col relative">
        <label className="ml-3 mb-4" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          className={`w-full border ${getValidationClasses(
            isPhoneValid,
          )} rounded-xl outline-success focus:border-2 p-2 mb-6 md:mb-0`}
          type="tel"
          onChange={(e) => onPhoneChange(e.target.value)}
          onBlur={validateForm}
        />
        {isFormTouched && (
          <span
            className={`absolute right-6 w-4 h-4 ${
              isPhoneValid ? 'bg-green' : 'bg-red-600'
            } flex justify-center items-center text-white rounded-full font-bold top-[50%]`}>
            {isPhoneValid ? '✓' : '!'}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label className="ml-3 mb-4" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full border border-black rounded-xl focus:outline-grey p-2 mb-6"
          name="message"
          id="message"
          cols={20}
          rows={10}></textarea>
      </div>

      <Button classes="mr-auto" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;

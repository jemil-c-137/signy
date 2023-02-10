import Button from '@/components/button';
import Layout from '@/components/layout';
import { useState } from 'react';
import map from '../assets/img/map.png';
import Image from 'next/image';

const EMAIL_REGEX = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, 'gm');
const PHONE_REGEX = new RegExp(/^[0-9]*$/);

export default function Contacts() {
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
    <Layout>
      <main className="section pt-24 pb-24">
        <h1 className="headline-1 mb-4 md:mb-8">Our contacts</h1>
        <div className="flex flex-col lg:flex-row mb-8">
          <div className="w-full lg:w-1/2 mr-32 mb-12">
            <p className="paragraph mb-4">
              We are always happy to answer your questions and develop effective cooperation on all issues related to
              electronic document management.
            </p>
            <div>
              <div className="flex mb-4">
                <span className="mr-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.7563 3.39531L16.2602 0.901563C16.0841 0.724712 15.8748 0.584392 15.6443 0.488665C15.4139 0.392938 15.1667 0.34369 14.9172 0.34375C14.4086 0.34375 13.9305 0.542969 13.5719 0.901563L10.8859 3.5875C10.7091 3.76358 10.5688 3.97286 10.473 4.20333C10.3773 4.4338 10.3281 4.68091 10.3281 4.93047C10.3281 5.43906 10.5273 5.91719 10.8859 6.27578L12.85 8.23984C12.3903 9.25319 11.7511 10.175 10.9633 10.9609C10.1775 11.7506 9.25569 12.3922 8.24219 12.8547L6.27813 10.8906C6.10205 10.7138 5.89277 10.5735 5.6623 10.4777C5.43183 10.382 5.18472 10.3328 4.93516 10.3328C4.42656 10.3328 3.94844 10.532 3.58985 10.8906L0.901564 13.5742C0.724496 13.7506 0.584056 13.9603 0.488324 14.1912C0.392593 14.4221 0.34346 14.6696 0.343751 14.9195C0.343751 15.4281 0.54297 15.9062 0.901564 16.2648L3.39297 18.7562C3.96485 19.3305 4.75469 19.6562 5.56563 19.6562C5.73672 19.6562 5.90078 19.6422 6.0625 19.6141C9.22188 19.0938 12.3555 17.4133 14.8844 14.8867C17.4109 12.3625 19.0891 9.23125 19.6164 6.0625C19.7758 5.09453 19.4547 4.09844 18.7563 3.39531Z"
                      fill="#1064E5"
                    />
                  </svg>
                </span>

                <div>
                  <div>0 800 888</div>
                  <div>+3 012 3456789</div>
                  <div>+9 876 5432101</div>
                </div>
              </div>
              <div className="mb-4">
                <span className="mr-6">
                  <svg
                    className="inline"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L13.06 12.34C12.41 12.75 11.59 12.75 10.94 12.34L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
                      fill="#1064E5"
                    />
                  </svg>
                </span>
                <span>infobiz@biz.com</span>
              </div>
              <div className="mb-4">
                <span className="mr-6">
                  <svg
                    className="inline"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 1C7.57714 1 4 4.57714 4 9C4 15 12 23.8571 12 23.8571C12 23.8571 20 15 20 9C20 4.57714 16.4229 1 12 1ZM12 11.8571C11.2422 11.8571 10.5155 11.5561 9.9797 11.0203C9.44388 10.4845 9.14286 9.75776 9.14286 9C9.14286 8.24224 9.44388 7.51551 9.9797 6.9797C10.5155 6.44388 11.2422 6.14286 12 6.14286C12.7578 6.14286 13.4845 6.44388 14.0203 6.9797C14.5561 7.51551 14.8571 8.24224 14.8571 9C14.8571 9.75776 14.5561 10.4845 14.0203 11.0203C13.4845 11.5561 12.7578 11.8571 12 11.8571Z"
                      fill="#1064E5"
                    />
                  </svg>
                </span>
                <span>Area 51, Nevada, USA</span>
              </div>
            </div>
          </div>
          <div>
            <Image width={'600'} height={100} src={map} alt="" />
          </div>
        </div>
        <div>
          <h2 className="headline-1 mb-8">...or write us:</h2>
          <form className="max-w-md" onBlur={validateForm}>
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
        </div>
      </main>
    </Layout>
  );
}

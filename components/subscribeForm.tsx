import React, { useState } from 'react';
import Button from './button';

const SubscribeForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const buttonSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h3 className="headline-1 text-center">{submitted ? 'Great' : 'Subscribe to our news!'}</h3>
      <p className="paragraph text-center mb-8">
        {submitted
          ? `The most important news will now be sent to ${email}`
          : 'Enter your email address and stay up to date with all updates'}
      </p>
      {!submitted && (
        <form onSubmit={buttonSubmit} className="grid md:grid-cols-2 items-center justify-center max-w-[600px] mx-auto">
          <input
            value={email}
            onChange={handleChange}
            className="w-full border border-success rounded-xl  focus:outline-cyan p-2 mb-6 md:mb-0"
            type="email"
          />
          <Button small type="submit">Subscribe</Button>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;

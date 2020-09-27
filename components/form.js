import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = () => {
    fetch('/api/sendmail', { method: 'POST', body: JSON.stringify({ name, email, message }) });
  };
  return (
    <form className="flex flex-col pt-2" onSubmit={handleSubmit}>
      <div className="py-2">
        <label htmlFor="name" className="block leading-5  text-gray-700 pb-1">
          Name
        </label>
        <input
          id="name"
          className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="py-2">
        <label htmlFor="email" className="block leading-5 text-gray-700 pb-1">
          Email
        </label>
        <input
          id="email"
          className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="py-2">
        <label htmlFor="message" className="block leading-5 text-gray-700 pb-1">
          Message
        </label>
        <textarea
          id="message"
          className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
          placeholder="Your message 🙂"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        className="bg-teal-500 hover:bg-teal-700 text-red-100 rounded py-2 mt-4"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
export default Form;

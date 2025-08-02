import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, email, message };

    try {
      const res = await fetch('https://traveller-backend-6ore.onrender.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        alert('Email sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send email');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending email');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="border p-2 rounded"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        className="border p-2 rounded h-32 "
        required
      />
      <button type="submit" className="bg-red-600 text-white py-3 font-semibold rounded">
        Send Message
      </button>
    </form>
  );
};

export default Form;

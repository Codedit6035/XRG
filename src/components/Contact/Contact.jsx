import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatusMessage('All fields are required.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatusMessage('Please provide a valid email address.');
      return;
    }

    setIsSending(true);
    setStatusMessage('');

    const serviceID = 'service_gwp7p2f';
    const templateID = 'template_84dtvgj';
    const publicKey = 'kJ7ht3yXraW5PmUDW';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        setIsSending(false);
        setStatusMessage('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      })
      .catch((err) => {
        setIsSending(false);
        setStatusMessage('Failed to send the message. Please try again.');
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <div className='  '>

        <div className='container flex flex-col gap-5  md:flex-row pb-20  pt-10 ' >
            {/* Get In Touch text  bg-slate-950 */}
            <div className=' flex-1   '>
                <h1 className="font-bold text-4xl md:w-3/4">Get In <span className='text-shade7 text-5xl'>Touch</span></h1>
                <p className="py-5 md:w-3/4 border-b">
  We would love to hear from you. Whether you have a question, need more information, or want to explore how we can collaborate, we’re here to assist. <br /><br />
  You can reach out to us directly via email at{" "}
  <a
    href="mailto:contact@xrg-advisory.com"
    className="text-shade7 font-bold hover:underline"
  >
    contact@xrg-advisory.com
  </a>
  , or fill out the form on this page. We’ll get back to you as soon as possible. <br /><br />
  We look forward to connecting with you!
</p>
            </div>
      {/* Form Section */}
      <div className="flex-1">
        <h1 className="font-bold text-4xl pb-10">Complete the form below</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-10 pb-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="firstName" className="text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="h-[35px] bg-neutral-300/30"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="lastName" className="text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="h-[35px] bg-neutral-300/30"
              />
            </div>
          </div>
          <div className="flex flex-col pb-5">
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-[35px] bg-neutral-300/30"
            />
          </div>
          <div className="flex flex-col pb-5">
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-[80px] bg-neutral-300/30"
            />
          </div>
          
          <button
            disabled={isSending}
            className={`h-[35px] bg-shade7 hover:bg-primary font-bold text-xl text-white w-full ${
              isSending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSending ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {statusMessage && <p className="mt-5 text-center">{statusMessage}</p>}
            </div>

        </div>
    </div>
  )
}

export default Contact
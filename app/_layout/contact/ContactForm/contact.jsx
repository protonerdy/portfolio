'use client';
import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    // GpDbKtf8SdA0RceiP
    // template_hfid8bo
    // service_usmuk9s

    emailjs
      .send(
        'service_usmuk9s',
        'template_hfid8bo',
        {
          from_name: form.name,
          to_name: 'Bharat Siddharth',
          from_email: form.email,
          to_email: 'bharatsiddharathsingh@gmail.com',
          message: form.message,
        },
        'GpDbKtf8SdA0RceiP',
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you, I will get back to you as sonn as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        error => {
          setLoading(false);
          console.log(error);
          alert('Failed to send email. Please try again later.');
        },
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='flex w-full flex-col-reverse md:flex-row'
      action=''
    >
      <div className='w-full py-20 md:w-2/3'>
        <div className='flex items-start space-x-4 border-t border-gray-600 py-10'>
          <p className='text-xl text-gray-500 md:mr-10 md:text-2xl'>01</p>
          <div className='w-full'>
            <label
              className='mb-2 block text-2xl font-semibold text-white md:text-4xl'
              htmlFor='organization'
            >
              What&apos;s the name?
            </label>
            <input
              name='name'
              type='text'
              value={form.name}
              onChange={handleChange}
              id='organization'
              placeholder='ProtonicGod'
              className='w-full rounded-md bg-[#1C1E21] px-4  py-3  text-2xl text-white focus:outline-none focus:ring-blue-500 md:text-4xl'
            />
          </div>
        </div>

        {/* Repeated sections here */}
        {/* Make sure the IDs of inputs are unique or modify them as needed */}

        <div className='flex items-start space-x-4 border-t border-gray-600 py-10'>
          <p className='text-xl text-gray-500 md:mr-10 md:text-2xl'>02</p>
          <div className='w-full'>
            <label
              className='mb-2 block text-2xl font-semibold text-white md:text-4xl'
              htmlFor='organization'
            >
              What&apos;s your email?
            </label>
            <input
              value={form.email}
              onChange={handleChange}
              name='email'
              type='text'
              id='organization'
              placeholder='hi@protonicgod.me'
              className='w-full rounded-md bg-[#1C1E21] px-4  py-3  text-2xl text-white focus:outline-none focus:ring-blue-500 md:text-4xl'
            />
          </div>
        </div>

        {/* <div className='flex items-start space-x-4 border-t border-gray-600 py-10'>
        <p className='text-xl text-gray-500 md:mr-10 md:text-2xl'>03</p>
        <div className='w-full'>
          <label
            className='mb-2 block text-2xl font-semibold text-white md:text-4xl'
            htmlFor='organization'
          >
            What&apos;s the name of your organization??
          </label>
          <input
            type='text'
            id='organization'
            placeholder='ProtonicGod'
            className='w-full rounded-md bg-[#1C1E21] px-4  py-3  text-2xl text-white focus:outline-none focus:ring-blue-500 md:text-4xl'
          />
        </div>
      </div> */}

        {/* <div className='flex items-start space-x-4 border-t border-gray-600 py-10'>
        <p className='text-xl text-gray-500 md:mr-10 md:text-2xl'>04</p>
        <div className='w-full'>
          <label
            className='mb-2 block text-2xl font-semibold text-white md:text-4xl'
            htmlFor='organization'
          >
            What services are you looking for?
          </label>
          <input
            type='text'
            id='organization'
            placeholder='Community Manager'
            className='w-full rounded-md bg-[#1C1E21] px-4  py-3  text-2xl text-white focus:outline-none focus:ring-blue-500 md:text-4xl'
          />
        </div>
      </div> */}

        <div className='flex items-start space-x-4 border-t border-gray-600 py-10'>
          <p className='text-xl text-gray-500 md:mr-10 md:text-2xl'>03</p>
          <div className='w-full'>
            <label
              className='mb-2 block text-2xl font-semibold text-white md:text-4xl'
              htmlFor='organization'
            >
              Your message
            </label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              type='text'
              id='organization'
              placeholder='Hello Kushagara, can you help me with ... *'
              className='w-full rounded-md bg-[#1C1E21] px-4  py-3  text-2xl text-white focus:outline-none focus:ring-blue-500 md:text-4xl'
            />
          </div>
        </div>

        <button
          type='submit'
          className='bg-tertiary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none'
        >
          {loading ? 'Sending...' : 'Send'}
        </button>

        {/* More form sections can go here */}
      </div>

      <div className='flex w-full justify-start py-20 text-white md:w-1/3  md:justify-center'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col '>
            <h3 className='mb-4 text-lg font-semibold text-gray-500'>
              Contact Detail
            </h3>
            <h2 className='text-2xl'>hi@protonicgod.me</h2>
            <h3 className='text-2xl'>+31 6 27 84 74 30</h3>
          </div>

          <div className='flex flex-col '>
            <h3 className='mb-4 text-lg font-semibold text-gray-500'>
              Socials
            </h3>
            <ul className='flex flex-col gap-3 text-2xl'>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;

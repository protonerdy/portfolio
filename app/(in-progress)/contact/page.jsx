import Image from 'next/image';

import { InProgress, MagneticButton } from '@/components';
import { Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function Contact() {
  return (
    <div className='bg-[#1C1E21]'>
      <Transition>
        <Navbar />

        <div className='container mx-auto flex min-h-screen flex-col items-center justify-center pt-80'>
          <div className='flex w-full items-end'>
            <div className='flex w-full flex-col md:w-2/3'>
              <h1 className=' flex  gap-3 text-4xl text-white md:flex-col md:text-9xl '>
                {/* Replace with Next.js Image component */}
                <div className='relative size-14 rounded-full md:hidden'>
                  <Image
                    src='/favicon.ico'
                    alt='Project Image'
                    className='rounded-full'
                    fill
                  />
                </div>
                Let&apos;s start a
                <span className='hidden md:block'> project together</span>
              </h1>
              <h1 className='flex text-4xl text-white md:hidden md:text-9xl'>
                project together
              </h1>
            </div>

            {/* Large image */}
            <div className='flex w-1/3 items-center justify-center'>
              <div className='relative hidden size-28 rounded-full md:block'>
                <Image
                  src='/favicon.ico'
                  alt='Project Image'
                  className='rounded-full'
                  fill
                />
              </div>
            </div>
          </div>

          <form className='flex w-full flex-col-reverse md:flex-row' action=''>
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
                    type='text'
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
                    type='text'
                    id='organization'
                    placeholder='hi@protonicgod.me'
                    className='w-full rounded-md bg-[#1C1E21] px-4  py-3  text-2xl text-white focus:outline-none focus:ring-blue-500 md:text-4xl'
                  />
                </div>
              </div>

              <div className='flex items-start space-x-4 border-t border-gray-600 py-10'>
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
              </div>

              <div className='flex items-start space-x-4 border-t border-gray-600 py-10'>
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
              </div>

              <div className='flex items-start space-x-4 border-t border-gray-600 py-10'>
                <p className='text-xl text-gray-500 md:mr-10 md:text-2xl'>05</p>
                <div className='w-full'>
                  <label
                    className='mb-2 block text-2xl font-semibold text-white md:text-4xl'
                    htmlFor='organization'
                  >
                    Your message
                  </label>
                  <input
                    type='text'
                    id='organization'
                    placeholder='Hello Kushagara, can you help me with ... *'
                    className='w-full rounded-md bg-[#1C1E21] px-4  py-3  text-2xl text-white focus:outline-none focus:ring-blue-500 md:text-4xl'
                  />
                </div>
              </div>

              {/* More form sections can go here */}
            </div>

            <div className='flex w-full justify-start py-20 text-white md:w-1/3  md:justify-center'>
              <div className='flex flex-col gap-16'>
                <div className='flex flex-col '>
                  <h3 className='mb-4 text-lg font-semibold text-gray-500'>
                    Contact Detail
                  </h3>
                  <h2 className='text-2xl'>info@dennissnellenberg.com</h2>
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
        </div>
      </Transition>
    </div>
  );
}

import Image from 'next/image';

import { InProgress, MagneticButton } from '@/components';
import { Navbar, Transition } from '@/layout';

import ContactForm from '../../_layout/contact/ContactForm/Contact';

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

          <ContactForm />
        </div>
      </Transition>
    </div>
  );
}

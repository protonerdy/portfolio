// import { InProgress } from '@/components';
import ProjectsList from '@/app/_layout/projectList';
import { Contact, Navbar, Thumbnail, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Building safe, thriving communities for brands and creators. With over 5 years of experience as a professional Discord Community Manager, I help you engage, moderate, and grow vibrant spaces. © Managed by Protonicgod',
};

export default function Work() {
  return (
    <Transition>
      {/* <InProgress>Work Page</InProgress> */}
      <Navbar bg={'bg-black'} />

      <div
        className='container pt-48 text-black'
        style={{
          paddingInlineStart: 'clamp(2.5em, 8vw, 8em)',
        }}
      >
        <h1 className='text-5xl font-medium md:text-7xl lg:text-8xl'>
          Project Gallery
        </h1>
        <p className='mt-5 text-xl'>
          Here are the project I currently manage and own
        </p>
      </div>

      <div className='pt-10 sm:pt-32'>
        {/* <Thumbnail hide={'hidden'} /> */}
        <ProjectsList />
      </div>

      <Contact />
    </Transition>
  );
}

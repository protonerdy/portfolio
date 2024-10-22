import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

import Testimonial from './Testimonials/Testimonial';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Protonicgod',
  description:
    'Building safe, thriving communities for brands and creators. With over 5 years of experience as a professional Discord Community Manager, I help you engage, moderate, and grow vibrant spaces. © Managed by Protonicgod',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Testimonial />
      <Contact />
    </Transition>
  );
}

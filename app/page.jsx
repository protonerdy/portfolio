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
    "Portfolio of Protonicgod, a professional Discord Community Manager and Moderator Hi, I'm Kushagra – a seasoned Discord Community Manager. With over 5 years of experience, I help brands and creators build safe, engaging, and vibrant communities. Whether you're looking to boost engagement, manage moderation, or create a thriving community space, I'm here to make it happen.",
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

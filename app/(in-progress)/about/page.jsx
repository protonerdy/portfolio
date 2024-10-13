import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    "Portfolio of Protonicgod, a professional Discord Community Manager and Moderator Hi, I'm Kushagra – a seasoned Discord Community Manager. With over 5 years of experience, I help brands and creators build safe, engaging, and vibrant communities. Whether you're looking to boost engagement, manage moderation, or create a thriving community space, I'm here to make it happen.",
};

export default function About() {
  return (
    <Transition>
      <InProgress>About Page</InProgress>
    </Transition>
  );
}

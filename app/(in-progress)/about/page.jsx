import { InProgress } from '@/components';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Building safe, thriving communities for brands and creators. With over 5 years of experience as a professional Discord Community Manager, I help you engage, moderate, and grow vibrant spaces. © Managed by Protonicgod',
};

export default function About() {
  return (
    <Transition>
      <InProgress>About Page</InProgress>
    </Transition>
  );
}

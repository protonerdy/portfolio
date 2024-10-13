import { Center } from '@/components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: '404',
  description:
    "Portfolio of Protonicgod, a professional Discord Community Manager and Moderator Hi, I'm Kushagra – a seasoned Discord Community Manager. With over 5 years of experience, I help brands and creators build safe, engaging, and vibrant communities. Whether you're looking to boost engagement, manage moderation, or create a thriving community space, I'm here to make it happen.",
};

export default function NotFound() {
  return (
    <Center className='h-screen'>
      <div className='select-none'>
        <h1 className='text-[max(9.5em,16vw)]'>Not Found</h1>
      </div>
    </Center>
  );
}

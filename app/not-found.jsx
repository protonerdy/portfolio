import { Center } from '@/components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: '404',
  description:
    'Building safe, thriving communities for brands and creators. With over 5 years of experience as a professional Discord Community Manager, I help you engage, moderate, and grow vibrant spaces. © Managed by Protonicgod',
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

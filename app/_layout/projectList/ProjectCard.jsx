// components/ProjectCard.js
import Image from 'next/image';

const ProjectCard = ({ imageSrc, title, description, year }) => {
  return (
    <>
      {' '}
      <div className='mx-auto mb-10 block w-4/5 sm:hidden'>
        <div className='flex flex-col gap-3 rounded-lg border border-gray-300 p-2 shadow-sm'>
          {/* Image Section */}
          <div className='aspect-w-1 aspect-h-1 mx-auto flex  h-max items-center justify-center rounded-lg bg-black'>
            <Image
              src={imageSrc}
              alt={title}
              width={180} // Reduced width for smaller card
              height={150} // Reduced height for smaller card
              objectFit='contain'
              className='size-full rounded-lg'
            />
          </div>

          {/* Info Section */}
          <div className='flex w-full flex-col items-center'>
            <h2 className='mb-1 text-center text-xl font-semibold sm:text-xl'>
              {title}
            </h2>
            <p className='mb-2 text-center text-sm text-gray-500 sm:text-sm'>
              {description}
            </p>

            {/* Members Section (Highlighted) */}
            <div className='mt-2'>
              <p className='text-center text-base font-semibold text-[#4070f4]'>
                {year} Members
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* laptop view */}
      <div className='mb-8 hidden w-full sm:block'>
        <div className='flex flex-row items-center justify-between border-b py-5'>
          {/* Left: Image */}
          <div className='flex w-1/5 items-center justify-center'>
            <Image
              src={imageSrc} // image URL from data
              alt={title}
              width={150} // Adjust size as per your requirement
              height={150}
              objectFit='contain'
              className='rounded-lg bg-black'
            />
          </div>

          {/* Middle: Number of Members */}
          <div className='w-1/5 text-center'>
            <p className='text-xl font-semibold'>{year} Members</p>
          </div>

          {/* Right: Name and Description */}
          <div className='w-2/4'>
            <h2 className='mb-2 text-xl font-semibold md:text-2xl lg:text-3xl'>
              {title}
            </h2>
            <p className='text-sm text-gray-500 md:text-lg lg:text-xl'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

import React from 'react';
// import Link from 'next/link';

const resume = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <iframe
        src={'/Kushagra Shrivastava Resume.pdf'}
        width='100%'
        height='100%'
        title='Resume'
        className='border'
      />
      {/* Or if you want to download directly */}
      {/* <Link href="/path/to/your/resume.pdf" download>
        <a className="text-white p-3 bg-blue-600 rounded">Download Resume</a>
      </Link> */}
    </div>
  );
};

export default resume;

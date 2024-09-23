'use client';
import React, { useEffect, useState } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      heading: 'Exceptional Asset to Any Community',
      desc: 'I had the pleasure of collaborating with Kushagra as a moderator for an online space, and I can confidently say he is an exceptional asset to any community. With his keen eye for detail and dedication to fostering a positive environment, Kushagra consistently ensured smooth and enjoyable interactions among the community members!',
      client: 'Arhaan Azmi, Driving Digital Engagement | Fragment Studios',
    },
    {
      heading: 'Highly Responsive and Effective',
      desc: 'It was great working with Kushagra. He set up our Discord server and was extremely responsive. He also helped us craft a full onboarding process. Will definitely work with him in the future!',
      client:
        'Binsi Das, Head of Operations @ Sagan Recruitment | MBA, Operations Administration',
    },
    {
      heading: 'Creative and Inclusive Leader',
      desc: 'I highly recommend Kushagra for any community management role. His leadership in managing communities is marked by creativity, inclusivity, and effectiveness. Kushagra consistently inspires engagement and positivity, making him a standout asset to any team.',
      client:
        'Isabel Cristina, Gaming & Web3 Community Manager | Building Discord Communities',
    },
    {
      heading: 'Outstanding Server Management',
      desc: "Kushagra has done an outstanding job in managing and growing servers. I have been working with him for past 3 years. He was an integral part in not only growing the server but actively participated within the community, making it more engaging. His leadership skill was remarkable. He was able to manage multiple servers and staff teams at once, which defines someone with good time management skills. Overall, he's an excellent person to work with.",
      client:
        'Abdul Salam M, Chief Community Manager @ BattleChest Games | Discord Expert | Machine Learning Engineer & ML Ops',
    },
    {
      heading: 'Proactive and Skilled Community Manager',
      desc: "Working with Kushagra as our Discord Community Manager has been fantastic. He's proactive, responsive, and incredibly skilled at fostering community engagement. His leadership shines through in managing multiple servers effortlessly, and his quick problem-solving abilities ensure a smooth experience for all members. Highly recommended for anyone seeking top-notch community management services.",
      client:
        'Dodagatta Nihar, 500K+ Instagram | 130K+ YouTube | Web and ML | Teaching Coding for Free',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 visible cards

  const moveCarousel = direction => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = testimonials.length - visibleCards;
    } else if (newIndex > testimonials.length - visibleCards) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  // Automatically move the carousel every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     moveCarousel(1); // Move to the next card
  //   }, 3000); // 3000ms = 3 seconds

  //   return () => clearInterval(interval); // Clean up the interval on component unmount
  // }, [currentIndex, visibleCards]);

  // Adjust the number of visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1224) {
        setVisibleCards(3); // lg and above: 3 cards
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // md: 2 cards
      } else {
        setVisibleCards(1); // sm and below: 1 card
      }
    };

    updateVisibleCards(); // Set the initial value

    // Add event listener for window resizing
    window.addEventListener('resize', updateVisibleCards);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  return (
    <div>
      <div className='container mx-auto px-5 py-12 sm:px-10 sm:py-20 xl:px-0'>
        <div className='mt-10 border-t border-slate-300 pb-8 pt-12 sm:pb-10 sm:pt-20'>
          <h1 className='w-full text-2xl font-extrabold sm:text-3xl md:text-5xl'>
            Client <span className='text-[#445AE9]'>Testimonials</span>
          </h1>
          <div className='mt-2 h-2 w-2/5 rounded-xl bg-gradient-to-r from-[#659eff] to-[#3d67b1] sm:w-[25%] md:w-[15%]'></div>

          {/* Carousel Container */}
          <div className='relative mt-10 overflow-hidden'>
            {/* Carousel Buttons */}
            <button
              className='absolute  -left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-9xl shadow-lg'
              onClick={() => moveCarousel(-1)}
            >
              ‹
            </button>
            <button
              className='absolute -right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center  justify-center rounded-full text-9xl'
              onClick={() => moveCarousel(1)}
            >
              ›
            </button>

            {/* Testimonial Cards */}
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((data, index) => (
                <div
                  key={index}
                  className='service-card group w-full shrink-0 px-4 py-6 sm:px-6 sm:py-8 md:h-[38rem] md:w-80 lg:w-[25rem]'
                  style={{ flexBasis: `${100 / visibleCards}%` }}
                >
                  <div className='flex h-full flex-col justify-between gap-6 bg-white p-5 shadow-xl transition-colors duration-300 hover:bg-[#000029]'>
                    <div>
                      <p className='mt-2 text-2xl font-bold text-black/80 group-hover:text-white sm:mt-3 sm:text-3xl md:text-3xl'>
                        {data.heading}
                      </p>
                      <p className='mt-3 text-sm text-gray-400 sm:text-base'>
                        {data.desc}
                      </p>
                    </div>
                    <div className='flex flex-col gap-5'>
                      <p className='mx-auto self-end text-center text-base font-bold group-hover:text-white'>
                        {data.client}
                      </p>
                      <p
                        style={{
                          WebkitTextStroke: '1px gray',
                          WebkitTextFillColor: 'transparent',
                        }}
                        className='self-end text-4xl font-bold sm:text-5xl'
                      >
                        0{index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

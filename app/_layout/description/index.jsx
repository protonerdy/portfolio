'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase = `I’m Protonicgod, and I have been immersed in the Discord space for over 4 years. 
I’ve served as a Discord moderator/manager across multiple servers before venturing into creating my own. 
I’ve collaborated with various clients, receiving all positive testimonials, which has solidified my versatile presence in the field. 
Additionally, I am the proud owner of the country’s largest advertisement server.`;

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full px-0 md:px-10 lg:basis-9/12 lg:px-16'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='absolute -right-[90vw] -top-10 md:top-3/4 lg:right-0 lg:top-full lg:me-10'>
            <Link href='/about' passHref>
              <MagneticButton variant='ghost' size='xl'>
                About me
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}

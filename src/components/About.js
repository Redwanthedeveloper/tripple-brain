import React from 'react';
import aboutImage from '../assets/images/about.jpg';
const About = () => {
  return (
    <>
      <section className='about py-12 my-12 md:my-0 ' id='about'>
        <div className='about__wrapper px-4 2xl:px-72 mx-auto md:px-12'>
          <div className='flex justify-between flex-col md:flex-col lg:flex-row lg:gap-8 lg:items-center'>
            <div className='about__left lg:flex-1'>
              <h2 className='font-black font-heading text-5xl mb-12  md:mb-6 md:text-4xl md:text-center lg:text-left text-primary 2xl:text-5xl'>
                What is Tripple Brain Club About?
              </h2>
              <p className='text-base leading-8 pb-4 text-default md:text-lg md:leading-8 md:text-center lg:text-left'>
                For example, as the Great Brains Club NFT holder, you will get
                access to an exclusive membership community, where not only that
                you will be surrounded by likeminded individuals, but you will
                also get the latest updates from the NFT world, daily tips and
                signals on trading NFTs successfully from real crypto-experts
                (so that you might make some extra ETH money), you will be part
                of many giveaways, you will have access to Great Brains Club
                Podcasts, and much more!
              </p>
              <p className='text-base leading-8 pb-4 text-default md:text-lg md:leading-8 md:text-center lg:text-left'>
                but you will also get the latest updates from the NFT world,
                daily tips and signals on trading NFTs successfully from real
                crypto-experts (so that you might make some extra ETH money),
                you will be part of many giveaways, you will have access to
                Great Brains Club Podcasts, and much more!
              </p>
            </div>
            <div className='about__right  px-10 py-5 md:px-24 lg:flex-1 lg:px-0'>
              <img
                src={aboutImage}
                alt={aboutImage}
                className='rounded-3xl border-4 w-max-100'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

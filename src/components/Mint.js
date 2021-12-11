import React from 'react';
import gifImage from '../assets/images/gif-2.gif';
const Mint = () => {
  return (
    <>
      <section className='mint bg-secondary' id='mint'>
        <div className='pt-12 2xl:px-72 mx-auto md:px-12'>
          <div
            className='mint__wrapper px-4 md:grid md:items-center md:grid-cols-2 md:gap-14'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <div className='mint__left bg-default p-7'>
              <h1 className='uppercase font-black font-heading text-4xl text-white'>
                Mint
              </h1>
              <div className='count font-bold font-heading text-2xl text-btn py-6'>
                100 / 4000
              </div>
              <p className='leading-5 text-base text-white'>
                Connect your wallet in order to purchase.
              </p>
              <div className='amount__wrapper flex items-center gap-8 my-5 w-32'>
                <h1 className='minus bg-white px-2 rounded-sm text-xl'>-</h1>
                <h1 className='counter text-white font-bold text-2xl'>1</h1>
                <h1 className='plus bg-white px-2 rounded-sm text-lg'>+</h1>
              </div>
              <div className='bg- uppercase rounded-sm font-medium text-white text-center text-base w-32 py-3 bg-btn'>
                <a href='#.'>Mint</a>
              </div>
            </div>
            <div className='mint__right'>
              <img src={gifImage} alt={gifImage} className='w-max-100' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mint;

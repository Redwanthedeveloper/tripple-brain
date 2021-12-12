import React from 'react';

const Roadmap = () => {
  return (
    <>
      <section className='roadmap py-12' id='roadmap'>
        <div className='roadmap__wrapper px-4 text-primary 2xl:px-72 mx-auto md:px-12'>
          <div
            className='roadmap__top flex flex-col pt-6'
            data-aos='fade-right'
            data-aos-duration='1200'
          >
            <h1 className='font-black font-heading text-4xl uppercase py-3 md:text-center lg:text-left 2xl:text-5xl'>
              Roadmap
            </h1>
            <p className='text-base leading-6 md:text-center md:text-lg md:leading-8 md:py-2 lg:text-left text-white 2xl:text-2xl'>
              Trippie Headz is a full-time project and it will continue to be
              following the public sale. Below is what we're working towards in
              the short term.
              <br />
              <br />
              <strong>
                Future developments will be announced in Roadmap 2.0.{' '}
              </strong>
            </p>
          </div>
          <div className='main__roadmap'>
            {/* <h3 className='font-bold uppercase text-2xl text-btn pt-6'>
              roadmap
            </h3> */}
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='1500'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                25%
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - 10% of purchase back (at sellout). <br />
                - Exclusive signed NFT by Trippie Redd of the Trippie Headz
                poster only 1111 will ever be made of these (will be airdropped
                to founding headz wallets). <br />
                - Will have access to backstage pass giveaway (winner will
                receive the passes before the concert after sellout). <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='1800'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                1400 mints
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - 10% of purchase back (at sellout). <br />
                - Exclusive signed NFT by Trippie Redd of the Trippie Headz
                poster only 1111 will ever be made of these (will be airdropped
                to founding headz wallets). <br />
                - Will have access to backstage pass giveaway (winner will
                receive the passes before the concert after sellout). <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='2100'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                50%
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - 10% of purchase back (at sellout). <br />
                - Exclusive signed NFT by Trippie Redd of the Trippie Headz
                poster only 1111 will ever be made of these (will be airdropped
                to founding headz wallets). <br />
                - Will have access to backstage pass giveaway (winner will
                receive the passes before the concert after sellout). <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='2400'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                75%
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - 10% of purchase back (at sellout). <br />
                - Exclusive signed NFT by Trippie Redd of the Trippie Headz
                poster only 1111 will ever be made of these (will be airdropped
                to founding headz wallets). <br />
                - Will have access to backstage pass giveaway (winner will
                receive the passes before the concert after sellout). <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10 '
              data-aos='fade-right'
              data-aos-duration='2700'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                100%
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - 10% of purchase back (at sellout). <br />
                - Exclusive signed NFT by Trippie Redd of the Trippie Headz
                poster only 1111 will ever be made of these (will be airdropped
                to founding headz wallets). <br />
                - Will have access to backstage pass giveaway (winner will
                receive the passes before the concert after sellout). <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;

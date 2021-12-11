import React from 'react';
import Collapsible from 'react-collapsible';

const Faq = () => {
  return (
    <>
      <section className='faq py-12 px-4 2xl:px-72 mx-auto md:px-12' id='faq'>
        <h2 className='text-primary 2xl:text-5xl text-center font-black font-heading text-4xl uppercase mb-6'>
          faq
        </h2>
        <p className='text-primary text-center md:text-lg 2xl:text-xl'>
          Some of your frequently ask questions.
        </p>
        <div className='faq__wrapper mt-12 md:w-2/3 md:mx-auto '>
          <div className='faq__items'>
            <Collapsible trigger='When are the Great Brains dropping?'>
              <span className='text-gray font-normal text-white lowercase'>
                You will be able to use your NFT as an avatar in the metaverse
                and our future video game.
              </span>
            </Collapsible>
          </div>
          <div className='faq__items mt-12'>
            <Collapsible trigger='When are the Great Brains dropping?'>
              <span className='text-gray font-normal text-white lowercase'>
                You will be able to use your NFT as an avatar in the metaverse
                and our future video game.
              </span>
            </Collapsible>
          </div>

          <div className='faq__items mt-12'>
            <Collapsible trigger='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum officia sed commodi nam facere!?'>
              <span className='text-gray font-normal text-white lowercase'>
                You will be able to use your NFT as an avatar in the metaverse
                and our future video game. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Cum officia sed commodi nam
                facere!
              </span>
            </Collapsible>
          </div>

          <div className='faq__items mt-12'>
            <Collapsible trigger='When are the Great Brains dropping?'>
              <span className='text-gray font-normal text-white lowercase'>
                You will be able to use your NFT as an avatar in the metaverse
                and our future video game.
              </span>
            </Collapsible>
          </div>

          <div className='faq__items mt-12'>
            <Collapsible trigger='When are the Great Brains dropping?'>
              <span className='text-gray font-normal text-white lowercase'>
                You will be able to use your NFT as an avatar in the metaverse
                and our future video game.
              </span>
            </Collapsible>
          </div>

          <div className='faq__items mt-12'>
            <Collapsible trigger='When are the Great Brains dropping?'>
              <span className='text-gray font-normal text-white lowercase'>
                You will be able to use your NFT as an avatar in the metaverse
                and our future video game.
              </span>
            </Collapsible>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

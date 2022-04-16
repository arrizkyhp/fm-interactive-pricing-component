import Card from 'components/Card'
import Attribution from 'layout/Attribution'
import React from 'react'

function Home() {
  return (
    <div className='min-h-[100vh] flex flex-col justify-between'>
    <div className=" h-[50vh] md:h-[97vh] bg-[url('assets/images/bg-pattern.svg')] bg-very-pale-blue bg-no-repeat bg-cover md:bg-contain">
      <main className='max-w-xl text-5xl font-manrope mx-auto w-full pt-14 md:pt-20 px-5 md:px-0  mb-10'>
          <div className='bg-[url("assets/images/pattern-circles.svg")] bg-no-repeat bg-center py-12 mb-5 md:mb-10 text-center flex flex-col items-center'>
            <h1 className='text-dark-desaturated-blue text-[1.3rem] md:text-xl font-extrabold mb-4'>Simple, traffic-based pricing</h1>
            <p className='text-default font-semibold md:font-bold text-grayish-blue max-w-[200px] md:max-w-none w-full leading-6'>Sign-up for our 30-day trial. No credit card required. </p>
          </div>
          <Card />
      </main>
    </div>
      <Attribution />
    </div>
  )
}

export default Home
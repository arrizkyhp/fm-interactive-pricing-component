import Card from 'components/Card'
import Attribution from 'layout/Attribution'
import React from 'react'

function Home() {
  return (
    <div className='min-h-[130vh] md:min-h-[100vh] flex flex-col justify-between bg-very-pale-blue'>
    <div className=" h-[50vh] md:h-[95vh] bg-[url('assets/images/bg-pattern.svg')] bg-no-repeat bg-very-pale-blue bg-cover md:bg-contain">
      <main className='max-w-xl text-5xl font-manrope mx-auto w-full pt-14 px-5 md:px-0  mb-10'>
          <section className='bg-[url("assets/images/pattern-circles.svg")] bg-no-repeat bg-center py-12 mb-5 md:mb-10 text-center flex flex-col items-center'>
            <h1 className='text-dark-desaturated-blue text-[1.3rem] md:text-xl font-extrabold mb-4'>Simple, traffic-based pricing</h1>
            <h2 className='text-default font-semibold md:font-bold text-grayish-blue max-w-[200px] md:max-w-none w-full leading-6'>Sign-up for our 30-day trial. No credit card required. </h2>
          </section>
          <Card />
      </main>
    </div>
      <Attribution />
    </div>
  )
}

export default Home
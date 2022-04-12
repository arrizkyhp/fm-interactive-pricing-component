import Card from 'components/Card'
import React from 'react'

function Home() {
  return (
    <div className="h-[100vh] bg-[url('assets/images/bg-pattern.svg')] bg-very-pale-blue bg-no-repeat bg-contain">
      <main className='max-w-xl text-5xl font-manrope mx-auto w-full pt-20'>
          <div className='bg-[url("assets/images/pattern-circles.svg")] bg-no-repeat bg-center py-12 mb-10 text-center'>
            <h1 className='text-dark-desaturated-blue text-xl font-extrabold mb-4'>Simple, traffic-based pricing</h1>
            <p className='text-default font-bold text-grayish-blue'>Sign-up for our 30-day trial. No credit card required. </p>
          </div>
          <Card />
      </main>

    </div>
  )
}

export default Home
import React from 'react'

function Card() {
  return (
    <section className='bg-white py-11 rounded-xl drop-shadow-xl'>
        <div className="flex justify-between items-center mb-5  px-12">
            <p className='uppercase text-default text-grayish-blue font-bold tracking-widest'>100K Pageviews</p>
            <div className="flex items-center gap-2">
                <p className='text-dark-desaturated-blue text-5xl font-extrabold'>$16.00</p>
                <p className='text-grayish-blue text-default font-bold tracking-wide'>/ month</p>
            </div>
        </div>
        <div className="px-12"><input type="range" className='w-full mb-14 cursor-pointer' /></div>
        <div className="flex text-default items-center font-semibold  px-12 gap-5 justify-center mb-10 text-grayish-blue">
            <p>Monthly Billing</p>
            <input type="checkbox" className='cursor-pointer' />
            <div className="relative">
                <p>Yearly Billing</p>
                <p className='flex w-max text-xs absolute left-[100px] rounded-full top-0 text-light-red bg-light-grayish-red py-[2px] px-2 font-bold'>25% discount</p>

            </div>
        </div>
        <div className="py-5 border-t-[1px] px-0 border-slate-200"></div>
            <div className="px-12 flex justify-between items-center">
                <ul className='flex text-default flex-col gap-4 text-grayish-blue font-semibold relative'>
                    <li className="before:content-[url('assets/images/icon-check.svg')] before:scale-125 before:absolute before:left-0 pl-6">Unlimited websites</li>
                    <li className="before:content-[url('assets/images/icon-check.svg')] before:scale-125 before:absolute before:left-0 pl-6">100% data ownership</li>
                    <li className="before:content-[url('assets/images/icon-check.svg')] before:scale-125 before:absolute before:left-0 pl-6">Email reports</li>
                </ul>
                <button className='text-default text-pale-blue hover:text-white bg-dark-desaturated-blue font-medium py-4 px-14 rounded-full'>Start my trial</button>
            </div>

    </section>
  )
}

export default Card
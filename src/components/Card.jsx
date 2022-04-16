import React, { useState, useEffect } from 'react'
import Slider from './Slider'


function Card() {
    const [rangeValue, setRangeValue] = useState(50);
    const [pageViews, setPageViews] = useState(50000)
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(false)
    const [spinner, setSpinner] = useState('')
 
    const handleRangeValue = (e) => {
        setRangeValue(e);
    }

    const handleDiscount = () => {
        setDiscount(!discount)
    }

    const handleClick = () => {
        setSpinner('spinner')
        setTimeout(() => {
            setSpinner("");
        }, 5000);
    }

    useEffect(() => {
        if (rangeValue < 1 ) {
            setPageViews(10000)
            addDiscount(8)
        } else if (rangeValue > 0 && rangeValue < 30) {
            setPageViews(50000)
            addDiscount(12)
        } else if (rangeValue >= 30  && rangeValue < 80) {
            setPageViews(100000)
            addDiscount(16)
        } else if (rangeValue >= 80 && rangeValue < 100) {
            setPageViews(500000)
            addDiscount(24)
        } else {
            setPageViews(1000000)
            addDiscount(36)
        }

    }, [rangeValue, pageViews, discount])

    const addDiscount = (pricePerMonth) => {
        if (discount) {
            const discount = (25/100) * parseInt(pricePerMonth)
            const newPrice = pricePerMonth - discount
            setPrice(newPrice)
        } else {
            setPrice(pricePerMonth)
        }
    }

    const numFormatter = (num) => {
        if(num > 999 && num < 1000000) {
            return (num/1000).toFixed(0) + 'K';
        } else if (num >= 1000000) {
            return(num/1000000).toFixed(0) + 'M';
        } else {
            return num;
        }
    }

  return (
    <section className='bg-white py-11 rounded-xl drop-shadow-xl mb-20'>
        <div className="grid grid-cols-2 grid-rows-[fit-content(200px)_1fr_1fr] md:grid-rows-2  justify-center gap-y-7 items-center mb-8 px-7 md:px-12 w-full">
            <p className='uppercase text-default text-grayish-blue font-bold tracking-widest col-span-full md:col-[1_/_2] text-center'>{numFormatter(pageViews)} Pageviews</p>
            <div className="flex items-center gap-2  col-span-full row-[3_/_4] md:row-span-1 md:col-[2_/_3] justify-center">
                <p className='text-dark-desaturated-blue text-4xl md:text-5xl font-extrabold'>${price.toFixed(2)}</p>
                <p className='text-grayish-blue text-default font-bold tracking-wide'>/ month</p>
            </div>
                <Slider onChange={handleRangeValue} className="self-center justify-self-center col-span-full"/>
        </div>
       
        <div className="flex text-xs md:text-default items-center font-semibold px-7 md:px-12 gap-2 md:gap-5 justify-center mb-10 text-grayish-blue">
            <p>Monthly Billing</p>
            <input id='toggle' type="checkbox" className='sr-only' onChange={handleDiscount} />
            <label htmlFor="toggle">
                <span className='toggle-bg w-12 h-6 p-[6px] bg-light-grayish-blue-1 cursor-pointer  rounded-full flex items-center'>
                    <span className='toggle-circle w-4 h-4 bg-white block rounded-full transition-transform'></span>
                </span>
                
            </label>
            <div className="relative">
                <p>Yearly Billing</p>
                <p className='flex w-max text-[11px] gap-1 absolute -right-[42px] md:left-[100px] rounded-full top-0 text-light-red bg-light-grayish-red py-[2px] px-2 font-bold'>25%<span className='hidden md:flex'> discount</span></p>

            </div>
        </div>
        <div className="py-5 border-t-[1px] px-0 border-slate-200"></div>
            <div className="px-12 flex flex-col gap-y-10 md:flex-row justify-between items-center">
                <ul className='flex text-default flex-col gap-4 text-grayish-blue font-semibold relative'>
                    <li className="before:content-[url('assets/images/icon-check.svg')] before:scale-125 before:absolute before:left-0 pl-6">Unlimited websites</li>
                    <li className="before:content-[url('assets/images/icon-check.svg')] before:scale-125 before:absolute before:left-0 pl-6">100% data ownership</li>
                    <li className="before:content-[url('assets/images/icon-check.svg')] before:scale-125 before:absolute before:left-0 pl-6">Email reports</li>
                </ul>
                <button className={`text-default text-pale-blue w-full max-w-[200px] hover:text-white bg-dark-desaturated-blue font-medium h-12 rounded-full focus:outline-1 focus:outline-offset-2 focus:outline-slate-400 ${spinner}`} onClick={handleClick} >Start my trial</button>
            </div>

    </section>
  )
}

export default Card
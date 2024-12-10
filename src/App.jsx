import React ,{ useState } from 'react'
import './App.css'
import bgmb from './images/illustration-hero.svg';
import music from './images/icon-music.svg'

function App() {

  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center font-RedHatDisplay'>
      <div className='w-[90%] tablet:min-w-[400px] tablet:max-w-[25%] h-[70%] tablet:min-h-[80%] tablet:max-h-[700px] bg-white rounded-3xl flex flex-col items-center overflow-hidden shadow-xl'>
        <img src={bgmb} alt="illustration" />
        <h1 className='text-[25px] text-DarkBlue font-black my-5 [@media(min-height:820px)]:mt-10'>Order Summary</h1>
        <p className='text-DesaturatedBlue text-center font-semibold px-9'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        
        <div className='w-[85%] flex flex-row justify-around items-center bg-VeryPaleBlue rounded-xl py-5 my-5 [@media(min-height:820px)]:mt-10'>

          <div className='flex flex-row'>
            <img src={music} alt="music logo" />
            <div className='ml-4'>
              <p className='text-DarkBlue font-extrabold'>Annual Plan</p>
              <p className='text-DesaturatedBlue font-medium text-[15px]'>$59.99/year</p>
            </div>
          </div>

          <div>
            <a className='text-[#4f46e5] underline font-extrabold hover:text-[#818cf8]' href="#">Change</a>
          </div>

        </div>

        <button className='w-[85%] font-bold py-3 bg-BrightBlue text-white rounded-xl shadow-2xl hover:bg-[#818cf8] [@media(min-height:820px)]:my-5'>Proceed to Payment</button>
        <button className='font-extrabold text-DesaturatedBlue my-5 hover:text-DarkBlue'>Cancel Order</button>
      </div>
    </div>
  )
}

export default App

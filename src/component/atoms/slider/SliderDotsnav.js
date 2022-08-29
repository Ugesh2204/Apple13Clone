import React from 'react'
import dataSlider from '../../../utils/dataSlider'

function SliderDotsnav({setSlideIndex, slideIndex}) {
    console.log(slideIndex)

    const moveDot = index => {
        setSlideIndex(index)
       
    }

  return (
    <div className='absolute inset-x-0 top-[12rem]'>
        <ul className='flex justify-center '>

            {dataSlider.map((item, index) => {
                return(
                    <li key={item.id} 
                    onClick={() => moveDot(index + 1)}
                    className="flex flex-col px-4">
                        <input id="colornav-value-silver" className='colornav-value' type="radio"/>
                        <label for="colornav-value-silver" className='colornav-link '>
                            <span className={`colornav-swatch bg-[#f1f2ed] rounded-[50%] w-[32px] h-[32px] block ${slideIndex === index + 1 ? 'active' : `dotcolor_${index +1 }`}`}>
                                <span className='colornav-label'>
                                {item.title}
                                </span>
                            </span>
                        </label>
                    </li>
            
                )
            })}
           

            {/* <li className=' flex flex-col px-4 ' >
                <input id="colornav-value-silver" className='colornav-value' type="radio"/>
                <label for="colornav-value-silver" className='colornav-link '>
                    <span className='colornav-swatch bg-[#f1f2ed] rounded-[50%] w-[32px] h-[32px] block'>
                        <span className='colornav-label'>
                            Silver
                        </span>
                    </span>
                </label>
            </li>

            <li className=' flex flex-col px-4 ' >
                <input id="colornav-value-gold" className='colornav-value' type="radio"/>
                <label for="colornav-value-gold" className='colornav-link '>
                    <span className='colornav-swatch bg-[#fae7cf] rounded-[50%] w-[32px] h-[32px] block'>
                        <span className='colornav-label'>
                        Gold
                        </span>
                    </span>
                </label>
            </li>

            
            <li className=' flex flex-col px-4 ' >
                <input id="colornav-value-grahite" className='colornav-value' type="radio"/>
                <label for="colornav-value-grahite" className='colornav-link '>
                    <span className='colornav-swatch bg-[#54524f] rounded-[50%] w-[32px] h-[32px] block'>
                        <span className='colornav-label'>
                        Graphite
                        </span>
                    </span>
                </label>
            </li>

            <li className=' flex flex-col px-4 ' >
                <input id="colornav-value-sierra-blue" className='colornav-value' type="radio"/>
                <label for="colornav-value-sierra-blue" className='colornav-link '>
                    <span className='colornav-swatch bg-[#a7c1d9] rounded-[50%] w-[32px] h-[32px] block'>
                        <span className='colornav-label'>
                        Sierra Blue
                        </span>
                    </span>
                </label>
            </li> */}
        </ul>
    </div>
  )
}

export default SliderDotsnav
import React from 'react'
import dataSlider from '../../../utils/dataSlider'

function SliderImage({slideIndex, batteryIsVisible}) {
    console.log(slideIndex,batteryIsVisible);


     
  return (
    <>
        {dataSlider.map((obj,index) => {
            return (
                <div key={obj.id}
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                    <img 
                        src={process.env.PUBLIC_URL + `/sliderimg/img${index + 1}.jpg`} 
                        alt="mobile" className={ `${batteryIsVisible ? 'scale-[90%] transition duration-300': 'scale-100 transition' }`}
                        />

                </div>
            )
        })}
    </>
  )
}

export default SliderImage

{/* <figure className='flex justify-center mt-12'>
<img src={mobilephone} alt="mobile" className={ `${batteryIsVisible ? 'scale-75 transition duration-300': 'scale-100 transition' }`}/>
</figure> */}
import React from 'react'
import { useRef, useEffect,useState } from 'react';

import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import mobilephone from '../../assets/images/greenphone.jpg'
import { FaPlusCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

function Homemain() {
   ///hook
   const { ref:myRef, inView:myElementIsVisible } = useInView();
   const { ref:battery, inView:batteryIsVisible } = useInView();
    ///hook

//     const myRef= useRef();
//     const [myElementIsVisible, setMyElementIsVisible] = useState();
//    console.log('myElementIsVisible',myElementIsVisible)

//     useEffect(() => {
//     //  console.log('myRef',myRef.current)
//     const observer = new IntersectionObserver((entries) => {
//     const entry = entries[0];
//     setMyElementIsVisible(entry.isIntersecting)
//     });
//     //what to obeserve
//      observer.observe(myRef.current);

//     }, [])


  return (


    <main>
         <Parallax pages={3}>
            <ParallaxLayer
                offset={0}
                speed={0.3}
           >
                <section className=' text-center flex items-center justify-center h-screen  '> 
                    <div>
                        <h1 className="text-[21px] text-black text-center   ">iPhone 13 Pro </h1>
                        <h2 className="text-[64px] font-semibold">Oh. So. Pro.</h2>
                        <p>iPhone 13 Pro takes a huge leap forward, bringing incredible speed to everything you do and
                                dramatic new photo and video capabilities — all in two great sizes.</p>
                        <p>From $41.62/mo. for 24 mo. or $999 before trade‑in1</p>
                        <figure className='flex justify-center mt-12'>
                            <img src={mobilephone} alt="mobile" className={ `${batteryIsVisible ? 'scale-75 transition duration-300': 'scale-100 transition' }`}/>
                        </figure>
                    </div>
                    
                </section>
            </ParallaxLayer>

            <ParallaxLayer
            offset={0.99}
            speed={0.8}
            factor={1}
            
            >
                <section className='w-[100%] h-screen flex gap-4 bg-[#f5f5f7]  px-[12%] py-12'>
                   

                        <div className=' w-[70%] h-[500px] relative bg-gray-900 rounded-[25px]'>
                        <video autoPlay  className="w-[100%] h-[100%]"
                         aria-label="Animation showing A15 Bionic performance."
                         src="https://www.apple.com/105/media/us/iphone-13-pro/key-features/2022/b9750cf9-f01d-475a-b022-50a49b40d9ce/anim/A15/large.mp4"></video>
                            <div className='px-8 py-6 absolute top-0'>
                                <h3 className='text-white text-[48px] w-[59%] leading-[48px] font-bold'>The fastest chip in a smartphone.</h3>
                            </div>
                            <div   className=' absolute bottom-[20px] right-[20px]'>
                                <button className=''><FaPlusCircle className='text-white text-[35px]'/></button>
                            </div>
                        </div>

              

                    <div className='batterybox w-[30%] relative flex justify-center items-center h-[500px] bg-white rounded-[25px]'>
                        <div className='px-8'>
                            <h3 ref={myRef} className='text-black text-[25px] font-semibold'>iPhone 13 Pro Max has</h3>
                            <h3 className='text-black text-[65px] leading-[65px] font-bold'>the best <div data-fill-text="battery life" className={`${batteryIsVisible ? 'textbatteryanimation': ''}`} ref={battery}>battery life</div> ever on iPhone.</h3>
                            <p>{myElementIsVisible ? 'Yes': 'no'}</p>

                        </div>

                        <div className=' absolute bottom-[20px] right-[20px]'>
                                <button className=''><FaPlusCircle className='text-black text-[35px]'/></button>
                        </div>
                       
                    </div>

                </section>
            </ParallaxLayer>

            <ParallaxLayer
            offset={2}
            speed={0}
            >
                <section className='w-[100%] flex gap-4 bg-[#f5f5f7]  px-[10%] py-12'>
                    <div className=' w-[900px] h-[500px] bg-gray-900'>
                        <h2>The fastest chip in a smartphone.</h2>
                    </div>

                    <div className=' bg-gray-900'>
                        <h3>The fastest chip in a smartphone.</h3>
                        <h3>the bestbattery life ever on iPhone.</h3>
                    </div>

                </section>
            </ParallaxLayer>
           
         </Parallax>
       
       
    </main>

  )
}

export default Homemain
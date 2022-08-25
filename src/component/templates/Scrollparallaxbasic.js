
import { useRef } from 'react';

import moon from '../assets/images/moon.png'
import land from '../assets/images/land.png'
import cat from '../assets/images/cat.gif'

import { Parallax, ParallaxLayer} from '@react-spring/parallax'
function Scrollparallaxbasi() {
    const ref = useRef();
  return (
    <Parallax pages={4} ref={ref} className='w-screen'>

    <ParallaxLayer 
        offset={0}
        speed={1}
        factor={2}
        style={{
        backgroundImage: `url(${moon})`,
        backgroundSize: 'cover',
        }}
    />

    <ParallaxLayer 
        offset={1} 
        speed={1}
        factor={5}
        style={{
        backgroundImage:`url(${land})`,
        backgroundSize:'cover'
        }}>
    </ParallaxLayer>

    <ParallaxLayer className='flex justify-center'
        sticky={{ start: 1, end: 4 }}
        // style={{ textAlign: 'center' }}
    >
        <img src={cat} />
    </ParallaxLayer>

    <ParallaxLayer
        offset={0.5}
        speed={0.05}
        onClick={() => ref.current.scrollTo(3)}>
        <h2 className='text-white text-[8rem]'>Welcome to my website </h2>
    </ParallaxLayer>

    <ParallaxLayer
        offset={3.5}
        speed={2}
        onClick={() => ref.current.scrollTo(0)}>
        <h2 className='text-white text-[8rem]'>The end page </h2>
    </ParallaxLayer>

    </Parallax>
  )
}

export default Scrollparallaxbasi
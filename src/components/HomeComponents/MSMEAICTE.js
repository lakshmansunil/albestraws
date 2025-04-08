import React from 'react';
import 'tailwindcss/tailwind.css';
import '../../index.css';

import msme from '../../assets/images/MSME.webp';
import aicte from '../../assets/images/AICTE.webp';

import indianservers from '../../assets/images/indianservers.webp'
import spacegraph from '../../assets/images/spacegraph.webp'
import aerodrone from '../../assets/images/aerodrone.webp'
import logiq from '../../assets/images/logiq.webp'
import innovacion from '../../assets/images/innovacion.webp'


const MSMEAICTE = () => {
    return(
        <>
            <div className='flex flex-col items-center my-5 m-auto max-w-[750px] p-5 '>
                <div className='flex gap-4 md:min-w-96 justify-around'>
                    <section> <img src={msme} alt='MSME' className='max-h-24 md:max-h-32 ' /> </section>
                    <section> <img src={aicte} alt='AICTE' className=' max-h-24 md:max-h-24' /> </section>
                </div>
                <div className='max-w-128'>
                    <p>Our institution is AICTE accredited for excellence in technical education and recognized by MSME 
                        for contributions to small and medium enterprise growth.
                    </p>
                </div>
            </div>

            <div className='m-auto my-5 max-w-280 flex flex-col bg-white p-4 shadow-md'>
                <div className='text-center my-5 pb-7'> 
                    <h1 className='text-3xl font-medium my-4'> Our Partners</h1>
                    <p className='text-xl font-medium'>We are proud to be associated with the following organizations </p>
                </div>
                <div className='flex flex-wrap gap-10 m-auto my-5 justify-center '>
                    <img src={indianservers} alt='indianservers' className=' max-h-20' />
                    <img src={spacegraph} alt='spacegraph' className=' max-h-20' />
                    <img src={aerodrone} alt='aerodrone'  className=' max-h-20'/>
                    <img src={innovacion} alt='innovacion'  className=' max-h-20'/>
                    <img src={logiq} alt='logiq'  className=' max-h-20'/>
                </div>
            </div>
            
        </>
    )
};

export default MSMEAICTE;

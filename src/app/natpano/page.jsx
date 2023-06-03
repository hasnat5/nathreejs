import Pano from '@/components/Pano'
import React from 'react'

const page = () => {
    return (
        <section className='overflow-hidden container w-screen h-screen relative'>
            <h2 className='text-center text-5xl font-bold absolute left-0 right-0 mx-auto'>virtuwed testing</h2>
            <Pano />
        </section>
    )
}

export default page
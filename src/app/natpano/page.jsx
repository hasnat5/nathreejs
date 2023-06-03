import Pano from '@/components/Pano'
import React from 'react'

const page = () => {
    return (
        <section className='container min-w-full overflow-hidden h-screen relative'>

            <h2 className='text-center text-5xl font-bold absolute left-0 right-0 mx-auto'>panoramic small</h2>
            <Pano />
        </section>
    )
}

export default page
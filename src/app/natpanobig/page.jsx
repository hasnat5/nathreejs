import PanoBig from '@/components/PanoBig'
import React from 'react'

const page = () => {
    return (
        <section className='container min-w-full overflow-hidden h-screen relative'>

            <h2 className='text-center text-5xl font-bold absolute left-0 right-0 mx-auto'>panoramic big</h2>
            <PanoBig />
        </section>
    )
}

export default page
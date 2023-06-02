// import Threejs from "@/components/threejs";
"use client"
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className="container mx-auto h-screen bg-[#FFECD1]">
      <div className='w-full h-4/5'>
        <Spline scene="https://prod.spline.design/629yYqJReIJG-TPw/scene.splinecode" />
      </div>

      <h1 className='text-center text-5xl font-bold'>Natkun 3d Playground</h1>
    </main>
  )
}

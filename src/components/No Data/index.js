import { Image } from '@nextui-org/react'
import React from 'react'

function NoData({ image, title, description, children}) {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex-col justify-center w-[400px]'>
        <Image src={`/gifs/${image}`} width={400} />
        <p className='font-bold text-md text-center'>{title}</p>
        <p className='font-bold text-md text-center'>{description}</p>
        <div className=' mt-1 flex justify-center'>
        {children}
        </div>
      </div>
    </div>
  )
}

export default NoData
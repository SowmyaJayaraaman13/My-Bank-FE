import { Button, Card } from '@nextui-org/react'
import React from 'react'
import { PiPlus } from 'react-icons/pi'

function AddCard({ onOpen }) {
  return (
    <Card className='flex justify-center items-center lg:w-[30%] md:w-[30%] w-full mb-2 h-[180px]'>
        <Button onPress={onOpen} color="primary" variant="ghost" startContent={<PiPlus />} >Add Card</Button>
    </Card>
  )
}

export default AddCard
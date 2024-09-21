import React from 'react'
import BasicCard from '../common/Card/Card'
import AddCard from '../common/Card/AddCard'
import { useDisclosure } from '@nextui-org/react';
import CardForm from '../common/Forms/CardForm';

function CardWrapper() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className='flex justify-between flex-wrap'>
      <BasicCard type="primary" />
      <BasicCard />
      <AddCard onOpen={onOpen} />
      <CardForm isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

export default CardWrapper
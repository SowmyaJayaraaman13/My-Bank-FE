import React from 'react'
import ProfileForm from '../common/Forms/ProfileForm'
import { Image } from '@nextui-org/react'

function EditProfile() {
  return (
    <div className='block lg:flex md:flex'>
      <div className='mx-5 mb-4'>
          <Image src='images/profile.jpg' width={150} radius='full' />
      </div>
        <ProfileForm />
    </div>
  )
}

export default EditProfile
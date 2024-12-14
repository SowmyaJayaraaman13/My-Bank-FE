import React from 'react'
import ProfileForm from '../common/Forms/ProfileForm'
import { Avatar, Image } from '@nextui-org/react'
import { useBoundStore } from '../../store'

function EditProfile() {
  const { user } = useBoundStore((state) => state)
  return (
    <div className='block lg:flex md:flex'>
      <div className='mx-5 mb-4'>
          <Avatar src={user.profile_url} size='lg' />
      </div>
        <ProfileForm profileData={user} />
    </div>
  )
}

export default EditProfile
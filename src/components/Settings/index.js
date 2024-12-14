import { Card, CardHeader } from '@nextui-org/react'
import React from 'react'
import SettingsTabs from './SettingsTabs'

function SettingsWrapper() {
  return (
    <div className='h-min-[80vh]'>
      <div>
        <SettingsTabs />
      </div>
    </div>
  )
}

export default SettingsWrapper
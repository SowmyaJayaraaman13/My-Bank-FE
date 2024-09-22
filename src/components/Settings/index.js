import { Card, CardHeader } from '@nextui-org/react'
import React from 'react'
import SettingsTabs from './SettingsTabs'

function SettingsWrapper() {
  return (
    <Card className='h-min-[80vh]'>
      <CardHeader>
        <SettingsTabs />
      </CardHeader>
    </Card>
  )
}

export default SettingsWrapper
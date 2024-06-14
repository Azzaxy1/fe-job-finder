import React from 'react'
import HireLayout from '@/layouts/HireLayout'
import ProfileInput from '@/components/common/ProfileInput'
import { Helmet } from 'react-helmet-async'

const HireProfile = () => {
  return (
    <>
      <Helmet>
        <title>Hire Profile | Job Finder</title>
      </Helmet>
      <HireLayout>
        <ProfileInput type="hire" />
      </HireLayout>
    </>
  )
}

export default HireProfile

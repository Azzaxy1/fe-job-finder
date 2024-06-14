import React from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import { Helmet } from 'react-helmet-async'
import ProfileInput from '@/components/common/ProfileInput'

const WorkerProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <div className="min-h-screen px-10 py-3">
          <ProfileInput type="user" />
        </div>
      </BaseLayout>
    </>
  )
}

export default WorkerProfilePage

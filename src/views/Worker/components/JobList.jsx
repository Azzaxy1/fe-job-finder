import React, { Suspense, lazy } from 'react'
import { listJob } from '@/utils/local-data'

import SkeletonPreview from '@/components/ui/SkeletonPreview'
const JobItem = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import('./JobItem')
  )
)

const JobList = () => {
  return (
    <>
    <Suspense fallback={<SkeletonPreview type='list'/>}>
      {listJob.map((loker, index) => (
        <JobItem key={index} loker={loker} />
      ))}
    </Suspense>
    </>
  )
}

export default JobList

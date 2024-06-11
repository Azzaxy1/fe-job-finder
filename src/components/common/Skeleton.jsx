import React from 'react'
import { Card, Skeleton } from '@nextui-org/react'

const SkeletonPreview = () => {
  return (
    <Card className="w-full h-screen p-4 space-y-5" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-screen rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  )
}

export default SkeletonPreview

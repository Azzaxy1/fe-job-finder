import React from 'react'
import { Skeleton } from '@nextui-org/react'
import PropTypes from 'prop-types'

export default function SkeletonType ({ type }) {
  return (
    <>
      {type === 'list' && (
        <section className="flex flex-col gap-4">
          <div className="max-w-[700px] mx-auto w-full flex p-7 justify-center items-center gap-3">
            <div>
              <Skeleton className="flex w-12 h-12 rounded-full" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <Skeleton className="w-3/5 h-3 rounded-lg" />
              <Skeleton className="w-1/5 h-3 rounded-lg" />
              <Skeleton className="w-4/5 h-3 rounded-lg" />
              <Skeleton className="w-1/3 h-3 rounded-lg" />
              <div className="flex justify-end">
                <Skeleton className="w-1/3 h-3 rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

SkeletonType.propTypes = {
  type: PropTypes.string
}

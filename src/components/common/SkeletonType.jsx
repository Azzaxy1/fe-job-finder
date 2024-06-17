import React from 'react'
import { Card, Skeleton } from '@nextui-org/react'
import PropTypes from 'prop-types'

export default function SkeletonType ({ variant }) {
  return (
    <>
      {variant === 'list' && (
        <section className="flex flex-col gap-4">
          <div className="max-w-[700px] mx-auto w-full flex p-7 justify-center items-center gap-3">
            <div>
              <Skeleton className="flex w-16 h-12 rounded-lg" />
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
      {variant === 'detail' && (
        <section className="flex flex-col gap-4">
          <Card className="p-4 md:mx-6 flex flex-col gap-4 space-y-5 w-[280px] md:w-[750px] 2xl:w-[900px] h-[1000px]" radius="sm">
            <article className='flex flex-col gap-6 md:pt-4 md:px-6 md:flex-row'>
              <div className='md:pt-6'>
                <Skeleton className="flex w-24 h-12 rounded-lg" />
              </div>
              <div className="flex flex-col w-full gap-3">
                <Skeleton className="w-[40%] h-3 rounded-lg" />
                <Skeleton className="w-[20%] h-3 rounded-lg" />
                <Skeleton className="w-[60%] h-3 rounded-lg" />
                <Skeleton className="w-[30%] h-3 rounded-lg" />
              </div>
              <div className='flex gap-4 md:flex-col'>
                <Skeleton className="flex w-24 h-8 rounded-md" />
              </div>
            </article>
            <div className="flex flex-col w-full gap-4 p-5">
                <div className='flex flex-col gap-4'>
                  <Skeleton className="w-[30%] h-3 rounded-lg" />
                  <Skeleton className="w-[30%] h-3 rounded-lg" />
                </div>
                <Skeleton className="w-[60%] h-3 rounded-lg" />
                <Skeleton className="w-[50%] h-3 rounded-lg" />
                <Skeleton className="w-[80%] h-3 rounded-lg" />
                <Skeleton className="w-[70%] h-3 rounded-lg" />
                <Skeleton className="w-[50%] h-3 rounded-lg" />
              </div>
            <div className="flex flex-col w-full gap-4 p-5">
                <div className='flex flex-col gap-4'>
                  <Skeleton className="w-[30%] h-3 rounded-lg" />
                  <Skeleton className="w-[30%] h-3 rounded-lg" />
                </div>
                <Skeleton className="w-[60%] h-3 rounded-lg" />
                <Skeleton className="w-[50%] h-3 rounded-lg" />
                <Skeleton className="w-[80%] h-3 rounded-lg" />
                <Skeleton className="w-[70%] h-3 rounded-lg" />
                <Skeleton className="w-[50%] h-3 rounded-lg" />
              </div>
            <div className="flex flex-col w-full gap-4 p-5">
                <div className='flex flex-col gap-4'>
                  <Skeleton className="w-[30%] h-3 rounded-lg" />
                  <Skeleton className="w-[30%] h-3 rounded-lg" />
                </div>
                <Skeleton className="w-[60%] h-3 rounded-lg" />
                <Skeleton className="w-[50%] h-3 rounded-lg" />
                <Skeleton className="w-[80%] h-3 rounded-lg" />
                <Skeleton className="w-[70%] h-3 rounded-lg" />
                <Skeleton className="w-[50%] h-3 rounded-lg" />
              </div>
          </Card>
          <Card className="p-4 space-y-5 w-[280px] md:mx-6 h-[310px] md:w-[750px] 2xl:w-[900px]" radius="sm">
            <article className='flex flex-row gap-6'>
              <div className='flex flex-col gap-4'>
                <Skeleton className="w-[100%] h-3 rounded-lg" />
                <Skeleton className="flex w-24 h-12 rounded-lg" />
              </div>
              <div className="flex flex-col justify-center w-full gap-2">
                <Skeleton className="w-1/5 h-3 rounded-lg" />
                <Skeleton className="w-3/5 h-3 rounded-lg" />
              </div>
            </article>
            <div className="flex flex-col justify-center w-full gap-2 pt-5">
              <Skeleton className="w-1/5 h-3 rounded-lg" />
              <Skeleton className="w-2/5 h-3 rounded-lg" />
            </div>
            <div className="flex flex-col justify-center w-full gap-2 pt-5">
              <Skeleton className="w-1/5 h-3 rounded-lg" />
              <Skeleton className="w-[100%] h-3 rounded-lg" />
            </div>
            <Skeleton className="flex w-24 h-8 mx-auto rounded-md" />
          </Card>
        </section>
      )}
    </>
  )
}

SkeletonType.propTypes = {
  variant: PropTypes.string
}

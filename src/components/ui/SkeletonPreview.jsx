import React from 'react'
import SkeletonType from '../common/SkeletonType'
import PropTypes from 'prop-types'
import { Card } from '@nextui-org/react'

const SkeletonPreview = ({ type }) => {
  return (
    <>
    {type === 'list' && (
      <section className='flex flex-col gap-2'>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
        <Card radius='sm' shadow='sm'><SkeletonType variant="list" /></Card>
    </section>
    )}
    {type === 'detail' && (
      <section>
        <SkeletonType variant="detail" />
      </section>
    )}
  </>
  )
}

SkeletonPreview.propTypes = {
  type: PropTypes.string
}

export default SkeletonPreview

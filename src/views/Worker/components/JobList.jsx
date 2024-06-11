import React, { Suspense, lazy } from 'react'

import Company1 from '@/assets/landing/company/company1.svg'
import Company2 from '@/assets/landing/company/company2.svg'
import Company3 from '@/assets/landing/company/company3.svg'
import Company4 from '@/assets/landing/company/company4.svg'
import Company5 from '@/assets/landing/company/company5.svg'
import Company6 from '@/assets/landing/company/company6.svg'
import Company7 from '@/assets/landing/company/company7.svg'
import Company8 from '@/assets/landing/company/company8.svg'
import SkeletonPreview from '@/components/ui/SkeletonPreview'
const JobItem = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import('./JobItem')
  )
)

const JobList = () => {
  const listLoker = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'BRI',
      image: Company1,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'BRI',
      image: Company2,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'BRI',
      image: Company3,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 4,
      title: 'Mobile Developer',
      company: 'BRI',
      image: Company4,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 5,
      title: 'Mobile Developer',
      company: 'BRI',
      image: Company5,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 6,
      title: 'Mobile Developer',
      company: 'BRI',
      image: Company6,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 7,
      title: 'Mobile Developer',
      company: 'BRI',
      image: Company7,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 8,
      title: 'Mobile Developer',
      company: 'BRI',
      image: Company8,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 9,
      title: 'Mobile Developer',
      company: 'BRI',
      image: Company2,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    },
    {
      id: 10,
      title: 'Mobile Developer',
      company: 'BRI',
      image: Company1,
      salary: 'Rp. 1.000.000 - Rp. 2.000.000',
      location: 'Jakarta',
      type: 'Full-time',
      date: '2024-01-01'
    }
  ]

  return (
    <>
    <Suspense fallback={<SkeletonPreview/>}>
      {listLoker.map((loker, index) => (
        <JobItem key={index} loker={loker} />
      ))}
    </Suspense>
    </>
  )
}

export default JobList

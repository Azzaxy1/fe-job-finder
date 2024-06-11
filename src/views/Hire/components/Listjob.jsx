import React, { useState } from 'react'
import ItemJob from './ItemJob'
import { listJobHire } from '@/utils/local-data'
import { Button, Pagination } from '@nextui-org/react'

const Listjob = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const jobPerPage = 4

  const totalPage = Math.ceil(listJobHire?.length / jobPerPage)
  const startIndex = (currentPage - 1) * jobPerPage
  const currentJobs = listJobHire.slice(startIndex, startIndex + jobPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <section className='flex flex-col items-start justify-start w-full gap-4 mb-5 -mt-2 '>
      <div className='flex flex-row items-center justify-between w-full'>
        <h2 className='text-lg font-semibold md:text-xl'>Daftar Lowongan Pekerjaan</h2>
        <Button className='font-semibold text-white bg-blue'>Tambah Pekerjaan</Button>
      </div>
      <article className='flex flex-row flex-wrap w-full gap-4'>
        {currentJobs.map((job, index) => (
          <ItemJob key={index} job={job} />
        ))}
      </article>
      <Pagination
      isCompact
      showControls
      total={totalPage}
      initialPage={1}
      onChange={handlePageChange}
      className='flex justify-center w-full'
      />
    </section>
  )
}

export default Listjob

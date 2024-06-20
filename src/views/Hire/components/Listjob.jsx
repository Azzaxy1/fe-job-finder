import React, { Suspense, useMemo, useState, lazy } from 'react'
import { useSelector } from 'react-redux'
import SkeletonPreview from '@/components/ui/SkeletonPreview'
import { Button, Pagination } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const ItemJob = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
    import('./ItemJob')
  )
)

const Listjob = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const jobPerPage = 6

  const listJobHire = useSelector((state) => state.hireDashboardJob)
  const totalPage = Math.ceil(listJobHire?.length / jobPerPage)

  const items = useMemo(() => {
    const start = (currentPage - 1) * jobPerPage
    const end = start + jobPerPage
    return listJobHire.slice(start, end)
  })

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <section className='flex flex-col items-start justify-start w-full gap-4 mb-5 -mt-2 '>
      <div className='flex lg:flex-row flex-col md:items-center justify-between w-full gap-2 md:gap-0'>
        <h2 className='text-base font-semibold md:text-xl'>Daftar Lowongan Pekerjaan</h2>
          <Button className='font-semibold text-white bg-blue'>
            <Link to="/create-job">Tambah Pekerjaan</Link>
          </Button>
      </div>
      <article className='flex flex-col flex-wrap w-full gap-4 md:flex-row'>
        <Suspense fallback={<SkeletonPreview type="hire" />}>
          {listJobHire.length === 0
            ? (
            <p className="flex items-center justify-center">Tidak ada Lowongan Pekerjaan yang ditemukan</p>
              )
            : (
                (
                  items.map((job, index) => (
            <ItemJob key={index} job={job} />
                  ))
                )
              )
          }
        </Suspense>
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

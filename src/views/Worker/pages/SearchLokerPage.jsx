import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import BaseLayout from '@/layouts/BaseLayout'
import SkeletonPreview from '@/components/ui/SkeletonPreview'
import useInput from '@/hooks/useInput'
import SearchJob from '@/components/ui/SearchJob'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetApplyJob } from '@/states/applyJob/action'
import Logo from '@/assets/logo-blue.svg'
import { Image } from '@nextui-org/react'
import { asyncGetAllJob } from '@/states/worker/action'

const JobItem = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import('../components/JobItem')
  )
)

const DetailJob = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import('../components/DetailJob')
  )
)

const SearchLokerPage = () => {
  const [title, onTitleChange] = useInput('')
  const [location, onLocationChange] = useInput('')
  const allJob = useSelector((state) => state.worker)
  const [searchResult, setSearchResult] = useState([])
  const [selectedJobId, setSelectedJobId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetAllJob())
  }, [dispatch])

  useEffect(() => {
    setSearchResult(allJob)
  }, [allJob])

  useEffect(() => {
    dispatch(asyncGetApplyJob())
  }, [dispatch])

  const handleSearch = () => {
    if (title === '' && location === '') {
      setSearchResult(allJob)
    } else {
      const result = allJob.filter((job) => {
        return (
          job.title.toLowerCase().includes(title.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
        )
      })
      setSearchResult(result)
    }
  }

  const handleJobCLick = (JobId) => {
    setSelectedJobId(JobId)
  }

  return (
    <>
      <Helmet>
        <title>Cari Lowongan Pekerjaan | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <main className="flex flex-col min-h-screen gap-8">
          <SearchJob jobs={allJob} onTitleChange={onTitleChange} onLocationChange={onLocationChange} onSearch={handleSearch} />
          <section className="flex flex-col gap-10 px-10 pb-10 md:gap-0 sm:flex-row 2xl:px-72">
            <div className="flex flex-col p-2 max-h-[1000px] overflow-y-auto max-w-[400px] sm:min-w-[400px] scroll-smooth">
              <Suspense fallback={<SkeletonPreview type='list'/>}>
                {searchResult.length === 0
                  ? (
                  <p className="text-center">Tidak ada lowongan yang ditemukan</p>
                    )
                  : (
                      searchResult.map((job, index) => (
                    <JobItem key={index} job={job} onClick={handleJobCLick} />
                      ))
                    )}
              </Suspense>
            </div>
            <Suspense fallback={<SkeletonPreview type='detail' />}>
              {selectedJobId !== null
                ? <DetailJob jobId={selectedJobId} />
                : <div className='flex flex-col items-center justify-center w-full'>
                  <Image src={Logo} alt="logo" width={300} />
                  <p className='text-fontColor'>Silakan pilih lowongan di sebelah kiri untuk melihat detailnya</p>
                  </div>
              }
            </Suspense>
          </section>
        </main>
      </BaseLayout>
    </>
  )
}

export default SearchLokerPage

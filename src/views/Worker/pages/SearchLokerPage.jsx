import React, { Suspense, lazy, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import BaseLayout from '@/layouts/BaseLayout'
import SkeletonPreview from '@/components/ui/SkeletonPreview'
import { listJob } from '@/utils/local-data'
import useInput from '@/hooks/useInput'
import SearchJob from '@/components/ui/SearchJob'

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
  const [searchResult, setSearchResult] = useState(listJob)

  const handleSearch = () => {
    if (title === '' && location === '') {
      setSearchResult(listJob)
    } else {
      const result = listJob.filter((job) => {
        return (
          job.title.toLowerCase().includes(title.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
        )
      })
      setSearchResult(result)
    }
  }

  return (
    <>
      <Helmet>
        <title>Cari Lowongan Pekerjaan | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <main className="flex flex-col min-h-screen gap-8">
          <SearchJob jobs={listJob} onTitleChange={onTitleChange} onLocationChange={onLocationChange} onSearch={handleSearch} />
          <section className="flex flex-col gap-10 px-10 pb-10 md:gap-0 sm:flex-row 2xl:px-72">
            <div className="flex flex-col p-2 max-h-[500px] md:max-h-[1350px] overflow-y-auto max-w-[400px] sm:min-w-[400px] scroll-smooth">
              <Suspense fallback={<SkeletonPreview type='list'/>}>
                {searchResult.length === 0
                  ? (
                  <p className="text-center">Tidak ada lowongan yang ditemukan</p>
                    )
                  : (
                      searchResult.map((job, index) => (
                    <JobItem key={index} job={job} />
                      ))
                    )}
              </Suspense>
            </div>
            <Suspense fallback={<SkeletonPreview type='detail' />}>
              <DetailJob />
            </Suspense>
          </section>
        </main>
      </BaseLayout>
    </>
  )
}

export default SearchLokerPage

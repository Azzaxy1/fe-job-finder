import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import BaseLayout from '@/layouts/BaseLayout'
import JobList from '../components/JobList'
import SearchJob from '../components/SearchJob'
import SkeletonPreview from '@/components/ui/SkeletonPreview'

const DetailJob = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import('../components/DetailJob')
  )
)

const SearchLokerPage = () => {
  return (
    <>
      <Helmet>
        <title>Cari Lowongan Pekerjaan | Job Finder</title>
      </Helmet>
      <BaseLayout>
        <main className="flex flex-col min-h-screen gap-8">
          <SearchJob />
          <section className="flex flex-col px-10 pb-10 sm:flex-row 2xl:px-72">
            <div className="flex flex-col p-2 max-h-[500px] md:max-h-[1350px] overflow-y-auto max-w-[400px] sm:min-w-[400px] scroll-smooth">
              <JobList />
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

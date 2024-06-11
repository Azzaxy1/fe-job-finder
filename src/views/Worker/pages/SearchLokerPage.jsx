import React from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import { Helmet } from 'react-helmet-async'
import JobList from '../components/JobList'
import SearchJob from '../components/SearchJob'
import DetailJob from '../components/DetailJob'

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
            <DetailJob />
          </section>
        </main>
      </BaseLayout>
    </>
  )
}

export default SearchLokerPage

import React from 'react'
import { Button } from '@nextui-org/react'
import SearchLocation from '../common/SearchLocation'
import BreadcrumbsHeader from '../common/BreadcrumbsHeader'
import SearchTitle from '../common/SearchTitle'
import PropTypes from 'prop-types'

const SearchJob = ({ onTitleChange, onLocationChange, onSearch, jobs }) => {
  return (
    <>
      <BreadcrumbsHeader />
      <div className="flex flex-col max-w-3xl gap-4 pl-12 2xl:pl-72">
        <h2 className="text-lg font-semibold sm:text-xl">
          Cari Lowongan Pekerjaan
        </h2>
        <div className="flex flex-col gap-4 pe-12 md:pe-0 md:flex-row">
          <SearchTitle onTitleChange={onTitleChange} />
          <SearchLocation jobs={jobs} onLocationChange={onLocationChange}/>
          <Button radius="sm" className="text-white bg-blue" onPress={onSearch}>
            Cari
          </Button>
        </div>
      </div>
    </>
  )
}

SearchJob.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired
}

export default SearchJob

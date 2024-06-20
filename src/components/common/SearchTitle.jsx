import React from 'react'
import { Input } from '@nextui-org/react'
import { IoIosSearch } from 'react-icons/io'
import PropTypes from 'prop-types'

const SearchTitle = ({ onTitleChange }) => {
  return (
    <Input
      variant="bordered"
      placeholder="Cari Posisi"
      className="w-full border border-gray-400 rounded-xl"
      startContent={<IoIosSearch className="text-xl" />}
      onChange={onTitleChange}
    />
  )
}

SearchTitle.propTypes = {
  onTitleChange: PropTypes.func
}

export default SearchTitle

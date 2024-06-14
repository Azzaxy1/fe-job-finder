import React from 'react'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import PropTypes from 'prop-types'
import { IoLocationOutline } from 'react-icons/io5'

const SearchLocation = ({ jobs, onLocationChange }) => {
  const locations = [...new Set(jobs.map(job => job.location))]

  return (
    <Autocomplete
      aria-label="Lokasi"
      defaultItems={locations}
      variant="bordered"
      placeholder="Lokasi"
      className="w-full border border-gray-400 rounded-xl "
      startContent={<IoLocationOutline className="text-2xl" />}
      onSelectionChange={(selected) => {
        const location = locations[selected]
        onLocationChange({ target: { value: location } })
      }}
    >
      {locations.map((location, index) => (
        <AutocompleteItem key={index} value={location}>
          {location}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  )
}

SearchLocation.propTypes = {
  onLocationChange: PropTypes.func,
  jobs: PropTypes.array.isRequired
}

export default SearchLocation

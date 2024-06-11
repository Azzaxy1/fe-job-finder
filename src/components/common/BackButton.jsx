import { Button } from '@nextui-org/react'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <Button className='flex flex-row items-center font-semibold text-white bg-blue' onClick={handleClick}>
      <FaArrowLeft/>
      Kembali
    </Button>
  )
}

export default BackButton

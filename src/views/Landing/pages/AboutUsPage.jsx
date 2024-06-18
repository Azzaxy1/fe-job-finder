import React from 'react'
import BaseLayout from '@/layouts/BaseLayout'
import AboutUs from '../components/AboutUs'
import { Helmet } from 'react-helmet-async'

const AboutUsPage = () => {
  return (
    <>
    <Helmet>
      <title>About Us | Job Finder</title>
    </Helmet>
    <BaseLayout>
      <AboutUs/>
    </BaseLayout>
    </>
  )
}

export default AboutUsPage

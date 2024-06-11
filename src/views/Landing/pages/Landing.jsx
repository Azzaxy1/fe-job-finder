import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'

import BaseLayout from '@/layouts/BaseLayout'
// import Hero from "../components/Hero";
import WhyJoin from '../components/WhyJoin'
import CompanyList from '../components/CompanyList'
import Testimony from '../components/Testimony'
import Faq from '../components/Faq'
import SkeletonPreview from '@/components/common/Skeleton'
import { motion, useScroll, useSpring } from 'framer-motion'
const Hero = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import('../components/Hero')
  )
)

const Landing = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <Helmet>
        <title>Job Finder | Situs Lowongan Pekerjaan</title>
      </Helmet>
      <BaseLayout>
        <motion.div
        // style={{ scaleX }}
        // className="fixed top-0 left-0 right-0 h-1 transform bg-red-400"
        >
          <Suspense fallback={<SkeletonPreview />}>
            <Hero />
          </Suspense>
          <WhyJoin />
          <CompanyList />
          <Testimony />
          <Faq />
        </motion.div>
      </BaseLayout>
    </>
  )
}

export default Landing

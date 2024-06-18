import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Azis from '@/assets/azis.jpg'
import Marcell from '@/assets/marcell.jpg'
import Anwar from '@/assets/anwar.jpg'

const AboutUs = () => {
  const profileDev = [
    {
      id: 1,
      image: Azis,
      name: 'Abdurrohman Azis',
      role: 'FrontEnd Developer',
      college: 'Universitas Banten Jaya',
      github: 'https://github.com/azzaxy1',
      linkedIn: 'https://www.linkedin.com/in/AbdurrohmanAzis/'
    },
    {
      id: 2,
      image: Marcell,
      name: 'Marcell Virgiano Hernand',
      role: 'FrontEnd Developer',
      college: 'Universitas Telkom',
      github: 'https://github.com/aclrdhv',
      linkedIn: 'https://www.linkedin.com/in/marcellv/'
    },
    {
      id: 3,
      image: Anwar,
      name: 'Muhammad Anwar Fauzan',
      role: 'BackEnd Developer',
      college: 'Universitas Banten Jaya',
      github: 'https://github.com/Anuraaaa',
      linkedIn: 'https://www.linkedin.com/in/anwarfauzann/'
    }
  ]

  return (
    <section className='flex flex-col w-full min-h-screen gap-5'>
      <article className='flex flex-col bg-[#f2f7fd] items-center px-10 py-12 md:px-28 2xl:px-72 justify-start gap-4 pt-12 h-fit '>
        <h1 className='text-2xl font-semibold md:text-3xl 2xl:text-4xl'>Tentang <span className='font-bold text-blue'>Job Finder</span></h1>
        <div className='w-[200px] h-[2px] bg-blue'></div>
        <p className='text-sm sm:text-base md:text-lg 2xl:text-xl'><span className='font-bold text-blue'>Job Finder</span> adalah sebuah platform yang membantu pencari kerja menemukan lowongan pekerjaan yang sesuai dengan kualifikasi dan preferensi anda. <span className='font-bold text-blue'>Job Finder</span> bertujuan untuk menyediakan akses mudah ke berbagai lowongan pekerjaan dari berbagai sumber. Platform ini juga menyediakan berbagai informasi terkait tips untuk memaksimalkan dalam mencari pekerjaan. Dengan <span className='font-bold text-blue'>Job Finder</span> diharapkan membantu para pencari kerja dalam mencari pekerjaan.</p>
      </article>
      <article className='flex flex-col items-center justify-start px-10 pb-20 md:px-28 2xl:px-72'>
        <h2 className='pb-4 text-2xl font-semibold md:text-3xl 2xl:text-4xl'>Tentang Tim</h2>
        <div className='w-[200px] h-[2px] mb-10 bg-blue'></div>
        <div className='flex flex-wrap items-center justify-center gap-5'>
        {profileDev.map((profile) => (
          <Card key={profile.id} isHoverable radius='sm' className='w-[300px] h-[415px] px-2 py-2'>
            <CardHeader className='flex justify-center w-full'>
              <Image src={profile.image} className={`object-cover ${profile.image[0]}`} alt='avatar' radius='sm' width={200} height={200} />
            </CardHeader>
            <CardBody>
              <h2 className='text-xl font-semibold text-blue'>{profile.name}</h2>
              <h4 className='text-base'>{profile.role}</h4>
              <p className='text-lg font-semibold'>{profile.college}</p>
            </CardBody>
            <CardFooter className='flex flex-row justify-center gap-4'>
              <Link to={profile.github}>
                  <FaGithub className='w-10 h-10 px-1 py-1 text-black bg-white border border-gray-300 rounded-md hover:bg-black hover:text-white'/>
              </Link>
              <Link to={profile.linkedIn}>
                  <IoLogoLinkedin className='w-10 h-10 px-1 py-1 bg-white border border-gray-300 rounded-md text-blue hover:bg-blue hover:text-white'/>
              </Link>
            </CardFooter>
          </Card>
        ))}
        </div>
      </article>
    </section>
  )
}

export default AboutUs

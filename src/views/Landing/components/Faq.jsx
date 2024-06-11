import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'

const Faq = () => {
  const questions = [
    {
      id: 1,
      question:
        'Apakah JobFinder menawarkan lowongan pekerjaan di berbagai kota di Indonesia?',
      answer:
        'Ya, JobFinder menyediakan lowongan pekerjaan di berbagai kota di seluruh Indonesia. Anda dapat mencari dan melamar pekerjaan berdasarkan lokasi yang Anda inginkan menggunakan filter pencarian di situs kami.'
    },
    {
      id: 2,
      question:
        'Kepada siapa saya harus melaporkan jika mengalami masalah saat melamar pekerjaan?',
      answer:
        'Jika Anda mengalami masalah saat melamar pekerjaan, Anda dapat menghubungi tim dukungan pelanggan kami melalui WhatsApp. Tim kami akan dengan senang hati membantu Anda mengatasi masalah tersebut.'
    },
    {
      id: 3,
      question:
        'Bagaimana cara meningkatkan peluang saya untuk mendapatkan pekerjaan?',
      answer:
        'Untuk meningkatkan peluang mendapatkan pekerjaan, pastikan profil dan resume Anda lengkap dan terkini. Sesuaikan resume Anda dengan pekerjaan yang Anda lamar, dan pertimbangkan untuk melamar ke berbagai posisi yang sesuai dengan keterampilan dan pengalaman Anda. Mengikuti pelatihan dan memperoleh sertifikasi tambahan juga bisa membantu.'
    },
    {
      id: 4,
      question:
        'Apakah ada batasan jumlah lamaran yang dapat saya kirim melalui JobFinder?',
      answer:
        'Tidak, JobFinder tidak membatasi jumlah lamaran yang dapat Anda kirim. Anda bebas melamar ke sebanyak mungkin pekerjaan yang Anda minati dan sesuai dengan kualifikasi Anda.'
    },
    {
      id: 5,
      question: 'Apakah layanan JobFinder memerlukan biaya?',
      answer:
        'JobFinder menyediakan banyak layanan secara gratis untuk pencari kerja. Termasuk juga layanan tips kerja yang diberikan secara gratis.'
    }
  ]

  return (
    <section className="flex flex-col items-center gap-10 px-10 py-12 lg:px-10 2xl:px-72">
      <header className="flex flex-col justify-center max-w-2xl gap-2 text-center text-fontColor">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Ada Pertanyaan Lanjutan?
        </h2>
        <p className="text-sm font-normal sm:text-base md:text-lg">
          Kami telah merangkum jawaban atas berbagai pertanyaan yang sering
          diajukan. Jika masih ada yang belum terjawab, silahkan hubungi WA
          kami!
        </p>
      </header>
      <article className="flex flex-col gap-4  2xl:w-[70%]">
        {questions.map((question) => (
          <Accordion
            key={question.id}
            variant="splitted"
            className="text-sm md:text-base "
          >
            <AccordionItem
              key={question.id}
              aria-label={question.question}
              title={question.question}
              className="max-w-3xl 2xl:max-w-5xl"
            >
              {question.answer}
            </AccordionItem>
          </Accordion>
        ))}
      </article>
    </section>
  )
}

export default Faq

import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { questions } from '@/utils/local-data'

const Faq = () => {
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

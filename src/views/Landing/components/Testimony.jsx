import React from 'react'
import { Image } from '@nextui-org/react'
import { Carousel } from 'react-responsive-carousel'
import { testimonyList } from '@/utils/local-data'

const Testimony = () => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer'
  }

  return (
    <section className="py-12 text-white bg-blue">
      <header className="flex flex-col justify-center text-center ">
        <h2 className="text-2xl font-medium sm:text-3xl">Apa kata mereka</h2>
        <p className="text-2xl font-medium sm:text-3xl">Tentang Job Finder</p>
      </header>
      <article className="pt-10">
        <Carousel
          autoPlay
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          useKeyboardArrows={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
              >
                ❮
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              >
                ❯
              </button>
            )
          }
        >
          {testimonyList.map((testimony) => (
            <div
              key={testimony.id}
              className="flex w-[70%] flex-col sm:flex-row mx-auto justify-center items-center gap-10 md:gap-12 text-left"
            >
              <div className="flex items-center justify-center">
                <Image
                  radius="full"
                  src={testimony.image}
                  alt={testimony.name}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm sm:text-base md:text-lg ">
                  {testimony.message}
                </p>
                <p className="pt-3 text-sm font-medium sm:text-lg md:text-xl">
                  {testimony.name}
                </p>
                <p className="text-xs font-light sm:text-sm md:text-base">
                  {testimony.title}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </article>
    </section>
  )
}

export default Testimony

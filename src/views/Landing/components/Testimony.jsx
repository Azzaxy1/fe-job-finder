import React from 'react'
import { Image } from '@nextui-org/react'
import { Carousel } from 'react-responsive-carousel'

const Testimony = () => {
  const testimonyList = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Software Engineer',
      image: 'https://i.pravatar.cc/300',
      message:
        'Lacinia ex id gravida dapibus ante cras elit hac torquent aliquet sodales in tortor sollicitudin efficitur ac fermentum purus condimentum viverra venenatis maecenas nullam rhoncus montes accumsan vitae'
    },
    {
      id: 2,
      name: 'Chaplin Doe',
      title: 'UI/UX Designer',
      image: 'https://i.pravatar.cc/300',
      message:
        'Taciti quisque conubia at vel laoreet sem mi feugiat nisl mollis purus cras parturient est integer pharetra senectus in elementum morbi cubilia turpis quam risus massa dictumst hendrerit'
    },
    {
      id: 3,
      name: 'Jane Doe',
      title: 'Fullstack Developer',
      image: 'https://i.pravatar.cc/300',
      message:
        'Orci erat non id at eget sapien facilisis massa condimentum penatibus nibh augue donec est sodales fusce per quam cras morbi ridiculus feugiat viverra dui euismod montes habitasse dictum vitae sem sociosqu lobortis vulputate class'
    }
  ]

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

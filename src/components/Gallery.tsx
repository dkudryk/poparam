import ReactImageVideoLightbox from 'react-image-video-lightbox'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.css'

import { PlayIcon } from '@heroicons/react/solid'
import { createPortal } from 'react-dom'

const data = [
  {
    url: '/video/video-1.mp4',
    thumbnail: '/video/video-1.jpg',
    type: 'video',
  },
  {
    url: '/images/IMG_4871.jpg',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_4597.JPG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_4485.PNG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_4492.PNG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_4488.PNG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_4487.PNG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_4446.jpg',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_3951.PNG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_3426.PNG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_5907.JPG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_5871.jpg',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_5822.JPG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_5761.JPG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_5586.jpg',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_5495.JPG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_5283.jpg',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_5153.jpg',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_4988.PNG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_3338.jpg',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_2916.PNG',
    type: 'photo',
    altTag: '',
  },
  {
    url: '/images/IMG_4889.jpg',
    type: 'photo',
    altTag: '',
  },
  // {
  //   url: '/video/video-2.mp4',
  //   thumbnail: '/video/video-2.jpg',
  //   type: 'video',
  // },
  // {
  //   url: '/video/video-3.mp4',
  //   thumbnail: '/video/video-3.jpg',
  //   type: 'video',
  // },
]

function Gallery() {
  const [open, setOpen] = useState(false)
  const [list, setList] = useState(
    data.map(item => ({
      ...item,
      isOpen: false,
    })),
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const handlePlay = (index: number) => {
    setList(values =>
      values.map((item, listIndex) => {
        if (listIndex === index) {
          return {
            ...item,
            isOpen: true,
          }
        } else {
          return item
        }
      }),
    )
  }

  const handleSwipeEnd = () => {
    const item = list.find(item => item.isOpen === true)
    if (item !== undefined) {
      setList(values =>
        values.map(item => ({
          ...item,
          isOpen: false,
        })),
      )
    }
  }

  const carouselProps = {
    dynamicHeight: true,
    showThumbs: false,
    showIndicators: false,
    showStatus: false,
  }

  return (
    <div id="gallery" className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-32">
        <div className="space-y-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-12 text-3xl font-extrabold sm:text-4xl sm:tracking-tight lg:text-5xl text-center">
              Діяльність фонду
            </h2>
            <div className="text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl">
              <p className="mb-4">
                - Приймаємо заявки на потреби безпосередньо від бійців Збройних
                Сил та Національної Гвардії України;
              </p>
              <p className="mb-4">
                - За період повномасштабної війни з 24.02.22 по 01.05.2022 на
                підтримку ЗСУ було витрачено більше{' '}
                <strong className="text-black whitespace-nowrap">
                  1,5 млн грн
                </strong>{' '}
                <em>
                  (знаходимо все: починаючи від медикаментів та взуття й
                  закінчуючи технічними приладами)
                </em>
              </p>
              <p className="mb-4">- Куплено 4 автомобілі на передову; </p>
              <p className="mb-4">
                - Кожного дня публікуємо звіти про покупки, щоб люди знали, куди
                ми витрачаємо кожну копійку.
              </p>
            </div>
          </div>
          <Carousel
            {...carouselProps}
            onSwipeEnd={handleSwipeEnd}
            className="sm:hidden"
          >
            {list.map((item, index) => (
              <div key={index} className="relative">
                {item.type === 'video' ? (
                  <>
                    {item.isOpen ? (
                      <video
                        src={item.url}
                        controls
                        autoPlay
                        className="w-full h-full"
                      />
                    ) : (
                      <>
                        <img src={item.thumbnail} alt="" className="relative" />
                        <PlayIcon
                          className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 group-hover:text-white"
                          onClick={e => {
                            e.stopPropagation()
                            handlePlay(index)
                          }}
                        />
                      </>
                    )}
                  </>
                ) : (
                  <img src={item.thumbnail || item.url} alt="" />
                )}
              </div>
            ))}
          </Carousel>
          <ul
            role="list"
            className="hidden space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8"
          >
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className="relative cursor-pointer group"
              >
                <img
                  className="object-cover h-96 w-full shadow-lg rounded-lg group-hover:shadow-xl"
                  src={item.thumbnail || item.url}
                  alt=""
                />
                {item.type === 'video' && (
                  <PlayIcon className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 group-hover:text-white" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {open &&
        createPortal(
          <div id="lightbox" className="hidden sm:block">
            <ReactImageVideoLightbox
              data={data}
              startIndex={currentIndex}
              showResourceCount={true}
              onCloseCallback={() => setOpen(false)}
            />
          </div>,
          document.body,
        )}
    </div>
  )
}

export default Gallery

import HeaderImage from '../assets/header.jpg'

function Header() {
  return (
    <div className="pt-0 pb-16 md:py-10 bg-black lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="flex items-center lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:h-auto lg:w-auto lg:max-w-full"
                src={HeaderImage}
                alt=""
              />
            </div>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 text-center lg:px-0 lg:text-left lg:flex lg:items-center z-10">
            <div className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              <p className="mb-8">
                Ми – благодійна організація, фонд «ПоПарам», що активно
                займається допомогою та підтримкою наших військових на передовій
                та найгарячіших точках воєнних дій в Україні.
              </p>
              <p>
                У нас найкоротший шлях від отримання військового запиту до
                виконання. Усвідомлена та системна допомога захисникам – наш
                спільний шлях до звільнення України!{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

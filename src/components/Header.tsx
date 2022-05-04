import HeaderImage from '../assets/header.jpg'

function Header() {
  return (
    <div className="pt-10 bg-black sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                <span className="block">Благодійний фонд</span>
                <span className="block">«ПоПарам»</span>
                <span className="pb-3 inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-sky-500 sm:pb-5">
                  Разом до перемоги!
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                Ми – благодійна організація, фонд «ПоПарам», що активно
                займається допомогою та підтримкою наших військових на передовій
                та найгарячіших точках воєнних дій в Україні.
              </p>
            </div>
          </div>
          <div className="mt-12 -mb-0 sm:-mb-18 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={HeaderImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

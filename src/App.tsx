import Navigation from './components/Navigation'
import Header from './components/Header'
import History from './components/History'
import Note from './components/Note'
import Gallery from './components/Gallery'
import Partners from './components/Partners'
import Requisites from './components/Requisites'

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Navigation />
        <main>
          <Header />
          <History />
          <Note />
          <Gallery />
          <Partners />
          <Requisites />
        </main>
      </div>
    </div>
  )
}

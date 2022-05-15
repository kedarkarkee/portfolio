import type { NextPage } from 'next'
import DeviceImage from '../components/Intro'
import Navigation from '../components/Navigation'

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full h-14 shadow-default flex items-center fixed top-0 z-50">
        <Navigation />
      </div>

      <div className='absolute top-0 right-10 -z-50'>
        <DeviceImage />

      </div>
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import About from '../components/About'
import ContactMe from '../components/Contact'
import Intro from '../components/Intro'
import Navigation from '../components/Navigation'
import Skills from '../components/Skills'
import ThingsIDo from '../components/Things'

const Home: NextPage = () => {
  return (
    <>
        <Navigation />
        <Intro />
        <img src='/top.svg' className='absolute top-0 right-0 -z-50 mob:hidden'/>
        {/* <div className="relative h-50">
         <img width='2000px' height='500px' src='/bottom.svg' className='absolute top-36 right-0 -z-50' /> */}
        <ThingsIDo />
        <About />
        <Skills />
        <ContactMe />
        <div className='m-52'></div>
        {/* </div> */}


    </>
  )
}

export default Home

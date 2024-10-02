import './App.css'

import Hero from './components/custom/Hero'

import LocomotiveScroll from 'locomotive-scroll';


function App() {
  
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className="w-full h-auto bg-zinc-900"></div>
       <Hero/>
    </>
  )
}

export default App


import {Navbar} from '../src/app/components/Navbar'
import {Hero} from '../src/app/components/Hero'
import {TrustMetrics} from '../src/app/components/TrustMetrics'
import {WhyChooseUs} from '../src/app/components/WhyChooseUs'
import {EngineeringPhilosophy} from '../src/app/components/EngineeringPhilosophy'
import {HowWeTeach} from '../src/app/components/HowWeTeach'
import {Courses} from '../src/app/components/Courses'
import {LabsFacilities} from '../src/app/components/LabsFacilities'
import {EngineeringProcess} from '../src/app/components/EngineeringProcess'

import {Footer} from '../src/app/components/Footer'

import './lin8';
function App() {


  return (
    <>
     <Navbar />
      <Hero />
      <TrustMetrics />
      
      <WhyChooseUs />
      <EngineeringPhilosophy />
      <HowWeTeach />
      <Courses />
      <LabsFacilities />
      {/* <StudentShowcase /> */}
      <EngineeringProcess />
      {/* <Testimonials /> */}
      <Footer />

    </>
  )
}

export default App

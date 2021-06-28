import React from 'react'
import { Button } from '../ButtonElement'
import {
  HeroBkg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper
} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBkg/>
      
      <HeroContent>
        <HeroH1>Nikhil Raina</HeroH1>
        <HeroH2>I like to Automate things.</HeroH2>
        <HeroP>
          I am a recent Graduate from RIT majoring in Computer Science and completing a Double Minor in Mathematics and Software Engineering.
          I have strong technical competency in Data Analysis, Data Structures and Algorithms while maintaining correct Software Development Practices. 
          I hold more than a year of experience in Startups with Full Stack, Native and Hybrid App Development.
        </HeroP>
        <HeroP>
        I desire in broadening my knowledge by solving complex problems and developing efficient systems. 
          Enjoy browsing this website!
        </HeroP>
        <HeroBtnWrapper>
          <Button to='contact' color='true' >
            Get in Touch
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      {/* <HeroImg> */}

      {/* </HeroImg> */}
    </HeroContainer>
  )
}

export default HeroSection

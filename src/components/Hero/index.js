import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
    HeroBtn, 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP
} from './HeroElements';

const Hero = () =>{
const [isOpen, setIsOpen]= useState(false)

const toggle = () =>{
    setIsOpen(!isOpen)
}

    return(
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Best service</HeroH1>
                    <HeroP>We create beauty with Love</HeroP>
                    <HeroBtn>Order your Treatment</HeroBtn>
                </HeroItems>
                </HeroContent>
            </HeroContainer>
    )
}

export default Hero;
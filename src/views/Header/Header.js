/*eslint-disable*/
import React , { useState, useEffect } from "react";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

export default function HeaderOverView(props) {

    const [color, setColor] = useState("celadonBlue");
    const { isPositionAbsolute } = props
    const colorChoice = isPositionAbsolute ? "transparent" : color
    const [dropdownHoverColor, setDropdownHoverColor] = useState("dark");
    
    
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const appBarIsTop = window.scrollY === 0;

            if(appBarIsTop) {
              setColor('celadonBlue')  , setDropdownHoverColor('dark')     
            } else setColor('dark') , setDropdownHoverColor('celadonBlue')
        })
    })
        
  return (  
    <Header
    absolute={isPositionAbsolute}
    brand="Souhail SOUID"
    links={<HeaderLinks dropdownHoverColor={dropdownHoverColor}  />}
    fixed
    color={colorChoice}
    changeColorOnScroll={{
      height: 400,
      color: colorChoice
    }}
    />
  );
}

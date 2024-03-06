import { CONTACTUSPAGE } from "../CONTACTUSPAGE/ContactUsPage.js";
import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ABOUTUSPAGE=(DIV)=>{

    DIV.innerHTML=`
    
    <header>
    
    <img id='BackIcon'  class='logo' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/arrow.png'/>

    <h1 class='CompanyName'>YUDESI ORGANIC SUPPLIES LIMITED</h1>

    <h1 class='HeaderData'  >
    
    <a class='HeaderData' href="#achievemnts">Archievements</a>

    </h1>

    <div class='Boodydata'>
    
    </div>

    </header>
    
    `
    const DATADIV=document.querySelector('.Boodydata')
    
    fetch('https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/abouts.txt')

    .then(res=>res.text())

    .then(data=>{

        DATADIV.innerHTML=data

    })

    const BackIcon=document.querySelector('#BackIcon');

    BackIcon.addEventListener('click',()=>{
        HOMEPAGE(DIV);
    })


}

export{ABOUTUSPAGE}
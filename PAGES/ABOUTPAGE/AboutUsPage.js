import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ABOUTUSPAGE=(DIV)=>{

    DIV.innerHTML=`
    
    <header>
    
    <img id='BackIcon'  class='logo' src='../../ASSETS/arrow.png'/>

    <h1 class='CompanyName'>YUDESI ORGANIC SUPPLIES LIMITED</h1>

    <h1 class='HeaderData' >Inquires</h1>

    <h1 class='HeaderData' >Updates</h1>

    <h1 class='HeaderData'  >
    
    <a class='HeaderData' href="#achievemnts">Archievements</a>

    </h1>

    <div class='Boodydata'>
    
    </div>

    </header>
    
    `
    const DATADIV=document.querySelector('.Boodydata')
    
    fetch('/ASSETS/abouts.txt')

    .then(res=>res.text())

    .then(data=>{

        DATADIV.innerHTML=data+`
        
        <div class='ContactUsDiv'>

        <img class='callimage' src='/ASSETS/call.png'/>

        </div>
        `

    })

    const BackIcon=document.querySelector('#BackIcon');

    BackIcon.addEventListener('click',()=>{
        HOMEPAGE(DIV);
    })

}

export{ABOUTUSPAGE}
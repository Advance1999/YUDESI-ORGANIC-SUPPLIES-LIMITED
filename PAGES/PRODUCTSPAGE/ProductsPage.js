import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const PRODUCTSPAGE=(DIV)=>{

   
    DIV.innerHTML=`
    
    <header>
    
    <img id='BackIcon'  class='logo' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/arrow.png'/>

    <h1 class='CompanyName'>YUDESI ORGANIC SUPPLIES LIMITED</h1>

    <h1 class='HeaderData'  >
    
    <a href="#achievemnts">Order Today</a>

    </h1>

    <div class='Boodydata'>
    
    </div>

    </header>
    
    `
    const DATADIV=document.querySelector('.Boodydata')
    
    fetch('https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/Products.txt')

    .then(res=>res.text())

    .then(data=>{

        DATADIV.innerHTML=data+`
        
        <div id='callnumber' class='ContactUsDiv'>

        <img class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/call.png'/>

        </div>
        `

    })

    const BackIcon=document.querySelector('#BackIcon');

    BackIcon.addEventListener('click',()=>{
        HOMEPAGE(DIV);
    })

    const callnumber = document.querySelector('#callnumber');

    callnumber.addEventListener('click', () => {
        const phoneNumber = '+256773456283'; 
        window.location.href = 'tel:' + phoneNumber;
    });
};

export{PRODUCTSPAGE}
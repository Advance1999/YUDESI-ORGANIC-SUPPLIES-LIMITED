import { HOMEPAGE } from "../HOMEPAGE/HomePage.js";

const CONTACTUSPAGE=(DIV)=>{

    DIV.innerHTML=`
    
    <header>
    
    <img id='BackIcon'  class='logo' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/arrow.png'/>

    <h1 class='CompanyName'>YUDESI ORGANIC SUPPLIES LIMITED</h1>

    <a class='HeaderData' href="#intouch">Intouch</a>

    </header>

    <div class='Boodydata'>

        <div class='contactUsSections'>

            <img class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/call.png'/>

            <img class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/location.png'/>

            <img class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/gmail-logo.png'/>

            <img class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/mailbox.png'/>

            <img class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/whatsapp.png'/>

        </div>

        <h1>PHYSICAL LOCATION<h1>

        <p class='Data'>

        We Are Located At <b>KEBULA,KADERUNA-BUDAKA DISTRICT</b>

        <br><br>

        P.O BOX 830053,BUDAKA

        </p>

        <h1>CONTACT NUMBER<h1>

        <p class='Data'>

        Contact Us on +256-773-456-283

        </p>

        
        <h1>EMAIL<h1>

        <p class='Data'>

        Send Us a Email at: yudesiorganicsuppliesltd@gmail.com

        </p>

        <h1>Whats App<h1>

        <p class='Data'>

        Send Us a Whats App Message on +256-773-456-283.

        </p>

        <h1>Reach Us Here</h1>

        <form id='intouch'>

            <input type="text" placeholder="Enter Sender Name">

            <input type="email" placeholder="Enter Sender Email">

            <input type="text" placeholder="Enter Sender Location">

            <input type="tel" placeholder="Enter Sender Phone Number">

            <input type="text" placeholder="Enter Subject Of Inqury">

            <textarea name=""  placeholder='Enter Your Message' id="" cols="30" rows="10"></textarea>

            <button>Send</button>


        </form>

    </div>
    
    `;

    const BackIcon=document.querySelector('#BackIcon');

    BackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV);

    })
    

}

export{CONTACTUSPAGE}
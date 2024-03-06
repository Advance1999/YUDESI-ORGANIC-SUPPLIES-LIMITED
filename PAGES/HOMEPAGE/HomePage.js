import { ABOUTUSPAGE } from "../ABOUTPAGE/AboutUsPage.js";
import { CONTACTUSPAGE } from "../CONTACTUSPAGE/ContactUsPage.js";
import { PRODUCTSPAGE } from "../PRODUCTSPAGE/ProductsPage.js";

const HOMEPAGE=(DIV)=>{

    DIV.innerHTML=`
    
    <header>
    
        <img  class='logo' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/WhatsApp Image 2024-02-11 at 16.19.25 (1).jpeg'/>

        <h1 class='CompanyName'>YUDESI ORGANIC SUPPLIES LIMITED</h1>
        

        <h1 id='AboutUs' class='HeaderData'>AboutUs</h1>

        <h1 id='Products' class='HeaderData' >Products</h1>

        <h1 id='ContactUs' class='HeaderData' >ContactUs</h1>

    </header>

    <div class='Boodydata'>

        <h1 class='APPHeader'>YUDESI ORGANIC SUPPLIES LTD</h1>

        
        <p>
        
        We are the Leading Afro-Organic and Natural Food Supplies Firm In Eastern Uganda Providing Quality Afro-Organic and Natural Produce in the Following Products:
        
        <br><br>
        &nbsp&nbsp&nbsp&nbsp Rice
        <br>
        &nbsp&nbsp&nbsp&nbspMaizeFlour
        <br>
        &nbsp&nbsp&nbsp&nbspCassavaFlour
        <br>
        &nbsp&nbsp&nbsp&nbspBeans
        <br>
        &nbsp&nbsp&nbsp&nbspSorghum 
        <br>
        &nbsp&nbsp&nbsp&nbspGroundNuts.
        <br><br>
        
        <h1 class='APPHeader'>LOCATION</h1>

        <p class='Location'>

        Yudesi Organic Supplies Limited is located At 

        <b>KEBULA,KADERUNA-BUDAKA DISTRICT</b> 

        </p>

        <div class='ImagesOfWork'>

            <div class='FoodWastage1'>
            
                <img class='FoodWastag'  src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/hardwork.jpg'/>

            </div>

            <div class='FoodWastage1'>
            
                <img class='FoodWastag' id='corrected'  src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/hard.jpg'/>

            </div>

            <div class='FoodWastage1'>
            
                <img class='FoodWastag' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/casaavaplantation.jpg'/>

            </div>

            <div class='FoodWastage1'>
            
                <img class='FoodWastag' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/sorghum.jpg'/>

            </div>

            <div class='FoodWastage1'>
            
                <img class='FoodWastag' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/cassava.jpg'/>

            </div>

            <div class='FoodWastage1'>
        
                <img class='FoodWastag' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/beans.jpg'/>

            </div>

        </div>

        <h1 class='APPHeader' id='ProductsPage'>SEE OUR PRODUCTS</h1>

        <h1 class='APPHeader' id='Breif'>BRIEF HISTROY</h1>

        <p class='Data' id='hidestory'>

        Yudesi Organic Supplies Ltd was founded in 2015 in an age when going organic & natural was still more of a luxury than a lifestyle. Our main goal – which remains true today – was to make quality organic & natural ingredients more accessible to regional customers, while making our credible farmers economically secure and productive. We recognized that there were so many farmers in communities who had the potential to offer high-quality products, but no way to scale or market them. Uganda is known within the region as a country that is blessed with plenty and a wide variety of food. Food varieties are as many as tribes, ranging from maize, beans, banana, cassava, sweet potatoes, millet, sorghum, rice, field peas, cow peas, pigeon peas, groundnuts, sim sim, soya bean, Irish potatoes to mention but a few.

        </p>

        <div class='contactUsSections'>

            <img id='number' class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/call.png'/>

            <img id='homegmail' class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/gmail-logo.png'/>

            <img id='homewhatsapp' class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/whatsapp.png'/>

        </div>
    
    </div>
    
    `;

    //Contact Us
    const number = document.querySelector('#number');

    number.addEventListener('click', () => {
        const phoneNumber = '+256775901235'; 
        window.location.href = 'tel:' + phoneNumber;
    });

    //whatsapp
    const homewhatsapp = document.querySelector('#homewhatsapp');

    homewhatsapp.addEventListener('click', () => {
        
        const phoneNumber = '+256775901235'; // Replace this with the phone number you want to message on WhatsApp
        const message = 'YUDESI ORGANIC SUPPLIES LIMITED'; // Optional: Replace this with the message you want to send
    
        // Constructing the WhatsApp URI
        let whatsappURI = 'https://wa.me/' + phoneNumber;
        if (message) {
            whatsappURI += '?text=' + encodeURIComponent(message);
        }
    
        // Opening WhatsApp
        window.location.href = whatsappURI;
        
    });

    //gmail
    const homegmail = document.querySelector('#homegmail');

    homegmail.addEventListener('click', () => {
        
        const emailAddress = 'yudesiorganicsuppliesltd@gmail.com'; // Replace this with the email address you want to open Gmail with
        const subject = 'Subject'; // Optional: Replace this with the subject of the email
        const body = 'Body'; // Optional: Replace this with the body of the email
    
        // Constructing the mailto URI
        let mailtoURI = 'mailto:' + encodeURIComponent(emailAddress);
        if (subject) {
            mailtoURI += '?subject=' + encodeURIComponent(subject);
        }
        if (body) {
            mailtoURI += (subject ? '&' : '?') + 'body=' + encodeURIComponent(body);
        }
    
        // Opening Gmail
        window.location.href = mailtoURI;
        
    });

    const ABOUTUS=document.querySelector('#AboutUs');

    ABOUTUS.addEventListener('click',()=>{
        ABOUTUSPAGE(DIV)
    })

    const PRODUCTS=document.querySelector('#Products');

    PRODUCTS.addEventListener('click',()=>{
        PRODUCTSPAGE(DIV)
    })

    const ContactUs=document.querySelector('#ContactUs');

    ContactUs.addEventListener('click',()=>{
        CONTACTUSPAGE(DIV)
    })
    
    const ProductsPage=document.querySelector('#ProductsPage');

    ProductsPage.addEventListener('click',()=>{
      
        PRODUCTSPAGE(DIV)
        
    })

    const Breif=document.querySelector('#Breif');

    const hidestory=document.querySelector('#hidestory');

    Breif.addEventListener('click',()=>{

        hidestory.style.display='block'
    })

}

export{HOMEPAGE}
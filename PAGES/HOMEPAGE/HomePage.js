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
        
        We are the Leading Afro-Organic and Natural Food Suppliers Firm In Eastern Uganda Providing Quality Afro-Organic and Natural Produce in the Following Sections.
        <br><br>
        Rice,Maize &nbsp Flour,Cassava &nbsp Flour,Beans,Sorghum and GroundNuts.
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

            Yudesi Organic Supplies Ltd was conceptualized in 2021 and has humble beginnings as a cassava farm in Budaka district. As the concept picked up, the company was formally registered with the government of Uganda on 11th December 2023. Yudesi Organic Supplies Ltd is a privately owned limited liability company located in Kebula, Kaderuna, Budaka District. Following years of acting as a trader in dry cassava chips and cassava flour, Maize Flour and Rice, the company intends to setup a factory in Kebula to build the capacity to instantly purchase and process Maize Flour, High Quality Cassava Flour (HQCF) and convert cassava peel waste to High-Quality Cassava Peel Mash (HQCPM) for Animal Feeds. The company is setting up a network of over 400 smallholder contract farmers who will produce and sell to the factory. With the setup of a modern processing factory using modern flash drying technology in Budaka, the company will be able to process and market 50 tons of Flour per day in the early stages of production.

            <br><br>

            Uganda is known within the region as a country that is blessed with plenty and a wide variety of food. Food varieties are as many as tribes, ranging from maize, beans, banana, cassava, sweet potatoes, millet, sorghum, rice, field peas, cow peas, pigeon peas, groundnuts, sim sim, soya bean, Irish potatoes to mention but a few.

            However, Uganda faces high levels of food loss and waste (FLW) along critical value chains. This is perpetuating food insecurity and compromising trade competitiveness.  Food losses and wastages arise mainly due to poor post-harvest handling practices and through the absence of adequate and appropriate food infrastructure in harvest and post-harvest systems. For example, during the preparation stages (poor drying leading to high moisture content) storage, transportation and processing.
            Moreover, the majority of the farmers still use rudimentary methods like drying on uncovered ground, storage in sacks or pouring on ground, hand shelling or beating. Drying and storing on ground makes agricultural produce become susceptible to discolouration, and contamination with foreign matters, termite damage, mould and debris

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
        const phoneNumber = '+256773456283'; 
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

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

            <img id='cccallnumber' class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/call.png'/>

            <img id='gmail' class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/gmail-logo.png'/>

            <img  id='whatsapp' class='callimage' src='https://advance1999.github.io/YUDESI-ORGANIC-SUPPLIES-LIMITED/ASSETS/whatsapp.png'/>

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

        Email Us at: yudesiorganicsuppliesltd@gmail.com

        </p>

        <h1>Whats App<h1>

        <p class='Data'>

        Send Us a Whats App Message on +256-775-901-235.

        </p>

        <h1>Reach Us Here</h1>

        <form id="intouch">
            <input type="text" placeholder="Enter Sender Name" id="senderName" required>
            <input type="email" placeholder="Enter Sender Email" id="senderEmail" required>
            <input type="text" placeholder="Enter Sender Location" id="senderLocation" required>
            <input type="tel" placeholder="Enter Sender Phone Number" id="senderPhoneNumber" required>
            <input type="text" placeholder="Enter Subject Of Inquiry" id="subject" required>
            <textarea placeholder="Enter Your Message" id="message" cols="30" rows="10" required></textarea>
            <button id='SendMessage' type="submit">Send</button>
        </form>
        
    

    </div>
    
    `;

    const BackIcon=document.querySelector('#BackIcon');

    BackIcon.addEventListener('click',()=>{

        HOMEPAGE(DIV);

    })

        //Contact Us
        const cccallnumber = document.querySelector('#cccallnumber');

        cccallnumber.addEventListener('click', () => {
            const phoneNumber = '+256773456283'; 
            window.location.href = 'tel:' + phoneNumber;
        });
    
        //whatsapp
        const whatsapp = document.querySelector('#whatsapp');
    
        whatsapp.addEventListener('click', () => {
            
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
        const gmail = document.querySelector('#gmail');
    
        gmail.addEventListener('click', () => {
            
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

        
        //Send Data
        document.getElementById("intouch").addEventListener("submit", function(event) {

            event.preventDefault(); // Prevent the default form submission

            const senderName = document.getElementById("senderName").value;
            const senderEmail = document.getElementById("senderEmail").value;
            const senderLocation = document.getElementById("senderLocation").value;
            const senderPhoneNumber = document.getElementById("senderPhoneNumber").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            
    
            // Constructing the mailto URI
            let mailtoURI = "mailto:yudesiorganicsuppliesltd@gmail.com";
            mailtoURI += `?subject=${encodeURIComponent(subject)}`;
            mailtoURI += `&body=Name: ${encodeURIComponent(senderName)}%0A`;
            mailtoURI += `Email: ${encodeURIComponent(senderEmail)}%0A`;
            mailtoURI += `Location: ${encodeURIComponent(senderLocation)}%0A`;
            mailtoURI += `Phone Number: ${encodeURIComponent(senderPhoneNumber)}%0A%0A`;
            mailtoURI += `Message: ${encodeURIComponent(message)}`;
    
            // Opening email client
            window.location.href = mailtoURI;
        });
        
    

}

export{CONTACTUSPAGE}

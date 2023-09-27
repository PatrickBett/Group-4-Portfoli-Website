const testimonials = document.getElementById("testimonials")//initialise

function displayTestimonials(){     
    //alert to be displayed when a button is clicked
    alert("This are our Testimonials")
}
//event listener to catch and respond to a click event
testimonials.addEventListener("click",displayTestimonials)



// //Event Listening to console log a messa
// const contact = document.getElementById("contact-no")
// function contactCode(){ 
//     console.log("contact number")    
// }
// contact.addEventListener("click",contactCode)



//Event Listening to change dedicated-div colors
const dedicatedDiv = document.getElementById("dedicated-team")
//change color to red on mouseover
function dedicatedFunction(){    
    dedicatedDiv.style.backgroundColor = "red";    
}
//change color back on mouseout
function defaultColor(){    
    dedicatedDiv.style.backgroundColor = "rgb(196, 211, 224)";    
}
//adding event Listeners
dedicatedDiv.addEventListener("mouseover",dedicatedFunction)
dedicatedDiv.addEventListener("mouseout", defaultColor) 
    




//Event Listening to change managed-team-div colors
const managedDiv = document.getElementById("managed-services")
//change color to red on mouseover
function managedFunction(){    
    managedDiv.style.backgroundColor = "red";    
}
//change color back on mouseout
function managedColor(){    
    managedDiv.style.backgroundColor = "rgb(196, 211, 224)";    
}
//adding event Listeners
managedDiv.addEventListener("mouseover",managedFunction)
managedDiv.addEventListener("mouseout", managedColor) 






//Arrow scroll to intro section
function scrollfunc(){
    const expsec = document.getElementById("intro");
    expsec.scrollIntoView({ behavior: "smooth" });

} 

const fadeBox = document.querySelectorAll('.aboutContain-nofade')
function ifinview(element){
    //Assigns the constant for checking to see if the 'element' is in the view point of user
    const inView = element.getBoundingClientRect()
    // only return if both of these are true, which is determined by the expressions (&& connects both expressions, similar to 'and' in python)
    return (
    //Basically for the first part, it means if the element (the textbox) is below/equal to the top of the viewport, whereas the second part of the || (or) basically determines if element is above/equal to the bottom 
    inView.top >= 0 && inView.bottom <= window.innerHeight //window.innerHeight represents the height of the viewport
    )
    
}

function whenScroll(){
    // This basically means for each element selected (there are 2 bc its from queryselectorall)
    fadeBox.forEach(element => {
        //If the element is in view (which in this case is the text box)
        if(ifinview(element)){
        //Then simply add the 'fade' add on, which if you check styles.css it would appear with 'opacity 1;'
            element.classList.add('fade')
        }
        else{
            //Removes the fade when not in viewport
            element.classList.remove('fade')
        }
    });
}


// I do this so that the window height (top of window number) is added by one so that when the arrow button is clicked, window size exceeds the intro bottom number (intro total height) which allows for the navbar to fade in. 
    const windowHeightplus = window.innerHeight + 1;
// Get intro 
const inIntro = document.getElementById('intro');
// Get navBar
const navBar = document.getElementById('navBar');

//Similar to before, function that determines if the intro bottom (intro height number) is in viewport of window height (+1). This command only captures the height and width of the section which is relative to the viewport (e.g. half of intro is displayed means intro has half the height number)
function isIntroInView() {
    //Firstly, gets the position of the intro section. All we need is the height tho (.top/.bottom)
    const IntroView = inIntro.getBoundingClientRect();
    //Return if the height of intro is less or equal to the viewport + 1.In simpler terms, this condition is checking if the bottom of the intro section has reached or passed the point right before the bottom of the viewport. The reason why +1 is neccessary is so that the viewport is slightly bigger, constatnly making into less than the bottom of the viewport, even if the top of the viewport is perfectly aligned with the top of intro
    return IntroView.bottom <= windowHeightplus;
}

//This function first gets information from 'isIntroInView', which it then determines if the navbar should be visible or hidden.
function introNav() {
    //If the height of intro is less/equal to viewport+1, show the navbar
    if (isIntroInView()) {
        navBar.classList.remove('hiddenNav');

    } 
    //Else, hide it
    else {
        navBar.classList.add('hiddenNav');
    }
}


//Makes windows 'listen' for the event 'scroll', which then with 'type function', operates the following functions
window.addEventListener("scroll", function() {
    introNav();
    whenScroll();
});
    
whenScroll();
introNav();

//'DOMContentLoaded only allows this code to run when everything in the website is  loaded ( indicates that your web page's structure and basic resources are available for scripting and interaction")
document.addEventListener("DOMContentLoaded", function() {
    const mainBig = document.getElementById("mainBig");
    const hellopopup = document.getElementById("hellopopup");
    const home = document.getElementById('body');
    // Listens for a click on 'Thomas Lenh/ mainBig', then when clicked, makes everything disapear except 'hellopopup'
    mainBig.addEventListener("click", function() {
      home.style.visibility = 'hidden';
      hellopopup.style.visibility = 'visible'; 
      home.style.overflow = 'hidden'; // Prevent scrolling

      
    });
    // Listens  for a click on the pop up, makes everything normal again
    hellopopup.addEventListener("click", function() {
      hellopopup.style.visibility = "hidden"; 
      home.style.visibility ='visible';
      home.style.overflow='auto'; //Allow scrolling
    });
  });



function openTab(tabthatisclicked){
    const tabshow = document.getElementById(tabthatisclicked);
    hideothertabs(tabthatisclicked);
    tabshow.style.visibility = 'visible';

}
function hideothertabs(donotinclude){
    const tabs = ['aboutword', 'skillsword', 'hobbiesword']

    tabs.forEach(tab => {
        if (tab !== donotinclude){
            const tabfromlist = document.getElementById(tab)
            tabfromlist.style.visibility = 'hidden'
            
        }
        
        
    });
}
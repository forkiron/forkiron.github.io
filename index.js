//Arrow scroll to intro section
function scrollfunc(){
    const expsec = document.getElementById("intro");
    expsec.scrollIntoView({ behavior: "smooth" });

} 


//Function that determines if the element is in user viewport
function ifinview(element){
    //Assigns the constant for checking to see if the 'element' is in the view point of user
    const inView = element.getBoundingClientRect()
    // only return if both of these are true, which is determined by the expressions (&& connects both expressions, similar to 'and' in python)
    return (
    //Basically for the first part, it means if the element (the textbox) is below/equal to the top of the viewport, whereas the second part of the || (or) basically determines if element is above/equal to the bottom 
    inView.top >= 0 && inView.bottom <= window.innerHeight //window.innerHeight represents the height of the viewport
    )
    
}

function whenScrollIntro(){
    const fadeBox = document.querySelectorAll('.aboutContain-nofade')

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


function whenScrollAbout() {
    const titlepart = ['subheadingmore', 'subheadingabout', 'subheadingme'];
    titlepart.forEach(title => {
        const currenttitle = document.getElementById(title);
        if (ifinview(currenttitle)) {
            if (currenttitle.id === 'subheadingmore') {
                
                currenttitle.style.opacity = '1';
                currenttitle.style.transition = 'opacity 3s ease-out'

            }
            if (currenttitle.id === 'subheadingabout') {
                
                currenttitle.style.opacity = '1';
                currenttitle.style.transition = 'opacity 8s ease-out'
            }
            if (currenttitle.id === 'subheadingme') {
                
                currenttitle.style.opacity = '1';
                currenttitle.style.transition = 'opacity 13s ease-out'
            }
            
        }
        else{
            currenttitle.style.opacity = '0'
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
    whenScrollIntro();
    whenScrollAbout();
});
    
whenScrollIntro();
introNav();
whenScrollAbout();

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


// when the tab title is clicked, bring in whatever tab is clicked
function openTab(tabthatisclicked, tabtitle, tabcolor){
    //Assign whatever tab is clicked to this constant to be used to set visible
    const tabshow = document.getElementById(tabthatisclicked);
    const tabtitleshow = document.getElementById(tabtitle);

    //First, hide all other tabs
    hideothertabs(tabthatisclicked, tabtitle);
    //Show the tab that is clicked
    tabtitleshow.style.textShadow = `0px 0px 20px ${tabcolor}`;
    tabshow.style.visibility = 'visible';

}
//hides all tabs except the one that is clicked, hence bringing in 'tabthatisclicked'
function hideothertabs(donotinclude, donotincludetitle){
    //Make a list with all the tabs that I have
    const tabs = ['aboutword', 'skillsword', 'hobbiesword']
    const tabtitles = ['aboutwordtitle', 'skillswordtitle', 'hobbieswordtitle']
    // for each loop (basically for-in) that goes through the list of tabs that I have 
    tabs.forEach(tab => {
        //if the tab in the list happens to NOT be equal to 'tabthatisclicked', proceed. This excludes 'tabthatisclicked' from being hidden
        if (tab !== donotinclude){
            //Find what tab it is by getting element with the id from list
            const tabfromlist = document.getElementById(tab);
            //make it hidden
            tabfromlist.style.visibility = 'hidden';
            
            
        }
    });
    //Pre much the same thing as above except with textshadow and tab titles
    tabtitles.forEach(tabtitle => {

        if (tabtitle !==donotincludetitle){
            const tabtitlefromlist = document.getElementById(tabtitle);
            //Remove the textshadow, but still enables :hover hence not using 'none'
            tabtitlefromlist.style.textShadow ='';

        }
    });
        
        
    
}
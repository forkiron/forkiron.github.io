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
            currenttitle.style.transition = 'opacity 1s ease-out'
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
function openTab(tabthatisclicked, tabtitle, tabcolor, tabunderline){
    //Assign whatever tab is clicked to this constant to be used to set visible
    const tabshow = document.getElementById(tabthatisclicked);
    const tabtitleshow = document.getElementById(tabtitle);
    const tabunderlineshow = document.getElementById(tabunderline);

    //First, hide all other tabs
    hideothertabs(tabthatisclicked, tabtitle, tabunderlineshow);
    //Show the tab that is clicked

    tabtitleshow.style.textShadow = `0px 0px 20px ${tabcolor}`;
    tabunderlineshow.style.opacity = '0.7'

    tabunderlineshow.style.animation = 'none'
    tabunderlineshow.offsetWidth; // Trigger a reflow to reset and recalculate

    if (tabunderline === 'aboutUnderline') {
        tabunderlineshow.style.animation = 'aboutUnderlineIn 0.5s ';
    } else if (tabunderline === 'hobbiesUnderline') {
        tabunderlineshow.style.animation = 'hobbiesUnderlineIn 0.5s ';
    } else if (tabunderline === 'skillsUnderline') {
        tabunderlineshow.style.animation = 'skillsUnderlineIn 0.5s ';

    }
    

    // Add the animation class to the tabunderline element
    //classlist add the underline
    tabshow.style.visibility = 'visible';

}
//hides all tabs except the one that is clicked, hence bringing in 'tabthatisclicked'
function hideothertabs(donotinclude, donotincludetitle, donotincludeunderline){
    //Make a list with all the tabs that I have
    const tabs = ['aboutword', 'skillsword', 'hobbiesword']
    const tabtitles = ['aboutwordtitle', 'skillswordtitle', 'hobbieswordtitle']
    const tabunderlines = ['aboutUnderline', 'hobbiesUnderline', 'skillsUnderline']
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
    tabunderlines.forEach(underline => {
        if (underline !== donotincludeunderline){
            const underlineselected = document.getElementById(underline)
            underlineselected.style.opacity = '0'
        }
    })
        
    
}

//placed outside because used in 2 functions
const meunderline = document.getElementById('meUnderline')
//Listen to when content is loaded then is a function that controlls the underline under 'me'
document.addEventListener("DOMContentLoaded", function (){
    
    const subheadingme = document.getElementById('subheadingme')
    

    //Listens to when the mouse enters the 'me' word
    subheadingme.addEventListener('mouseenter', function(){
        //When it does, make the underline appear, and also stretch out
        meunderline.classList.add('visibleUnderline')
    });
    //Listens to when the mouse leaves the 'me' word
    subheadingme.addEventListener('mouseleave', function(){
        //Function to find the current width of the underline
        checkUnderlineWidth();
        //Add another class which retracts the underline back to opacity 0
        meunderline.classList.add('invisibleUnderline');
        //Remove the other classlist which would otherwise prevent 'invisibleunderline' to retract due to css rules overlaying
        meunderline.classList.remove('visibleUnderline');
    });
       

});

//function that checks the width of the underline
function checkUnderlineWidth(){
    //.clientwidth finds width of an object
    const width = meunderline.clientWidth;
    console.log(width);
    //Create an animation rule that replicates 'invisibleunderline', just with the current width of the underline
    const animationRule = `@keyframes meunderlineback { 0% { width: ${width}px; opacity: 1; } 100% { width: 0; opacity: 0; } }`;
    //Locate the style sheet using .stylesheets
    const styleSheet = document.styleSheets[1];
    //In the stylesheet, delete the current rules, and more specifically, the width value of 'meunderlineback' to add the new/current width value
    styleSheet.deleteRule('meunderlineback');
    //Insert the rule, (which is why this keyframe rule is at the very top (ik this isn't very organized and efficient work))
    styleSheet.insertRule(animationRule);
}




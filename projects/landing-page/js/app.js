/**
 * Define Global Variables
 * 
*/
//Capturing all section elements in the page
const pageSections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




const getnavData = ()=> {
    
    const navData = [] // Array of objects of name and id 
    
    for(let el of pageSections){
        
        let elId = el.id; 
        
        const elChildren = el.children[0].childNodes;
        
        for(let childEl of  elChildren ){
            if(childEl.localName === 'h2'){
                let elName = childEl.innerText;
                navData.push({ elId, elName});
                break; 
            }
        }
    }
    //returning the array that has the data for every section
    return navData;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const naveBuild = () => {
    
    const navData = getnavData(); // storing the array of the sections data
    
    const navList = document.getElementById('navbar__list');

    
    for(let el of navData){ // creating nav elements and eppending them to the navbar
        const listEl = document.createElement('li');
        const anchorEl = document.createElement('a');
        anchorEl.innerText = el.elName;
        anchorEl.href = `#${el.elId}`;
        anchorEl.classList.add('menu__link')
        listEl.appendChild(anchorEl);
        navList.appendChild(listEl)
    }
    
    
}

// Add class 'active' to section when near top of viewport



const handelClassActive = (entries, observer) => {
    
    // capture any elements with the actice class
    const activeEls = document.querySelectorAll('.your-active-class');
     
        
    for(let el of entries){

        if( el.isIntersecting){
            
            for(let elem of activeEls){ // reomve the active calss from all elements
                elem.classList.remove('your-active-class')
               }
            el.target.classList.add('your-active-class'); // adding the class to the active element
        }

    }
        
    
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//Using the Intersection Observer API to capture active elements
let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
}


let observer = new IntersectionObserver(handelClassActive, options);


document.addEventListener('DOMContentLoaded', function () {
    
    naveBuild();
   
    for(let section of pageSections){// passing all the sectons to the observer functions
       observer.observe(section)
    }
    
    
    
    
})
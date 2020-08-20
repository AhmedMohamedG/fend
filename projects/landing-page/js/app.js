/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const pageSections = document.querySelectorAll('section');
console.log(pageSections);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const getnavData = ()=> {
    const navData = []
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
    console.log(navData)
    return navData;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const naveBuild = () => {
    
    const navData = getnavData();
    
    const navList = document.getElementById('navbar__list');

    
    for(let el of navData){
        const listEl = document.createElement('li');
        const anchorEl = document.createElement('a');
        anchorEl.innerText = el.elName;
        anchorEl.href = `#${el.elId}`;
        listEl.appendChild(anchorEl);
        console.log(listEl)
        navList.appendChild(listEl)
    }
    
    
}
document.addEventListener('DOMContentLoaded', function () {
    naveBuild();

    
})
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



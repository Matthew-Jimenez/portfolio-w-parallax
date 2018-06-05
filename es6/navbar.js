// get the navbar element
const navbar = document.querySelector('#navbar');


// add event listener on scroll
document.addEventListener('scroll', () => {

    // get the distance from the top of the navbar to the top of the window
    const distanceFromTop = navbar.offsetTop - window.scrollY;

    // if the navbar is at the top of the screen change its style
    if(distanceFromTop === 0){
        navbar.style.backgroundColor = "#ececece6";
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");        
    } 

    // else keep original style    
    if(distanceFromTop > 0) {
        navbar.style.backgroundColor = "#443e36";
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
    }
});
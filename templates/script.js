window.onload = function() {
    // Scroll to the top of the page on page load or refresh
    window.scrollTo(0, 0);
};

$(document).ready(function() {
    $('#carouselExampleIndicators').carousel(); // Initialize carousel
});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Change 50 to the desired scroll position
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Active class change script
$(document).ready(function() {
    // Add click event listener to all nav links
    $('.nav-link').click(function() {
        // Remove active class from all nav links
        $('.nav-link').removeClass('active');
        // Add active class to the clicked nav link
        $(this).addClass('active');
    });
});

var dt= document.getElementById('dt')
var end= document.getElementById('end')
var bt= document.getElementById('bt')
var cs= document.getElementById('cs')

var servicesblock1= document.getElementById('servicerightblock1')
var servicesblock2= document.getElementById('servicerightblock2')
var servicesblock3= document.getElementById('servicerightblock3')
var servicesblock4= document.getElementById('servicerightblock4')

end.addEventListener('click',()=>{
    servicesblock2.style.display='block'
    servicesblock1.style.display='none'
    servicesblock3.style.display='none'
    servicesblock4.style.display='none'
    // servicesblock2.style.background='red'
});
dt.addEventListener('click',()=>{
    servicesblock2.style.display='none'
    servicesblock1.style.display='block'
    servicesblock3.style.display='none'
    servicesblock4.style.display='none'
    // servicesblock2.style.background='red'
});
bt.addEventListener('click',()=>{
    servicesblock2.style.display='none'
    servicesblock1.style.display='none'
    servicesblock3.style.display='block'
    servicesblock4.style.display='none'
    // servicesblock2.style.background='red'
});
cs.addEventListener('click',()=>{
    servicesblock2.style.display='none'
    servicesblock1.style.display='none'
    servicesblock3.style.display='none'
    servicesblock4.style.display='block'
    // servicesblock2.style.background='red'
});

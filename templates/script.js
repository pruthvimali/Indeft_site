window.onload = function() {
    // Scroll to the top of the page on page load or refresh
    window.scrollTo(0, 0);
};

$(document).ready(function() {
    $('#carouselExampleIndicators').carousel(); // Initialize carousel
});
// window.addEventListener('scroll', function() {
//     var navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) { // Change 50 to the desired scroll position
//         navbar.style.backgroundColor = '#545'; // New background color when scrolled
//     } else {
//         navbar.style.backgroundColor = 'pink'; // Default background color
//     }
// });
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

var dt = document.getElementById('dt')
var end = document.getElementById('end')
var bt = document.getElementById('bt')
var cs = document.getElementById('cs')

var servicesblock1 = document.getElementById('servicerightblock1')
var servicesblock2 = document.getElementById('servicerightblock2')
var servicesblock3 = document.getElementById('servicerightblock3')
var servicesblock4 = document.getElementById('servicerightblock4')

end.addEventListener('click', () => {
    servicesblock2.style.display = 'block'
    servicesblock1.style.display = 'none'
    servicesblock3.style.display = 'none'
    servicesblock4.style.display = 'none'
        // servicesblock2.style.background='red'
});
dt.addEventListener('click', () => {
    servicesblock2.style.display = 'none'
    servicesblock1.style.display = 'block'
    servicesblock3.style.display = 'none'
    servicesblock4.style.display = 'none'
        // servicesblock2.style.background='red'
});
bt.addEventListener('click', () => {
    servicesblock2.style.display = 'none'
    servicesblock1.style.display = 'none'
    servicesblock3.style.display = 'block'
    servicesblock4.style.display = 'none'
        // servicesblock2.style.background='red'
});
cs.addEventListener('click', () => {
    servicesblock2.style.display = 'none'
    servicesblock1.style.display = 'none'
    servicesblock3.style.display = 'none'
    servicesblock4.style.display = 'block'
        // servicesblock2.style.background='red'
});



var dt= document.getElementById('dt')
var end1= document.getElementById('end1')



var servicestext1= document.getElementById('serviceblock1')
var servicestext2= document.getElementById('serviceblock2')
var servicestext3= document.getElementById('serviceblock3')
var servicestext4= document.getElementById('serviceblock4')


end1.addEventListener('click',()=>{
    servicestext2.style.display='flex'
    servicestext1.style.display='none'
    servicestext3.style.display='none'
    servicestext4.style.display='none'
    
    end1.style.background='black'
    dt1.style.background='none'
    cs1.style.background='none'

    bt1.style.background='none'

    end1.classList.add('btncolor');


    // servicesblock2.style.background='white'
});
dt1.addEventListener('click',()=>{
    servicestext2.style.display='none'
    servicestext1.style.display='flex'
    servicestext3.style.display='none'
    servicestext4.style.display='none'
    end1.style.background='none'
    dt1.style.background='black'
    cs1.style.background='none'
    bt1.style.background='none'

    dt1.classList.add('btncolor');
    // servicesblock2.style.background='white'
});

bt1.addEventListener('click',()=>{
    servicestext2.style.display='none'
    servicestext1.style.display='none'
    servicestext3.style.display='flex'
    servicestext4.style.display='none'

    end1.style.background='none'
    dt1.style.background='none'
    cs1.style.background='none'
    bt1.style.background='black'


    bt1.classList.add('btncolor');
    // servicesblock2.style.background='white'
});
cs1.addEventListener('click',()=>{
    servicestext2.style.display='none'
    servicestext1.style.display='none'
    servicestext3.style.display='none'
    servicestext4.style.display='flex'

    end1.style.background='none'
    dt1.style.background='none'
    cs1.style.background='black'
    bt1.style.background='none'


    cs1.classList.add('btncolor');
    // servicesblock2.style.background='white'
});

document.getElementById("contactBtn").addEventListener("click", function(){
    window.location.href="/Indeft_site/templates/contact_us.html"
})

// slider.js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        DelayNode:1000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });   
  // Adjust swiper height based on image height
  var swiper = new Swiper(".newmySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay:{
        DelayNode:1000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 
  
const typed = new Typed(".all-texts",{
    strings : ['Full-Stack Web Developer ', 'Passionate Coder  ', 'Engineering Student  '],
    typeSpeed : 60,
    backSpeed : 40 ,
    backDelay : 900,
    loop : true,

});


ScrollReveal({
    distance : '70px',
    duration : 2000 ,
    delay : 200 ,
});

ScrollReveal().reveal('.home-content , .heading', { origin : 'top'});
ScrollReveal().reveal('.home-img , .service-container ,.portfolio-box ', { origin : 'bottom'});
ScrollReveal().reveal('.home , .about-content, .services-box , .contact form', { origin : 'right'});
ScrollReveal().reveal('.about-img', { origin : 'left'});
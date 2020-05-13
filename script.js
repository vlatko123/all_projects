// Scroll function for the Navbar

// function checkScroll(){
//     let startScroll = $('.navbar').height() * 0.1; 
//     let logoWhite = 'img/logo-glyph-white-585e89bacf.svg';
//     let logoBlack = 'img/logo-glyph-black-eb012a8d0d.svg';

//     if($(window).scrollTop() > startScroll) {
//         $('.navbar').addClass('scrolled');
//         $('.links a').addClass('scrolled');
//         $('.redButton').addClass('scrolled');
//         $('.logo').attr('src', logoBlack);
   
//     } else {
//         $('.navbar').removeClass('scrolled');
//         $('.links a').removeClass('scrolled');
//         $('.redButton').removeClass('scrolled');
//         $('.logo').attr('src', logoWhite);
//     }
// }

// if($('.navbar').length > 0){
//     $(window).on('scroll load resize', function(){
//         checkScroll();
//     });
// }





let whiteLogo = './img/logo-glyph-white-585e89bacf.svg';
   let blackLogo = './img/logo-glyph-black-eb012a8d0d.svg';

   $(document).ready(function () {
       let scrollPosition = 0;
       let navbarHeight= $(".navbar").height();
       $(document).on('scroll', function () {
           scrollPosition = $(this).scrollTop();
           if (scrollPosition < navbarHeight ) {
               $('.navbar').css({ backgroundColor: 'transparent' });
               $('.black').css({color: "white"})
               $('.logoBlack').attr('src', whiteLogo);
           } else {
               $('.navbar').css({ backgroundColor: "white" });
               $('.black').css({color: "black"});
               $('.logoBlack').attr('src', blackLogo);

           }

       })

   })


   
// Images counter for the slider on the main page

let arr1 = ['./img/bg-home-1en-g-dffb5e429f.jpg', './img/bg-home-2fr-g-9686ea33b5.jpg', './img/bg-home-3jp-g-969ee82072.jpg', './img/bg-home-4de-g-f003213659.jpg'];
let arr2 = ['./img/bg2-home-1en-9f4d057d19.png', './img/bg2-home-2fr-dbdce2a284.png', './img/bg2-home-3jp-160577c279.png', './img/bg2-home-4de-69cf1d391c.png'];

let link1 = document.querySelector('.meet');
let link2 = document.querySelector('.right2');
let brojac = 0;

function slide() {
    link1.src = arr1[brojac];
    link2.src = arr2[brojac];

    brojac++;

    if (brojac >= arr1.length) {
        brojac = 0;
    }
}
setInterval(slide, 3000);







$('#down').click(function () {
    $('.inner-img img').animate({
        top: '-=200px'
    }, 'slow');
    $('.ipad').css({'overflow' :'hidden'})
});
 
$('#up').click(function () {
    $('.inner-img img').animate({
        top: '+=200px'
    }, 'slow');
    $('.ipad').css({'overflow' : 'hidden'})
});







$('#coding').on('click', function () {
    $('#twoOne').html(`
    <p>Web Design</p>
    <p>Mobile & App Design</p>
    <p>E-Commerce</p>
    <p>CMS (WordPress & Prestashop)</p>
    <p>UI • UX Responsive</p>
    <p>Templating</p>
    <p>Creative Front-End & Back-End Development</p>`);
})

$('#marketing').on('click', function () {
    $('#twoOne').html(`
    <p>Lead Generation</p>
    <p>Social Media Marketing</p>
    <p>Search Engine Optimization</p>
    <p>PPC and paid search management</p>
    <p>Strategy</p>
    <p>Display and Advertising Recapture Marketing</p>
    <p>Conversion Rate Optimisation</p>
    <p>Growth Hacking</p>
    <p>Side Project Marketing</p>
    <p>Email Marketing</p>
    <p>Content Marketing</p>
    <p>Digital Event Amplification</p>
    <p>Digital Marketing Trainings</p>`);
})

$('#branding').on('click', function () {
    $('#twoOne').html(`
    <p>Art & Creative Direction</p>
    <p>Brand Identity</p>
    <p>Logo Design</p>
    <p>Graphic Guidelines</p>
    <p>Illustration</p>
    <p>Typography</p>
    <p>Print</p>
    <p>Strategy</p>`);
})









// World time/clocks

let hourHand = document.getElementById('hour-hand');
let minsHand = document.getElementById('min-hand');
let usaHourHand = document.getElementById('usa-hour-hand');
let usaMinsHand = document.getElementById('usa-min-hand');
let torHourHand = document.getElementById('tor-hour-hand');
let torMinsHand = document.getElementById('tor-min-hand');
let lonHourHand = document.getElementById('lon-hour-hand');
let lonMinsHand = document.getElementById('lon-min-hand');
let hongKongHourHand = document.getElementById('hong-kong-hour-hand');
let hongKongMinsHand = document.getElementById('hong-kong-min-hand');
let bucHourHand = document.getElementById('buc-hour-hand');
let bucMinsHand = document.getElementById('buc-min-hand');

function initClock() {
    var date = new Date();
    var hour = date.getHours() % 12;
    var mins = date.getMinutes();
    var seconds = date.getSeconds();

    var hourDegrees = (hour * 30) + (0.5 * mins);
    var minsDegrees = (mins * 6) + (0.1 * seconds);

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    var estTime = new Date();
    var currentDateTimeCentralTimeZone = new Date(estTime.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    var usaMinutes = currentDateTimeCentralTimeZone.getMinutes();
    var usaHours = currentDateTimeCentralTimeZone.getHours();//new Date().getHours();
    var usaSeconds = currentDateTimeCentralTimeZone.getSeconds();

    var usaHourDegrees = (usaHours * 30) + (0.5 * usaMinutes);
    var usaMinsDegrees = (usaMinutes * 6) + (0.1 * usaSeconds);

    usaHourHand.style.transform = `rotate(${usaHourDegrees}deg)`;
    usaMinsHand.style.transform = `rotate(${usaMinsDegrees}deg)`;
    var torMinutes = currentDateTimeCentralTimeZone.getMinutes();
    var torHours = currentDateTimeCentralTimeZone.getHours();//new Date().getHours();
    var torSeconds = currentDateTimeCentralTimeZone.getSeconds();

    var torHourDegrees = (torHours * 30) + (0.5 * torMinutes);
    var torMinsDegrees = (torMinutes * 6) + (0.1 * torSeconds);

    torHourHand.style.transform = `rotate(${torHourDegrees}deg)`;
    torMinsHand.style.transform = `rotate(${torMinsDegrees}deg)`;

    var estTime = new Date();
    var currentDateTimeCentralTimeZone = new Date(estTime.toLocaleString('en-US', { timeZone: 'Europe/Belfast' }));
    var lonMinutes = currentDateTimeCentralTimeZone.getMinutes();
    var lonHours = currentDateTimeCentralTimeZone.getHours();//new Date().getHours();
    var lonSeconds = currentDateTimeCentralTimeZone.getSeconds();

    var lonHourDegrees = (lonHours * 30) + (0.5 * lonMinutes);
    var lonMinsDegrees = (lonMinutes * 6) + (0.1 * lonSeconds);

    lonHourHand.style.transform = `rotate(${lonHourDegrees}deg)`;
    lonMinsHand.style.transform = `rotate(${lonMinsDegrees}deg)`;

    var estTime = new Date();
    var currentDateTimeCentralTimeZone = new Date(estTime.toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong' }));
    var hongKongMinutes = currentDateTimeCentralTimeZone.getMinutes();
    var hongKongHours = currentDateTimeCentralTimeZone.getHours() + 1;//new Date().getHours();
    var hongKongSeconds = currentDateTimeCentralTimeZone.getSeconds();

    var hongKongHourDegrees = (hongKongHours * 30) + (0.5 * hongKongMinutes);
    var hongKongMinsDegrees = (hongKongMinutes * 6) + (0.1 * hongKongSeconds);

    hongKongHourHand.style.transform = `rotate(${hongKongHourDegrees}deg)`;
    hongKongMinsHand.style.transform = `rotate(${hongKongMinsDegrees}deg)`;

    var date = new Date();
    var bucHour = date.getHours() + 1;
    var bucMins = date.getMinutes();
    var bucSeconds = date.getSeconds();

    var bucHourDegrees = (bucHour * 30) + (0.5 * bucMins);
    var bucMinsDegrees = (bucMins * 6) + (0.1 * bucSeconds);

    bucHourHand.style.transform = `rotate(${bucHourDegrees}deg)`;
    bucMinsHand.style.transform = `rotate(${bucMinsDegrees}deg)`;
}

setInterval(initClock, 1000);

initClock();




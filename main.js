$(function () {

    AOS.init();

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




    var hourHand = document.getElementById('hour-hand');
    var minsHand = document.getElementById('min-hand');
    var usaHourHand = document.getElementById('usa-hour-hand');
    var usaMinsHand = document.getElementById('usa-min-hand');
    var torHourHand = document.getElementById('tor-hour-hand');
    var torMinsHand = document.getElementById('tor-min-hand');
    var lonHourHand = document.getElementById('lon-hour-hand');
    var lonMinsHand = document.getElementById('lon-min-hand');
    var hongKongHourHand = document.getElementById('hong-kong-hour-hand');
    var hongKongMinsHand = document.getElementById('hong-kong-min-hand');
    var bucHourHand = document.getElementById('buc-hour-hand');
    var bucMinsHand = document.getElementById('buc-min-hand');




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

    let plus = $('./img/ico-plus.png');
    let minus = $('./img/ico-minus-ecbddbabf0.png');
 
    $('.panel-title').on('click', function(){
        $('.pluvce').attr('src', minus);
    })


})

$(function(){
    $('.contacts__map-link').on('click',function(e){
        e.preventDefault();
        $('.contacts__map-link').removeClass('contacts__map-link--active');
        $(this).addClass('contacts__map-link--active');
        $('.contacts__map-item').removeClass('contacts__map-item--active');
        $($(this).attr('href')).addClass('contacts__map-item--active');
    });

    $('.comments__info-top').slick({
        fade: true,
        speed: 500,
        arrows:false,
        swipe:false,
        asNavFor: '.comments__info-bottom'
    });

    $('.comments__info-bottom').slick({
        fade: true,
        speed: 500,
        asNavFor: '.comments__info-top'
    });

    $(".star").rateYo({
        starWidth: "17px",
        ratedFill: "#E8505B",
        readOnly: true,
        spacing: "6px",
        "starSvg":'<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.79539 0.755196C8.13306 -0.076633 9.31085 -0.0766312 9.64852 0.755198L11.1738 4.51265C11.3138 4.85748 11.6337 5.09605 12.0041 5.13188L15.9497 5.51346C16.8088 5.59655 17.1662 6.65585 16.533 7.24241L13.4751 10.0752C13.2162 10.315 13.1029 10.6734 13.1769 11.0184L14.0623 15.1472C14.2478 16.0126 13.3007 16.6747 12.5517 16.2032L9.25472 14.1276C8.92912 13.9226 8.51479 13.9226 8.18919 14.1276L4.89217 16.2032C4.14324 16.6747 3.19608 16.0126 3.38163 15.1472L4.267 11.0184C4.34098 10.6734 4.22766 10.315 3.96881 10.0752L0.910923 7.24241C0.277755 6.65585 0.635152 5.59654 1.49425 5.51346L5.4398 5.13188C5.81023 5.09605 6.13012 4.85748 6.2701 4.51265L7.79539 0.755196Z"/></svg>',
    });
  
});
/* global ,$ ,console,alert*/
$(function(){
    'use strict';
    //trigger nice scroll plugin

    $("body").niceScroll();

    // change header hight

    $('.header').height($(window).height());

    //Scroll to Features

    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        },1000);
    });

    //show hidden items 
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(1000);
    });

    //check testmonial
     var   leftArrow = $('.testim .fa-chevron-left'),
           rightArrow = $('.testim .fa-chevron-right');
    function checkClients(){
       
        if ($('.client:first').hasClass('active')){
            leftArrow.fadeOut();

        }
        else{
            leftArrow.fadeIn();
        }

        if ($('.client:last').hasClass('active')){
            rightArrow.fadeOut();

        }
        else{
            rightArrow.fadeIn();
        }
    }
    checkClients();
});
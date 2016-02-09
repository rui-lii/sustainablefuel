$(document).ready(function(){
  var pScroll = 0;

  //Fade Animation for Landing Header

  $(window).scroll(function(){
    pScroll = $(this).scrollTop();
    console.log(pScroll);
    if (pScroll < $('.half-wrap')/*this is the element under the landing*/.offset().top) {
      $('.content-landing').css(
        'opacity', (1-(pScroll / 350))
      )
    }
  })

  //Animation for content-blocks
  $(window).scroll(function(){
    pScroll = $(this).scrollTop();
    if (pScroll > ($('.content-block-3').offset().top) - ($(window).height() / 1.2)) {
      $('.content-block-3 .content-block').each(function(i){
        setTimeout(function(){
          $('.content-block-3 .content-block').eq(i).addClass('translatex-fade');
        }, 200 * (i+1))
      })
    }
  })

  //Animation for layers

  var loffset = $('.loffset').offset();

  $(window).scroll(function(){
    pScroll = $(this).scrollTop();
    resize();
    if (pScroll > loffset.top){
      $('.top').css({
        'transform' : 'translate(0, 70%)'
      })
      $('.middle').css({
        'transform' : 'translate(0, -20%)'
      })
      $('.bottom').css({
        'transform' : 'translate(0, -110%)'
      })
    } else {
      $('.top').css({
        'transform' : 'translate(0, 30%)'
      })
      $('.middle').css({
        'transform' : 'translate(0, -30%)'
      })
      $('.bottom').css({
        'transform' : 'translate(0, -90%)'
      })
    }
  });

  var scroll_start = 0;
  var startoffset = $('.startchange').offset();
  var endoffset = $('.stopchange').offset();

  function resize(){
    $(window).resize(function(){
      hwindow = $(window).height();
      endoffset = $('.stopchange').offset().top;
      startoffset = $('.startchange').offset().top;
    })};

  //Animation for Team section depending on window width
  $(window).scroll(function(){
    scroll_start = $(this).scrollTop();
    resize();
    //console.log(scroll_start);
    if (scroll_start > (startoffset.top - ($(window).height() / 1.8)) && scroll_start < endoffset.top){
      $('.circles2').css({
        'transform' : 'translate(100%, 0)'
      })
      $('.circles3').css({
        'transform' : 'translate(-200%, 0)'
      })
      $('.circles4').css({
        'transform' : 'translate(0, 0)'
      })
      $('.circles5').css({
        'transform' : 'translate(0, 0)'
      })
    } else {
      $('.circles2').css({
        'transform' : 'translate(0, 0)'
      })
      $('.circles3').css({
        'transform' : 'translate(-100%, 0)'
      })
      $('.circles4').css({
        'transform' : 'translate(-230%, 0)'
      })
      $('.circles5').css({
        'transform' : 'translate(230%, 0)'
      })
    }
  });

  //Showcase code

  $('a.toggle').click(function(e){
    e.preventDefault();
  })

  $('a.label2-t').click(function(){
    $('.showcase-wrap .labelall').addClass('is-hidden');

    $('.showcase-wrap .label2').each(function(i){
      $('.showcase-wrap .label2').removeClass('is-hidden');
      $('.showcase-wrap .label2').addClass('is-showing');
    })
  })

  $('a.label3-t').click(function(){
    $('.showcase-wrap .labelall').addClass('is-hidden');

    $('.showcase-wrap .label3').each(function(i){
      $('.showcase-wrap .label3').removeClass('is-hidden');
      $('.showcase-wrap .label3').addClass('is-showing');
    })
  })

  $('a.label4-t').click(function(){
    $('.showcase-wrap .labelall').addClass('is-hidden');

    $('.showcase-wrap .label4').each(function(i){
      $('.showcase-wrap .label4').removeClass('is-hidden');
      $('.showcase-wrap .label4').addClass('is-showing');
    })
  })

  $('a.label5-t').click(function(){
    $('.showcase-wrap .labelall').addClass('is-hidden');

    $('.showcase-wrap .label5').each(function(i){
      $('.showcase-wrap .label5').removeClass('is-hidden');
      $('.showcase-wrap .label5').addClass('is-showing');
    })
  })

  $('a.labelall-t').click(function(){
    $('.showcase-wrap .labelall').each(function(i){
      $('.showcase-wrap .labelall').removeClass('is-hidden');
      $('.showcase-wrap .labelall').addClass('is-showing');
    })
  })

});

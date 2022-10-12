jQuery(document).ready(function ($) {


  // REMOVE SPINNER
  setTimeout(() => {
    $(".loader").fadeOut("slow");
  }, 1000);

  $('#openMenu').on('click', function (e){
    e.preventDefault()
    $('.header__menu').css('top', '0')
  })


  $('#closeMenu').on('click', function (e){
    e.preventDefault()
    $('.header__menu').css('top', ' -100%')
  })



  const topButton = document.getElementById("gotToTopButton");
  const headerNav = document.querySelector(".header__mobile-nav");
  topButton.addEventListener("click", topFunction);

  window.onscroll = function () {
    scrollFunction(topButton, headerNav);
  };


  // WOW JS 
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )

  setTimeout(()=>{
    wow.init();
  }, 1000)
});

function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }

  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    $(".event-details__container").css("bottom", "50px");
  } else {
    $(".event-details__container").css("bottom", "-250px");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


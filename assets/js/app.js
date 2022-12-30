jQuery(document).ready(function ($) {


  // REMOVE SPINNER
  setTimeout(() => {
    $(".loader").fadeOut("slow");
  }, 1000);

  $('#openMenu').on('click', function (e){
    e.preventDefault()
    $('.header__menu').css('top', '0')
  })


  $('#closeMenu').on('click', function (e) {
    e.preventDefault()
    $('.header__menu').css('top', ' -100%')
  })


  // RENDER MOBILE MENU
  mobileNavMenuRender();

  $('.header__menu__nav__items__item--nested').on('click', function (e) {
    e.preventDefault();
    $('.header__menu__nav__items__item--active').removeClass('header__menu__nav__items__item--active')
    $('.header__menu__nav__items--nested').hide()


    setTimeout(() => {
      $(this).toggleClass('header__menu__nav__items__item--active')
      $(this).find('> ul.header__menu__nav__items--nested').show()
    }, 10)
  })

  // $("[aria-expanded='true'] .icon").removeClass('icon-add').addClass('icon-mins').css('font-size', '4px')
  // $("[aria-expanded='true'] .icon")

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


function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		رجوع
	</a>
</li>`;

  navExpand.forEach((item) => {
    item
        .querySelector(".nav-expand-content")
        .insertAdjacentHTML("afterbegin", backLink);
    item
        .querySelector(".nav-link")
        .addEventListener("click", () => item.classList.add("active"));
    item
        .querySelector(".nav-back-link")
        .addEventListener("click", () => item.classList.remove("active"));
  });

  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");

  openMenuBtn.addEventListener("click", function () {
    $(".header__mobile").fadeIn("slow");
  });

  closeMenuBtn.addEventListener("click", function () {
    $(".header__mobile").fadeOut("slow");
  });
}

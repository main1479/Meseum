// ============================================
// ============================================
let navTrigger = document.querySelector('.nav__trigger');
let mobileNav = document.querySelector('.mobile__nav');
let nav = document.querySelector('.nav');
function navToggle(){
    mobileNav.classList.toggle('active');
    nav.classList.toggle('sticky');
}


$(".header_search button").click(function(){
    $(".header_search .search_box").fadeToggle();
  });

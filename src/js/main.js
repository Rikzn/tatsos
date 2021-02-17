import StickySidebar from 'sticky-sidebar-v2';
// import StickySidebar from 'sticky-sidebar';
import polyfills from './polyfills';
import detectTouch from './detectTouch';
import OnlyNumeric from './OnlyNumeric';
import FilterDropdowns from './FilterDropdowns';
import datefilter from './datefilter';
import tabs from './tabs';
import select from './select';
import clipboard from './clipboard';
import maskInput from './mask';
import sticky from './sticky';
import checkBox from './checkbox';
import slider from './slider';
import { async } from 'regenerator-runtime';
import select2 from 'select2';




document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    OnlyNumeric();
    FilterDropdowns();
    select();
    sticky();
    maskInput();
    slider();
    checkBox();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)

});


// Параллакс эффект 
const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth)
    tl.to(layer, {y: movement, top: -30, ease: "none"}, 0)
  });


  // скролл якоря 
  $(".menu-box").on("click", "a", function(event) {
    event.preventDefault();
    var anchorId  = $(this).attr("href");
    scrollingDistance = $(anchorId).offset().top - $(".menu-box").height();
    $("html, body").animate({scrollTop: scrollingDistance}, 800);
});



// добавление no-scroll для мобильной версии сайта 
if (window.matchMedia("(max-width:700px)").matches) {
  const close = document.querySelector('.history-form-setting__dropdown-svg');
  const overlay = document.querySelector('.history-form__group-dropdown');

  close.addEventListener('click', CloseWindow);
  overlay.addEventListener('click', CloseWindow);

  function CloseWindow() {
      const closeBtn = document.querySelector('.closeBtn');
      const noScroll = document.querySelector('body');
      closeBtn.classList.remove('active');
      noScroll.classList.remove('no-scroll');

    }
}


// Валидатор
// let validateForms = function(selector, rules, successModal) {
//     new window.JustValidate(selector, {
//         rules: rules,
//         submitHandler: function(form) {
//             let formData = new FormData(form);

//             let xhr = new XMLHttpRequest();

//             xhr.onreadystatechange = function() {
//                 if (xhr.readyState === 4) {
//                     if (xhr.status === 200) {
//                         console.log('Отправлено');
//                     }
//                 }
//             }

//             xhr.open('POST', 'mail.php', true);
//             xhr.send(formData);

//             form.reset();
//         }
//     });
// }

// validateForms('.js-form', { email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup');


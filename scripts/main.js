

    // Get the button
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


        // Get the button
        let mybutton1 = document.getElementById("ShowonScroll");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton1.style.display = "block";
          } else {
            mybutton1.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,

    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		navigator.serviceWorker
			.register("/scripts/serviceWorker.js")
			.then(res => console.log("service worker registered"))
			.catch(err => console.log("service worker not registered", err));
	});
}

$(document).ready(function(){
  $(".owl_content").owlCarousel({
    rewindNav: false,
    addClassActive: true, //important
    mouseDrag: false,
    afterAction: function add_mid_class(el){
      $('.owl-item')                     
        .removeClass('middle')
        .removeClass('middle_beside')
        .removeClass('next_to_mid')
        .removeClass('prev_to_mid');
      var middle_item = Math.floor($('.active').length / 2);
      middle_item --;
      $('.active').eq(middle_item - 1).addClass('middle_beside');
      $('.active').eq(middle_item).addClass('middle');
      $('.active').eq(middle_item + 1).addClass('middle_beside');
      $('.active').eq(middle_item + 1).nextAll().addClass('next_to_mid');
      $('.active').eq(middle_item - 1).prevAll().addClass('prev_to_mid');
    }
  });

  var owl = $(".owl_content").data('owlCarousel');
  $('.owl_wrapper .next').click(function(){owl.next();});
  $('.owl_wrapper .prev').click(function(){owl.prev();});
});

function redirect() {
        window.location.href = "Details.html";
    }


// Get the button:
let mybutton = document.getElementById("back-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 20 || window.pageYOffset > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


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
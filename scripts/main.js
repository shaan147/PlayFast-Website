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
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scroll down, hide the footer menu and show the join game button
    document.querySelector(".fixed-bottom").classList.add("showonMobile");
    document.querySelector("#ShowonScroll").classList.remove("d-none");
  } else {
    // Scroll up, hide the join game button and show the footer menu
    document.querySelector("#ShowonScroll").classList.add("d-none");
    document.querySelector(".fixed-bottom").classList.remove("showonMobile");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction);

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
window.addEventListener("scroll", scrollFunction1);

function scrollFunction1() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton1.style.display = "block";
  } else {
    mybutton1.style.display = "none";
  }
}

function handlePayment() {
  var paymentMethod = document.querySelector(
    'input[name="payment"]:checked'
  ).value;

  if (paymentMethod === "credit_card") {
    // Show modal for credit card payment
    $("#paymentModal").modal("show");
  } else if (paymentMethod === "advance_payment") {
    // Redirect to next page for advance payment
    window.location.href = "P2.html";
  } else if (paymentMethod === "account_balance") {
    // Redirect to another page for account balance payment
    window.location.href = "P4.html";
  }
}
// function redirectToPage() {
//   var selectedOption = document.querySelector('input[name="payment"]:checked').value;
//   switch (selectedOption) {
//     case 'advance_payment':
//       window.location.href = 'P2.html';
//       break;

//     default:
//       // If no option is selected, do nothing or handle it as needed
//       break;
//   }
// }
// Function to show modal when the radio button is clicked
document.getElementById("payment1").addEventListener("click", function () {
  document.getElementById("modalTrigger").click();
});

document.getElementById("payment3").addEventListener("click", function () {
  document.getElementById("modalTrigger2").click();
});

$(document).ready(function () {
  $(".owl_content").owlCarousel({
    rewindNav: false,
    addClassActive: true, //important
    mouseDrag: false,
    afterAction: function add_mid_class(el) {
      $(".owl-item")
        .removeClass("middle")
        .removeClass("middle_beside")
        .removeClass("next_to_mid")
        .removeClass("prev_to_mid");
      var middle_item = Math.floor($(".active").length / 2);
      middle_item--;
      $(".active")
        .eq(middle_item - 1)
        .addClass("middle_beside");
      $(".active").eq(middle_item).addClass("middle");
      $(".active")
        .eq(middle_item + 1)
        .addClass("middle_beside");
      $(".active")
        .eq(middle_item + 1)
        .nextAll()
        .addClass("next_to_mid");
      $(".active")
        .eq(middle_item - 1)
        .prevAll()
        .addClass("prev_to_mid");
    },
  });

  var owl = $(".owl_content").data("owlCarousel");
  $(".owl_wrapper .next").click(function () {
    owl.next();
  });
  $(".owl_wrapper .prev").click(function () {
    owl.prev();
  });
});

function redirect() {
  window.location.href = "Details.html";
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

document.getElementById("downloadAndroidApp").addEventListener("click", () => {
  if (deferredPrompt) {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      }
      deferredPrompt = null;
    });
  }
});

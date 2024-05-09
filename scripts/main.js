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

var last_scroll_pos = 0;
var navbar = document.getElementById("ShowonScroll");
window.addEventListener("scroll", function () {
  if (!navbar) return;
  var scroll_pos = window.scrollY;
  if (scroll_pos > last_scroll_pos) {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
  last_scroll_pos = scroll_pos;
});

// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (!mybutton) return;

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
var mybutton1 = document.getElementById("ShowonScroll");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction1);

function scrollFunction1() {
  if (!mybutton1) return;
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
    window.router.setRoute("/p2");
  } else if (paymentMethod === "account_balance") {
    // Redirect to another page for account balance payment
    window.router.setRoute("/p4");
  }
}
// function redirectToPage() {
//   var selectedOption = document.querySelector('input[name="payment"]:checked').value;
//   switch (selectedOption) {
//     case 'advance_payment':
// window.router.setRoute("/p2");
//       break;

//     default:
//       // If no option is selected, do nothing or handle it as needed
//       break;
//   }
// }
// Function to show modal when the radio button is clicked
document.getElementById("payment1")?.addEventListener("click", function () {
  document.getElementById("modalTrigger").click();
});

document.getElementById("payment3")?.addEventListener("click", function () {
  document.getElementById("modalTrigger2").click();
});

function redirect() {
  window.router.setRoute("/details");
}

var deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

document.getElementById("downloadAndroidApp")?.addEventListener("click", () => {
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

// document.querySelector("#add-a-friend-1")?.addEventListener("click", () => {
//   $("body").addClass("modal-open");
//   $("#exampleModalToggle5").modal("show");
// });

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  const modalToggle = new bootstrap.Modal(modal);
  modalToggle.show();
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  });
});

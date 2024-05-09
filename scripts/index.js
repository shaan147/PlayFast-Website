// Get the button:
var mybutton1 = document.getElementById("back-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (mybutton1 === null) {
    return;
  }
  if (window.scrollY > 20 || window.pageYOffset > 20) {
    mybutton1.style.display = "block";
  } else {
    mybutton1.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton1?.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

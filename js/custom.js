import AOS from "aos";
import "aos/dist/aos.css";

function copyToClipboardEmail() {
  var email = document.getElementById("email");
  email.select();
  document.execCommand("copy");
  var emailAlert = document.getElementById("emailAlert");
  emailAlert.style.display = "block";
  setTimeout(() => {
    emailAlert.style.display = "none";
  }, 2000);
}

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(".collapse").collapse({
  toggle: false
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

$(function() {
  AOS.init({
    once: true,
    offset: 100,
    easing: "ease-out",
    duration: 400
  });
});

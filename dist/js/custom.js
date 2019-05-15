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

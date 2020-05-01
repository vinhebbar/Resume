function fd() {
  var v = document.getElementById("fd1");

  if (v.value.trim() == "") {
    alert("Feedback cannot be empty");
  } else {
    c = confirm(
      "Your feedback will be submitted through WhatsApp, Press OK to Confirm"
    );

    if (c == true) {
      url = "https://wa.me/919900991692?text=" + encodeURIComponent(v.value);
      window.open(url);
    } else {
      alert("Feedback not submitted");
    }
  }
}

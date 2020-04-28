function fd() {
  v = document.getElementById("fd1");

  if (v.value.trim() == "") {
    alert("Feedback cannot be empty");
  } else {
    v = document.getElementById("fd1").value.split(" ").join("+");
    c = confirm(
      "Your feedback will be submitted through WhatsApp Press OK to Confirm"
    );

    if (c == true) {
      url = "https://wa.me/919900991692?text=" + v;
      window.open(url, "_blank");
     }
    else {
       alert('Feedback not submitted')
     }
  }
}

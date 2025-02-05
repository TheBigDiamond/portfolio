function sendMail(event) {
  event.preventDefault(); // Impedisce l'invio del form

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .sendForm("service_rz25ays", "contact_form", parms)
    .then(alert("Email sent!"));
}

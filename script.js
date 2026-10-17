
document.getElementById("year").textContent =
  new Date().getFullYear();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please complete all fields.";
    return;
  }

  const subject = encodeURIComponent(
    "Website project inquiry from " + name
  );

  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nProject details:\n" + message
  );

  status.textContent =
    "Opening your email app...";

  const mailtoLink =
  "mailto:mrshohag88990@gmail.com?subject=" +
  subject + "&body=" + body;

const gmailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=mrshohag88990@gmail.com" +
  "&su=" + subject + "&body=" + body;

window.location.href = gmailLink;

});

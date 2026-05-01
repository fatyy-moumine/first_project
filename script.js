const form = document.querySelector("#Contact form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  alert("Thank you! Your message has been sent successfully.");
});

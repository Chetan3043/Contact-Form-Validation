document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // Validate Name
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email with regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    messageError.textContent = "Message cannot be empty.";
    isValid = false;
  }

  // If all valid
  if (isValid) {
    successMessage.textContent = "Message submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});

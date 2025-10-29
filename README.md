📩 Contact Form with JavaScript Validation

A simple and responsive Contact Form built using HTML, CSS, and JavaScript.
This project validates user inputs (Name, Email, and Message) on the client side before submission — ensuring clean and correct data entry.

Objective

To create a functional contact form with:
Input validation for name, email, and message fields
Error messages for invalid inputs
Success message on valid submission (without actual form sending)

🧰 Tools Used

HTML5 – Structure of the form,
CSS3 – Styling and layout,
JavaScript (Vanilla JS) – Form validation logic,
VS Code – Code editor,
Chrome Browser – Testing and debugging

🧩 Features

✅ Error messages shown under invalid fields
✅ Prevents form submission if any field is empty or invalid
✅ Displays success message when all inputs are valid
✅ Autocomplete suggestions disabled for privacy
✅ Fully responsive and clean UI

🧾 Form Validation Rules
Field	Validation Rule
Name	Cannot be empty
Email	Must follow valid email format (e.g., name@example.com)
Message	Cannot be empty

🧱 Project Structure
📁 Contact-Form-Validation
│
├── index.html       # Form structure
├── style.css        # Styling of form
└── script.js        # Validation logic

🧑‍💻 How to Run

Open the project folder in VS Code
Right-click on index.html → Click "Open with Live Server" (or open directly in Chrome)
Try submitting the form:
Leave fields empty → Shows error messages
Enter invalid email → Shows invalid email warning
Enter all valid details → Displays success message

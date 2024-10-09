document.getElementById("registrationForm").addEventListener("submit", function(event) {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
  
    // Validation checks
    if (!fullName || !email || !password || !gender) {
      alert("Please fill in all required fields.");
      event.preventDefault(); // Prevent form submission
      return;
    }
  
    if (hobbies.length === 0) {
      alert("Please select at least one hobby.");
      event.preventDefault();
      return;
    }
  
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }
  
    // Successful validation message
    alert("Form submitted successfully!");
  });
  

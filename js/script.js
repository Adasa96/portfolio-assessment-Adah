 document.addEventListener('DOMContentLoaded', function() {
      const paragraph = document.getElementById('paraJs');
      const buttonClick = document.getElementById('clickEffect');
      const form = document.getElementById('contactForm');
      const formMessage = document.getElementById('formMessage');
      const themeToggle = document.getElementById('themeToggle');
      const body = document.body;

      // Change content
      buttonClick.addEventListener('click', function() {
        paragraph.innerHTML = "Thanks for clicking! Let’s build something amazing together!";
        buttonClick.disabled = true;
      });

      // Toggle theme
      themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        themeToggle.innerText = body.classList.contains('light-mode')
          ? 'Switch to Dark Mode'
          : 'Switch to Light Mode';
      });

      // Form validation
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phoneNo').value.trim();
        const name = document.getElementById('fName').value.trim();

        if (email === '' || phone === '' || name === '') {
          formMessage.innerHTML = '<span class="text-danger">Please fill all fields correctly!</span>';
        } else {
          formMessage.innerHTML = '<span class="text-success">Form submitted successfully. Thank you!</span>';
          form.reset();
        }
      });
    });
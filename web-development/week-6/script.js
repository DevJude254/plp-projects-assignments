// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Interactive Feature 1: Image Gallery ---
    // This section controls the simple image gallery.
    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Array of image sources
    const images = [
        'https://via.placeholder.com/600x300/FFC107/000000?text=Image+1',
        'https://via.placeholder.com/600x300/DC3545/FFFFFF?text=Image+2',
        'https://via.placeholder.com/600x300/28A745/FFFFFF?text=Image+3',
        'https://via.placeholder.com/600x300/17A2B8/FFFFFF?text=Image+4'
    ];
    let currentImageIndex = 0;

    // Event listener for the "Next" button
    nextBtn.addEventListener('click', () => {
        // Increment index, or loop back to 0 if at the end
        currentImageIndex = (currentImageIndex + 1) % images.length;
        galleryImage.src = images[currentImageIndex];
    });

    // Event listener for the "Previous" button
    prevBtn.addEventListener('click', () => {
        // Decrement index, or loop to the end if at the beginning
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        galleryImage.src = images[currentImageIndex];
    });


    // --- Interactive Feature 2: Dark Mode Toggle ---
    // This section handles toggling a 'dark-mode' class on the body.
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });


    // --- Custom Form Validation ---
    // This section handles the validation for the contact form.
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    // Listen for the form's submit event
    contactForm.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        let isValid = true;

        // Clear previous messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formSuccess.textContent = '';

        // 1. Validate Name: Must not be empty
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        // 2. Validate Email: Must be a valid format using a simple regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // 3. Validate Message: Must not be empty
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message cannot be empty.';
            isValid = false;
        }

        // If all fields are valid, show success message and reset form
        if (isValid) {
            formSuccess.textContent = 'Thank you! Your message has been sent.';
            contactForm.reset(); // Clears all form fields
        }
    });
});
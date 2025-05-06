 // Navbar scroll effect
 window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled', 'shadow-sm');
        navbar.classList.remove('py-3');
        navbar.classList.add('py-2');
    } else {
        navbar.classList.remove('nav-scrolled', 'shadow-sm');
        navbar.classList.remove('py-2');
        navbar.classList.add('py-3');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});

// Color selection
const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove selected class from all options
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        // Add selected class to clicked option
        this.classList.add('selected');
        // Update hidden input value
        document.getElementById('color').value = this.dataset.color;
    });
});

// Form validation and submission
document.getElementById('preorder-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (!name || !email || !phone) {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Form',
            text: 'Please fill in all required fields.',
            confirmButtonColor: '#f27474'
        });
        return;
    }
    
    if (!document.getElementById('terms').checked) {
        Swal.fire({
            icon: 'error',
            title: 'Terms Required',
            text: 'You must agree to the terms and conditions.',
            confirmButtonColor: '#f27474'
        });
        return;
    }
    
    
    // Get form values
    const formData = {
        name: name,
        email: email,
        phone: phone,
        storage: document.getElementById('storage').value,
        color: document.getElementById('color').value,
        notes: document.getElementById('notes').value
    };
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    Swal.fire({
        icon: 'success',
        title: 'Pre-Order Received!',
        text: 'Thank you for your pre-order! We will contact you soon with more details.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      
    
    // Reset form
    this.reset();
    document.getElementById('color').value = 'phantom-black';
    colorOptions.forEach(opt => opt.classList.remove('selected'));
    document.querySelector('.color-option[data-color="phantom-black"]').classList.add('selected');
});

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);

   


});
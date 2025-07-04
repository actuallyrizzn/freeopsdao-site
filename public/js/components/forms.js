function initForms() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Form validation (keep this for UX, but do not hijack submit)
    const validateField = (field) => {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
                errorMessage = 'Please enter a valid email address';
                break;
                
            case 'text':
                isValid = value.length >= 2;
                errorMessage = 'This field is required';
                break;
                
            case 'textarea':
                isValid = value.length >= 10;
                errorMessage = 'Please enter at least 10 characters';
                break;
        }
        
        // Update field state
        field.classList.toggle('error', !isValid);
        
        // Update error message
        let errorElement = field.parentElement.querySelector('.error-message');
        if (!errorElement && !isValid) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            field.parentElement.appendChild(errorElement);
        }
        
        if (errorElement) {
            errorElement.textContent = isValid ? '' : errorMessage;
        }
        
        return isValid;
    };
    
    // Real-time validation
    const fields = contactForm.querySelectorAll('input, textarea');
    fields.forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                validateField(field);
            }
        });
    });
    // DO NOT hijack the submit event. Let the form submit natively to contact_submit.php
}

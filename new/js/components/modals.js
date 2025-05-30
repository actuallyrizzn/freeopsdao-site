function initModals() {
    // Create modal container if it doesn't exist
    let modalContainer = document.querySelector('.modal-container');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        document.body.appendChild(modalContainer);
    }
    
    // Handle modal triggers
    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            openModal(modalId);
        });
    });
    
    // Close modal when clicking outside
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            closeModal();
        }
    });
    
    // Close modal when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(modalId) {
    const modalContainer = document.querySelector('.modal-container');
    const modal = document.getElementById(modalId);
    
    if (!modalContainer || !modal) return;
    
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    
    // Add modal to container
    modalContainer.appendChild(backdrop);
    modalContainer.appendChild(modal);
    
    // Show modal
    modalContainer.classList.add('active');
    modal.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus first focusable element
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) {
        focusableElements[0].focus();
    }
}

function closeModal() {
    const modalContainer = document.querySelector('.modal-container');
    const modal = modalContainer.querySelector('.modal.active');
    const backdrop = modalContainer.querySelector('.modal-backdrop');
    
    if (!modalContainer || !modal) return;
    
    // Hide modal
    modal.classList.remove('active');
    modalContainer.classList.remove('active');
    
    // Remove modal and backdrop after animation
    setTimeout(() => {
        if (backdrop) backdrop.remove();
        modal.remove();
        
        // Restore body scroll
        document.body.style.overflow = '';
    }, 300);
}

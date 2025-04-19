// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
    // Get modal elements
    const modal = document.getElementById('backofficeModal');
    const modalTriggers = document.querySelectorAll('[data-open-modal="backoffice"]');
    const closeModal = modal.querySelector('.close-modal');

    // Open modal when trigger is clicked
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when X is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

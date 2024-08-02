document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-message');
    const chiefMessage = document.getElementById('chief-message');
    
    toggleButton.addEventListener('click', () => {
        if (chiefMessage.style.display === 'none') {
            chiefMessage.style.display = 'block';
            toggleButton.textContent = 'Read Less';
        } else {
            chiefMessage.style.display = 'none';
            toggleButton.textContent = 'Read More';
        }
    });
});

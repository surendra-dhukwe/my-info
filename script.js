document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    const skillInfo = document.getElementById('skillInfo');

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            // Reset all cards
            skillCards.forEach(c => {
                c.style.background = '#0d6efd';
                c.style.color = '#fff';
                c.classList.remove('clicked');
            });

            // Highlight clicked card
            card.style.background = '#2575fc';
            card.style.color = '#fff';
            card.classList.add('clicked');

            // Remove bounce after animation
            card.addEventListener('animationend', () => {
                card.classList.remove('clicked');
            }, { once: true });

            // Update info box without scrolling
            skillInfo.innerHTML = `<strong>${card.dataset.name}</strong>: ${card.dataset.info}`;
        });
    });

    // Resume download
document.getElementById('downloadBtn').addEventListener('click', function() {
    const resume = document.getElementById('resume');

    // Show resume temporarily
    resume.style.display = 'block';

    html2pdf().set({
        margin: [0.4, 0.4, 0.4, 0.4], // top, left, bottom, right
        filename: 'Surendra_Dhukwe_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, scrollY: 0 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).from(resume).save().then(() => {
        // Hide again after PDF is saved
        resume.style.display = 'none';
    });
});
});
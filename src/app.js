document.addEventListener("DOMContentLoaded", function () {
    
    // Add scroll animation triggers for project cards
    const projectCards = document.querySelectorAll('.project-flip-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Add a simple fade-in/up class via Javascript logic 
                // (You can also expand app.css with these classes if you want CSS keyframes)
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectCards.forEach(function(card, index) {
        // Set initial states
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`;
        
        sectionObserver.observe(card);
    });
});
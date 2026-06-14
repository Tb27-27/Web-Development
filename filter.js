"use strict";
/**
 * Bronvermeldingen:
 * - DOMContentLoaded: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
 * - querySelectorAll: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 * - forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * - classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 */
document.addEventListener("DOMContentLoaded", () => {
    // Pak de knoppen en kaarten uit de HTML
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-flip-card");
    
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Reset eerst alle knoppen
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            });
            
            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");
            
            const filterValue = button.getAttribute("data-filter");
            
            projectCards.forEach(card => {
                var _a;
                // Laat alles zien als 'All Projects' is gekozen
                if (filterValue === "all") {
                    card.classList.remove("hidden");
                    return;
                }
                
                const badges = card.querySelectorAll(".technology-badge");
                let hasMatch = false;
                
                // Kijk of er een badge is die overeenkomt met de gekozen filter
                badges.forEach(badge => {
                    if (((_a = badge.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === filterValue) {
                        hasMatch = true;
                    }
                });
                
                if (hasMatch) {
                    card.classList.remove("hidden");
                }
                else {
                    card.classList.add("hidden");
                }
            });
        });
    });
});

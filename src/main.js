import './style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(
  {
    duration: 1000,
    offset: 100,
  }
);


document.addEventListener("DOMContentLoaded", () => {
    const toggleIcons = document.querySelectorAll(".toggle-response");

    const links = document.querySelectorAll('.nav-link');

    // 1. Restaurer l'onglet actif depuis localStorage
    const activeId = localStorage.getItem('activeNav');
    if (activeId) {
      const activeLink = document.querySelector(`.nav-link[data-id="${activeId}"]`);
      if (activeLink) {
        activeLink.classList.add('text-green-500');
      }
    }

    // 2. Gérer le clic
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        // Empêche la navigation si href="#"
        if (link.getAttribute("href") === "#") {
          event.preventDefault();
        }

        // Supprimer la classe active des autres liens
        links.forEach(l => l.classList.remove('text-green-500'));

        // Ajouter la classe active au lien cliqué
        link.classList.add('text-green-500');

        // Sauvegarder l'ID dans localStorage
        const linkId = link.getAttribute('data-id');
        if (linkId) {
          localStorage.setItem('activeNav', linkId);
        }
      });
    });


    toggleIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        const parentDiv = icon.parentElement;
        let responseDiv = parentDiv.nextElementSibling;

        // Si le div de réponse existe déjà, on le supprime
        if (responseDiv && responseDiv.classList.contains("response")) {
          responseDiv.remove();
        } else {
          // Sinon, on le crée et on l'ajoute après le parent
          responseDiv = document.createElement("div");
          responseDiv.classList.add("response", "bg-[#34C759]", "text-white", "rounded-lg", "px-4", "py-4", "sm:px-8", "sm:py-8");
          responseDiv.textContent = icon.getAttribute("data-response");
          parentDiv.insertAdjacentElement("afterend", responseDiv);
        }
      });
    });
  });

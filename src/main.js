import './style.css';


document.addEventListener("DOMContentLoaded", () => {
    const toggleIcons = document.querySelectorAll(".toggle-response");

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


  // <div class="scrolling-text flex items-center justify-center">
  //         <p class="text-white font-medium text-sm">Bienvenue sur RevUp - Transformez vos entraînements en récompenses !</p>
  // </div>
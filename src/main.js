import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

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

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <h1 class="text-3xl text-red-500 font-bold underline">
//         Hello world!
//     </h1>
//     <h2 class="text-2xl text-blue-500 font-bold underline">
//         Je veux commencer a reellement coder de tres fort !!!!!!!s
//     </h2>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

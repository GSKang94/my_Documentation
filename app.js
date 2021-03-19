const links = document.querySelectorAll("nav ul li");

links.forEach((li) => {
  li.addEventListener("click", () => {
    for (let sibling of li.parentNode.children) {
      //To highlight selected page
      if (sibling !== li) {
        sibling.classList.remove("active");
      } else {
        li.classList.add("active");
      }
    }

    let main = document.createElement("div");
    let liInnerText = li.textContent.replace(/\s{2,}/g, " ").trim();
    let container = document.getElementById("container");
    document.getElementById("home").style.display = "none";
    if (liInnerText !== "Home") {
      container.innerHTML = "";
      main.innerHTML = `
      <zero-md src='assets/notes/${liInnerText}.md'>
        <template>
             <link rel="stylesheet" href="assets/theme.css">
        </template>
      </zero-md>
      `;
    } else {
      window.location.reload();
    }

    // fade effect on page change
    main.animate([{ opacity: 0 }, { opacity: 1 }], 500);

    container.appendChild(main);
  });
});

let navBar = document.querySelector("body nav");
// Hide nav on scroll on mobile
let phoneSize = window.matchMedia("(max-width: 480px)");
if (phoneSize.matches) {
  navBar.style.backgroundColor = "#393232";
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("nav").style.top = "0";
    } else {
      document.querySelector("nav").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };
}

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

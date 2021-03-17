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
    container.innerHTML = "";
    main.innerHTML = `
      <zero-md src='assets/notes/${liInnerText}.md'>
        <template>
             <link rel="stylesheet" href="assets/theme.css">
        </template>
      </zero-md>
      `;

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

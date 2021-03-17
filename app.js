const links = document.querySelectorAll("li");
// let navLinks = document.querySelector("body nav");
links.forEach((li) => {
  li.addEventListener("click", () => {
    for (let sibling of li.parentNode.children) {
      if (sibling !== li) {
        sibling.classList.remove("active");
      } else {
        li.classList.add("active");
      }
    }

    let main = document.createElement("div");
    let liInnerText = li.textContent.replace(/\s{2,}/g, " ").trim();
    let container = document.getElementById("container");

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

// Hide nav on scroll on mobile
let phoneSize = window.matchMedia("(max-width: 480px)");
if (phoneSize.matches) {
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

// let home = () => {
//   container.innerHTML = "";
//   let home = document.createElement("div");
//   home.innerHTML = `
// <div id="home">
// <h1>my</h1>
// </div>
// `;
// };

// let hamburger = document.getElementById("ham-burger");
// console.log(links.length);
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("display");
// });
// links.forEach((li) => {
//   li.addEventListener("click", () => {
//     li.style.backgroundColor = "";
//   });
// });

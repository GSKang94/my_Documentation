let container = document.getElementById("container");

let render = (file) => {
  let main = document.createElement("div");

  container.innerHTML = "";
  main.innerHTML = `
  <zero-md src='assets/notes/${file}.md'>
    <template>
         <link rel="stylesheet" href="assets/theme.css">
    </template>
  </zero-md>
  `;

  // fade effect on page change
  main.animate([{ opacity: 0 }, { opacity: 1 }], 500);

  container.appendChild(main);
};

let mql = window.matchMedia("(max-width: 480px)");
if (mql.matches) {
  // Hide nav on scroll
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

// let navLinks = document.querySelector("ul");
// const links = document.querySelectorAll("li");
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

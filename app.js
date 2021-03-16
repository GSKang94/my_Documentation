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

  main.animate([{ opacity: 0 }, { opacity: 1 }], 600);

  container.appendChild(main);
};

// let home=()=>{
//   container.innerHTML=''
//   let home = document.createElement("div");
// home.innerHTML=`
// <div id="home">
// <h1>my</h1>
// </div>
// `
// }

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

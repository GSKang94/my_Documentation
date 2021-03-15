let container = document.getElementById("container");

let htmlMd = () => {
  let main = document.createElement("div");
  container.innerHTML = "";
  main.innerHTML = `
  <zero-md src='/notes/HTML.md'>
  `;
  container.appendChild(main);
};

let container = document.getElementById("container");

let render = (file) => {
  let main = document.createElement("div");

  container.innerHTML = "";
  main.innerHTML = `
  <zero-md src='/notes/${file}.md'>
    <template>
         <link rel="stylesheet" href="theme.css">
    </template>
  </zero-md>
  `;
  container.appendChild(main);
};

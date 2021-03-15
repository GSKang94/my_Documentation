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

  main.animate(
    [
      { opacity: 0, easing: "ease-in" },
      { opacity: 1, easing: "ease-out" },
    ],
    500
  );

  container.appendChild(main);
};

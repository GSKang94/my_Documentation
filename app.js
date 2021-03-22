// Check that service workers are supported
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}

const links = document.querySelectorAll("nav ul li");
links.forEach((li) => {
  li.addEventListener("click", () => {
    //To highlight selected nav-link
    highlightLinks(li);

    // remove homepage
    document.getElementById("home").style.display = "none";
    let liInnerText = li.textContent.replace(/\s{2,}/g, " ").trim();
    if (liInnerText !== "Home") {
      renderSelectedFile(liInnerText);
    } else {
      // go back to homepage
      window.location.reload();
    }
  });
});

let highlightLinks = (li) => {
  for (let sibling of li.parentNode.children) {
    if (sibling !== li) {
      sibling.classList.remove("active");
    } else {
      li.classList.add("active");
    }
  }
};

let renderSelectedFile = (liInnerText) => {
  let container = document.getElementById("container");
  let main = document.createElement("div");
  container.innerHTML = "";
  main.innerHTML = `
  <zero-md src='assets/notes/${liInnerText}.md'>
    <template>
         <link rel="stylesheet" href="assets/theme.css">
    </template>
  </zero-md>
  `;
  pageAnimate(main);

  container.appendChild(main);
};

let pageAnimate = (main) => {
  main.animate(
    [
      { opacity: 0, easing: "ease-in" },
      { opacity: 0.5, easing: "ease-out" },
      { opacity: 1 },
    ],
    500
  );
};

// Hide nav on scroll on mobile
let phoneSize = window.matchMedia("(max-width: 480px)");
if (phoneSize.matches) {
  let navBar = document.querySelector("body nav");
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

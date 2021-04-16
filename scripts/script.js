const menu = document.getElementById("nav-menu");
const projects = document.querySelectorAll(".project-info");

//Open nav menu when clicking hamburger menu
function openMenu() {
  menu.classList.add("menu-open");
}

//Close nav menu when clicking on "X"
function closeMenu() {
  menu.classList.remove("menu-open");
}

//Pops up a project info depending on which project is clicked
//Also checks if any project info is currently open and then closes it when clicking another project to open that one instead
function clickHandle(id) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].classList.contains("visible")) {
      projects[i].classList.remove("visible");
    }
  }
  document.getElementById(id + "-info").classList.add("visible");
}

//Closes project info when clicking on the "X"
function closeProject() {
  document.querySelector(".visible").classList.remove("visible");
}

//Makes the go-to-the-top icon appear and disappear depending on how far the user has scrolled
document.addEventListener("scroll", () => {
  if (pageYOffset >= 900) {
    document.querySelector(".go-back").style.display = "flex";
  } else {
    document.querySelector(".go-back").style.display = "none";
  }
  console.log(pageYOffset);
});

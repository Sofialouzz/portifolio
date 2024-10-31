const muda = document.getElementById("muda");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark-mode");
muda.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } 
  else {
    window.localStorage.setItem("theme", "dark");
  }
});


const muda2 = document.getElementById("muda2");

if (theme === "dark") document.body.classList.add("dark-mode");
muda2.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } 
  else {
    window.localStorage.setItem("theme", "dark");
  }
});


function menususpenso() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };


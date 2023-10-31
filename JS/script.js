
  const darkModeToggle = document.getElementById("darkModeToggle");
  const txtChange = document.querySelectorAll('.text-ch')
  const body = document.body;
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbar = document.querySelector('.navbar');
  
 




// Check if dark mode preference exists in storage
const darkModePreference = localStorage.getItem("darkMode");

if (darkModePreference === "true") {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Event listener for dark mode toggle switch
darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add("dark-mode");
  txtChange.forEach((txtChanges) => {
    txtChanges.classList.add('text-change')
});
  localStorage.setItem("textChange", "true");
  localStorage.setItem("darkMode", "true");
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove("dark-mode");
  txtChange.forEach((txtChanges) => {
    txtChanges.classList.remove('text-change')
});
  localStorage.setItem("textChange", "false");
  localStorage.setItem("darkMode", "false");
}

navbarToggler.addEventListener('click', function() {
  navbar.classList.toggle('navbar-custom');
});






  

     // Initiate the wowjs
     new WOW().init();


    
    
    
    
    
 

    






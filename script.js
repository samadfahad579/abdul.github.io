function myfunction()   {
    var element = document.body;
    element.dataset.bstheme =
    element.dataset.bstheme == "light" ? "dark" : "light";

}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Use 'navbar'
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a'); // Use '.navbar a'

// Handle scrolling to add 'active' class to nav links
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjusted offset
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Fixed the attribute retrieval

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*="' + id + '"]').classList.add('active'); // Fixed selector
            });
        }
    });
};

// Toggle navbar visibility when menu icon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon style (e.g., for a close icon)
    navbar.classList.toggle('active'); // Show or hide the navbar
};

// Close the navbar when a link is clicked
navLinks.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('active'); // Hide the navbar when a link is clicked
        menuIcon.classList.remove('bx-x'); // Change the icon back
    };
});
let color;
if(mode === "dark-mode"){
    color = "black"
} else {
    color = "white"
}
function toggleDarkMode() {
    // Toggle the dark mode class on the body
    document.body.classList.toggle('dark-mode');
  
    // Get the icon element
    var icon = document.getElementById('icon');
  
    // Check if dark mode is applied and switch icons
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('bx-moon');
      icon.classList.add('bx-sun');
    } else {
      icon.classList.remove('bx-sun');
      icon.classList.add('bx-moon');
    }
  }
  


var icons = document.getElementById("toggleDark");

// Check for existing user preference in localStorage
var preferredMode = localStorage.getItem('darkMode');

// Set initial body class based on preference or system setting
if (preferredMode === 'dark') {
    document.body.classList.add('dark-theme');
} else {
    document.body.classList.remove('dark-theme');
}
//function to toggle the modes
icons.onclick = function(){
    
    this.classList.toggle('bxs-moon');
        if (this.classList.toggle('bxs-sun')) {
            document.body.classList.toggle("dark-theme");
            
        }else{
            document.body.classList.toggle("dark-theme");
        };
        var newMode = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('darkMode', newMode);
};

/* || prefersDarkMode()*/
function prefersDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// For the Read more of blog buttons

const readMoreButtons = document.querySelectorAll('.content .post-list .post-item .buttons button');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const textContainer = button.closest('.post-item').querySelector('.content .post-list .post-item>p');
    textContainer.classList.toggle('active');
  });
});

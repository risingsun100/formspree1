// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Existing script for "keep trying" button
setInterval(() => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (button.textContent.includes('keep trying')) {
      button.click();
    }
  });
}, 2000);
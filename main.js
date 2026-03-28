// Add JS here

setInterval(() => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (button.textContent.includes('keep trying')) {
      button.click();
    }
  });
}, 2000);

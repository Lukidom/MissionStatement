const themeSelector = document.querySelector('#theme-selector');
const image = document.querySelector('.logo')
themeSelector.addEventListener('change', () => {
  if (themeSelector.value === 'dark') {
    document.body.classList.add('dark');
    document.body.style.backgroundColor = "#333";
    image.src = "byui-logo_white.png";
  } else {
    document.body.classList.remove('dark');
    document.body.style.backgroundColor = "";
    image.src = 'byui-logo_blue (1).webp';
  }
});
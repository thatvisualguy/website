function includeHTML(file, containerID, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(containerID).innerHTML = data;
      if (callback && typeof callback === 'function') {
        callback();
      }
    });
}

document.addEventListener('DOMContentLoaded', function() {
  includeHTML('https://raw.githubusercontent.com/thatvisualguy/website/main/Assets/Common/header_navbar.html', 'header-container', () => {
    // This is the callback function
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidenav = document.querySelector('.sidenav');
    const element = document.getElementById('categories');
    const element2 = document.getElementById('categories2');
    const element3 = document.getElementById('categories3');

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', () => {
        sidenav.classList.toggle('active');
        element.classList.toggle('active');
        element2.classList.toggle('active');
        element3.classList.toggle('active');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  includeHTML('https://raw.githubusercontent.com/thatvisualguy/website/main/Assets/Common/footer.html', 'footer-container');
});

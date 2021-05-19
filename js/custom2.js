function hiddenNav() {
  const nav = document.querySelector('div.nav-links');
  nav.style = 'height: 0px';

  document.querySelector('#nav-check').checked = false;
}

function showNav() {
  const nav = document.querySelector('div.nav-links');
  nav.style = 'height: calc(100vh - 50px)';
  nav.style = 'overflow-y: auto';
}

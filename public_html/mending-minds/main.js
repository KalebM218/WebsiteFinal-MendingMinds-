(function () {
  var btn = document.getElementById('hamburger-btn');
  var drawer = document.getElementById('nav-drawer');
 
  if (!btn || !drawer) return;
 
  btn.addEventListener('click', function () {
    var isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', !isOpen);
    drawer.setAttribute('aria-hidden', isOpen);
  });
 
  // Close drawer when a link inside it is clicked
  var links = drawer.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    });
  });
}());
 
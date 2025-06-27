(function() {
  // Helper function to select elements by ID
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      toggleBtn = $('toggle-card'),
      downloadBtn = $('download-button'),
      timer = null;

  card.style.display = 'block';

  // Open card functionality
  openB.addEventListener('click', function (e) {
    e.preventDefault();
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  // Close card functionality
  closeB.addEventListener('click', function (e) {
    e.preventDefault();
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer); 
    timer = setTimeout(function () {
      card.setAttribute('class', ''); 
      timer = null;
    }, 1000);
  });

  // Toggle card visibility
  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (card.style.display === 'none' || card.style.display === '') {
      // Show the card
      card.style.display = 'block';
      toggleBtn.textContent = 'hide card';
      downloadBtn.style.display = 'none';
    } else {
      // Hide the card
      card.style.display = 'none';
      toggleBtn.textContent = 'show card';
      downloadBtn.style.display = 'inline-block';
    }
    (function() {
  });
}());
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
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  // Close card functionality
  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer); 
    timer = setTimeout(function () {
      card.setAttribute('class', ''); 
      timer = null;
    }, 1000);
  });

  toggleBtn.addEventListener('click', function () {
    if (card.style.display === 'none' || card.style.display === '') {
      // Show the card
      card.style.display = 'block';
      toggleBtn.textContent = 'hide card'; // Change button text
      downloadBtn.style.display = 'none'; // Hide download button
    } else {
      // Hide the card
      card.style.display = 'none';
      toggleBtn.textContent = 'show card'; // Change button text
      downloadBtn.style.display = 'inline'; // Show download button
    }
  });
}());
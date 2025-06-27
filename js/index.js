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

  // Helper function to handle card state
  function setCardState(state) {
    if (timer) clearTimeout(timer);
    
    if (state === 'open') {
      card.setAttribute('class', 'open-half');
      timer = setTimeout(function() {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 800); // Slightly faster transition on mobile
    } 
    else if (state === 'close') {
      card.setAttribute('class', 'close-half');
      timer = setTimeout(function() {
        card.setAttribute('class', '');
        timer = null;
      }, 800);
    }
  }

  // Click/touch handlers for open/close
  [openB, closeB].forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      setCardState(btn === openB ? 'open' : 'close');
    });
    
    // Add touch support
    btn.addEventListener('touchstart', function(e) {
      e.preventDefault();
      setCardState(btn === openB ? 'open' : 'close');
    }, {passive: false});
  });

  // Toggle card visibility
  function toggleCardVisibility() {
    if (card.style.display === 'none' || card.style.display === '') {
      card.style.display = 'block';
      toggleBtn.textContent = 'hide card';
      downloadBtn.style.display = 'none';
    } else {
      card.style.display = 'none';
      toggleBtn.textContent = 'show card';
      downloadBtn.style.display = 'inline-block';
    }
  }

  toggleBtn.addEventListener('click', toggleCardVisibility);
  toggleBtn.addEventListener('touchstart', toggleCardVisibility, {passive: true});
}());

  });
}());
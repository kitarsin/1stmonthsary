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
  });

  // Add touch support for better mobile interaction
  var touchStartX = 0;
  var touchStartY = 0;
  var isSwiping = false;

  // Touch events for swipe gestures (optional enhancement)
  card.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwiping = false;
  }, { passive: true });

  card.addEventListener('touchmove', function(e) {
    if (!touchStartX || !touchStartY) return;
    
    var touchEndX = e.touches[0].clientX;
    var touchEndY = e.touches[0].clientY;
    
    var diffX = touchStartX - touchEndX;
    var diffY = touchStartY - touchEndY;
    
    // Check if horizontal swipe is more significant than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
      isSwiping = true;
    }
  }, { passive: true });

  card.addEventListener('touchend', function(e) {
    if (!isSwiping || !touchStartX) return;
    
    var touchEndX = e.changedTouches[0].clientX;
    var diffX = touchStartX - touchEndX;
    
    // Swipe left to open, swipe right to close
    if (diffX > 50 && card.className === '') {
      // Swipe left - open card
      openB.click();
    } else if (diffX < -50 && card.className === 'open-fully') {
      // Swipe right - close card
      closeB.click();
    }
    
    touchStartX = 0;
    touchStartY = 0;
    isSwiping = false;
  }, { passive: true });

  // Prevent double-tap zoom on buttons (mobile optimization)
  [openB, closeB, toggleBtn].forEach(function(btn) {
    btn.addEventListener('touchend', function(e) {
      e.preventDefault();
    });
  });

  // Add keyboard support for accessibility
  document.addEventListener('keydown', function(e) {
    // Press 'O' to open card
    if (e.key.toLowerCase() === 'o' && card.className === '') {
      openB.click();
    }
    // Press 'C' or 'Escape' to close card
    else if ((e.key.toLowerCase() === 'c' || e.key === 'Escape') && card.className === 'open-fully') {
      closeB.click();
    }
    // Press 'T' to toggle card visibility
    else if (e.key.toLowerCase() === 't') {
      toggleBtn.click();
    }
  });

}());
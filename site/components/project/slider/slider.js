var slider = function(slide, bullets) {

  // Slides
  var slides = document.querySelectorAll(slide);
  var slideCount = slides.length;
  var pos = 0;

  // - move out of viewport all inactive slides
  function setTransform() {
    for (var i = 0; i < slideCount; i++ ) {
      slides[i].style['transform'] = 'translateX(' + ((i + pos) * slides[0].offsetWidth) + 'px)';
    }
  }

  // - initialize slides in a responsive way
  setTransform();
  window.addEventListener('resize', setTransform);





  // Bullets
  var bullets = document.querySelectorAll(bullets);

  // - add click event to bullets
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', clickBullet, false);
  }

  // - click on a bullet
  function clickBullet(event) {
    active = this.classList.contains('active');

    if (!active) {
      moveSlide(this);
      removeActiveBulletClass();
      this.classList.add('active');
    }
  }

  // - move slide
  function moveSlide(bullet) {
    current = bulletIndex(bullet);
    step = current - Math.abs(pos);

    if (Math.abs(pos) < current ) {
      previousSlide(step);
    } else {
      nextSlide(-step);
    }
  }




  // Helpers

  // Return the index of the clicked element
  function bulletIndex(bullet) {
    var siblings = bullet.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
      if (bullet == siblings[i]) break;
    }
    return i - 1;
  }


  // Clear active state for all bullets
  function removeActiveBulletClass() {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove('active');
    }
  }

  // Get previous slide
  // - it moves prev with 'step' slides
  function previousSlide(step) {
    pos = Math.max(pos - step, -(slideCount - 1));
    setTransform();
  }

  // Get next slide
  // - it moves next with 'step' slides
  function nextSlide(step) {
    pos = Math.min(pos + step, 0);
    setTransform();
  }
}


slider('.slides .slide', '.slider__bullets div');
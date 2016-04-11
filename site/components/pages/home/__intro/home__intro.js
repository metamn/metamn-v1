var introAnimation = function(slidesID) {
  var slides = document.querySelectorAll(slidesID);
  if (!slides) return;

  var activeSlideIndex = -1;
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].style.transform == "translateX(0px)") {
      activeSlideIndex = i;
      break;
    }
  }
  if (activeSlideIndex == -1) return;

  var slide = slides[i];
  if (!slide) return;

  var position = slide.getBoundingClientRect();

  var year = slide.dataset.year;
  if (!year) return;

  switch (activeSlideIndex) {
    case 0:
      homeAnimation1(slide, year, activeSlideIndex + 1, position)
      break;
    default:
  }

}


function homeAnimation1(slide, year, activeSlideIndex, position) {
  var w = position.width - (position.width / 30);
  var h = position.height - (position.height / 30);

  var d = document.createElement('div');
  d.className = 'home__intro--animation-' + activeSlideIndex;

  var s1 = document.createElement('span');
  s1.innerHTML = year[0];
  s1.className = 'letter letter--1';
  s1.style.top = '0';
  s1.style.left = '0';
  d.appendChild(s1);

  var s2 = document.createElement('span');
  s2.innerHTML = year[1];
  s2.className = 'letter letter--2';
  s2.style.top = '0';
  s2.style.left = w + 'px';
  d.appendChild(s2);

  var s3 = document.createElement('span');
  s3.innerHTML = year[2];
  s3.className = 'letter letter--3';
  s3.style.top = h + 'px';
  s3.style.left = '0';
  d.appendChild(s3);

  var s4 = document.createElement('span');
  s4.innerHTML = year[3];
  s4.className = 'letter letter--4';
  s4.style.top = h + 'px';
  s4.style.left = w + 'px';
  d.appendChild(s4);

  slide.appendChild(d);
}



introAnimation('.home__intro .slider .slides .slide');

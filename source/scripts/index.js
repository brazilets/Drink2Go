document.getElementById('burger').addEventListener('click', () => {
  document.querySelector('.menu-nav__list').classList.toggle('active');
  document.querySelector('.js-toggle-button').classList.toggle('active');
});

const paginationButtonsEl = document.querySelectorAll('.slider-pagination');
const slidesEl = document.querySelectorAll('.slider-item');
const prevButtonEl = document.querySelector('.slider-button-prev');
const nextButtonEl = document.querySelector('.slider-button-next');
const heroSectionEl = document.querySelector('.hero');
const totalSlides = slidesEl.length;
const heroBackgroundColors = {
  0: '#f3ebe1',
  1: '#eae6fc',
  2: '#e5e6e8'
};
let currentSlide = 0;

const showSlide = (currentSlideIndex) => {
  slidesEl.forEach((slider) => slider.classList.remove('slider-item--current'));
  paginationButtonsEl.forEach((button) => button.classList.remove('slider-pagination--current'));
  slidesEl[currentSlideIndex].classList.add('slider-item--current');
  paginationButtonsEl[currentSlideIndex].classList.add('slider-pagination--current');

  const offset = -currentSlideIndex * 100;
  document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;

  prevButtonEl.style.cursor = currentSlideIndex === 0 ? 'default' : 'pointer';
  nextButtonEl.style.cursor = currentSlideIndex === totalSlides - 1 ? 'default' : 'pointer';
  currentSlide = currentSlideIndex;
  heroSectionEl.style.backgroundColor = heroBackgroundColors[currentSlideIndex] || heroBackgroundColors[0];
};

const initializeSlider = () => {
  paginationButtonsEl.forEach((button, paginationButtonIndex) => {
    button.addEventListener('click', () => showSlide(paginationButtonIndex));
  });
  prevButtonEl.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });
  nextButtonEl.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });
  showSlide(currentSlide);
};

initializeSlider();

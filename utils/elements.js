const photoBlock = document.querySelectorAll('.slide__img');
const personsBlock = {
  src: document.querySelector('.slider__photo-person'),
  title: document.querySelector('.slider__title_buttons'),
  name: document.querySelector('.slider__text_name'),
  fullName: document.querySelector('.slider__title_center'),
  text: document.querySelector('.slider__paragraph')
};
const nextButton = document.querySelector('.next-button');
const previousButton = document.querySelector('.previous-button');

export {
  photoBlock,
  personsBlock,
  nextButton,
  previousButton
};

const personsBlock = {
  src: document.querySelector('.slider__photo-person'),
  title: document.querySelector('.slider__title_buttons'),
  name: document.querySelector('.slider__text_name'),
  text: document.querySelector('.slider__paragraph'),
};
const nextButton = document.querySelector('.next-button');
const previousButton = document.querySelector('.previous-button');
const slides = {
  leftSlide: document.querySelector('.slide__img_left'),
  centerSlide: document.querySelector('.slide__img_center'),
  rightSlide:  document.querySelector('.slide__img_right'),
};
const titles = {
  leftTitle: document.querySelector('.slider__title_left'),
  centerTitle: document.querySelector('.slider__title_center'),
  rightTitle: document.querySelector('.slider__title_right'),
};

const rareButton = document.querySelector('.btn_rare');
const veryRareButton = document.querySelector('.btn_rare_very');

export {
  personsBlock,
  nextButton,
  previousButton,
  slides,
  titles,
  rareButton,
  veryRareButton
};

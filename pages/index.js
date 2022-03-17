import {persons} from "../utils/persons.js";
import {
  personsBlock,
  nextButton,
  previousButton,
  slides,
  titles
} from "../utils/elements.js";

import Person from "../components/Person.js";
import Slider from "../components/Slider.js";

let personNumber = 0;

const renderSlides = new Slider(slides, titles);
renderSlides.renderRareImg(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1]);
renderSlides.renderTitle(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1]);

const renderPersonInfo = new Person(personsBlock);
renderPersonInfo.renderPerson(persons[personNumber])

nextButton.addEventListener('click', nextPerson);
previousButton.addEventListener('click', previousPerson);

function nextPerson() {
  personNumber += 1;
  if (personNumber > persons.length - 1) {
    personNumber = 0;
    renderPersonInfo.renderPerson(persons[personNumber]);
    renderSlides.renderRareImg(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1]);
    renderSlides.renderTitle(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1]);
  } else {
    renderPersonInfo.renderPerson(persons[personNumber]);
    if (personNumber === 3) {
      renderSlides.renderRareImg(persons[personNumber - 1], persons[personNumber], persons[0]);
      renderSlides.renderTitle(persons[personNumber - 1], persons[personNumber], persons[0]);
    }
    renderSlides.renderRareImg(persons[personNumber - 1], persons[personNumber], persons[personNumber + 1]);
    renderSlides.renderTitle(persons[personNumber - 1], persons[personNumber], persons[personNumber + 1]);
  }
}

function previousPerson() {
  personNumber -= 1;
  if (personNumber < 0) {
    personNumber = persons.length - 1;
    renderPersonInfo.renderPerson(persons[personNumber]);
    renderSlides.renderRareImg(persons[personNumber - 1], persons[personNumber], persons[0]);
    renderSlides.renderTitle(persons[personNumber - 1], persons[personNumber], persons[0]);
  } else {
    renderPersonInfo.renderPerson(persons[personNumber]);
    if (personNumber === 0) {
      renderSlides.renderRareImg(persons[3], persons[personNumber], persons[personNumber + 1]);
      renderSlides.renderTitle(persons[3], persons[personNumber], persons[personNumber + 1]);
    }
    renderSlides.renderRareImg(persons[personNumber - 1], persons[personNumber], persons[personNumber + 1]);
    renderSlides.renderTitle(persons[personNumber - 1], persons[personNumber], persons[personNumber + 1]);
  }
}

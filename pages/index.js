import {rarePhoto} from "../utils/rarePhoto.js";
import {persons} from "../utils/persons.js";
import {
  photoBlock,
  personsBlock,
  nextButton,
  previousButton
} from "../utils/elements.js";

import Photo from "../components/Photo.js";
import Person from "../components/Person.js";

let personNumber = 0;

const renderRarePhoto = new Photo(rarePhoto, photoBlock);
renderRarePhoto.renderPhoto();

const renderPersonInfo = new Person(personsBlock);
renderPersonInfo.renderPerson(persons[personNumber])

nextButton.addEventListener('click', nextPerson);
previousButton.addEventListener('click', previousPerson);

function nextPerson() {
  personNumber += 1;
  if (personNumber > persons.length - 1) {
    personNumber = 0;
    renderPersonInfo.renderPerson(persons[personNumber]);
  } else {
    renderPersonInfo.renderPerson(persons[personNumber]);
  }
  console.log(personNumber, persons[personNumber])
}

function previousPerson() {
  personNumber -= 1;
  if (!personNumber < 0) {
    renderPersonInfo.renderPerson(persons[personNumber]);
  } else {
    personNumber = persons.length - 1;
    renderPersonInfo.renderPerson(persons[personNumber]);
  }
  console.log(personNumber, persons[personNumber])
}

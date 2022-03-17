import './index.css';
import {persons} from "../utils/persons.js";
import {
    personsBlock,
    nextButton,
    previousButton,
    slides,
    titles,
    rareButton,
    veryRareButton
} from "../utils/elements.js";

import Person from "../components/Person.js";
import Slider from "../components/Slider.js";

let personNumber = 0;
let rareBtnActive = rareButton.classList.contains('fourth-block__btn_active');

const renderSlides = new Slider(slides, titles);
renderSlides.renderImg(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1], rareBtnActive);
renderSlides.renderTitle(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1]);

const renderPersonInfo = new Person(personsBlock);
renderPersonInfo.renderPerson(persons[personNumber]);

nextButton.addEventListener('click', () => {
    nextPerson();
    scrollDown();
});
previousButton.addEventListener('click', () => {
    previousPerson();
    scrollDown();
});
veryRareButton.addEventListener('click', () => {
    veryRareActiveBtn();
    renderSlides.renderImg(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1], rareBtnActive);
    scrollDown();
});
rareButton.addEventListener('click', () => {
    rareActiveBtn();
    renderSlides.renderImg(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1], rareBtnActive);
    scrollDown();
})

function nextPerson() {
    personNumber += 1;
    if (personNumber > persons.length - 1) {
        personNumber = 0;
        renderPersonInfo.renderPerson(persons[personNumber]);
        renderSlides.renderImg(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1], rareBtnActive);
        renderSlides.renderTitle(persons[persons.length - 1], persons[personNumber], persons[personNumber + 1]);
    } else {
        renderPersonInfo.renderPerson(persons[personNumber]);
        if (personNumber === 3) {
            renderSlides.renderImg(persons[personNumber - 1], persons[personNumber], persons[0], rareBtnActive);
            renderSlides.renderTitle(persons[personNumber - 1], persons[personNumber], persons[0]);
        }
        renderSlides.renderImg(persons[personNumber - 1], persons[personNumber], persons[personNumber + 1], rareBtnActive);
        renderSlides.renderTitle(persons[personNumber - 1], persons[personNumber], persons[personNumber + 1]);
    }
}

function previousPerson() {
    personNumber -= 1;
    if (personNumber < 0) {
        personNumber = persons.length - 1;
        renderPersonInfo.renderPerson(persons[personNumber]);
        renderSlides.renderImg(persons[personNumber - 1], persons[personNumber], persons[0], rareBtnActive);
        renderSlides.renderTitle(persons[personNumber - 1], persons[personNumber], persons[0]);
    } else {
        renderPersonInfo.renderPerson(persons[personNumber]);
        if (personNumber === 0) {
            renderSlides.renderImg(persons[3], persons[personNumber], persons[personNumber + 1], rareBtnActive);
            renderSlides.renderTitle(persons[3], persons[personNumber], persons[personNumber + 1]);
        }
        renderSlides.renderImg(persons[personNumber - 1], persons[personNumber], persons[personNumber + 1], rareBtnActive);
        renderSlides.renderTitle(persons[personNumber - 1], persons[personNumber], persons[personNumber + 1]);
    }
}

function rareActiveBtn() {
    if (!rareButton.classList.contains('fourth-block__btn_active')) {
        veryRareButton.classList.remove('fourth-block__btn_active');
        rareButton.classList.add('fourth-block__btn_active');
    }
    rareBtnActive = true;
}

function veryRareActiveBtn() {
    if (!veryRareButton.classList.contains('fourth-block__btn_active')) {
        rareButton.classList.remove('fourth-block__btn_active');
        veryRareButton.classList.add('fourth-block__btn_active');
    }
    rareBtnActive = false;
}

function scrollDown() {
    window.scrollTo(0,document.body.scrollHeight);
}
export default class Person {
  constructor(personBlock) {
    this._personBlock = personBlock;
  }

  renderPerson(person) {
    this._personBlock.src.src = person.src;
    this._personBlock.title.textContent = person.title;
    this._personBlock.name.textContent = person.name;
    this._personBlock.text.textContent = person.text;
  }
}

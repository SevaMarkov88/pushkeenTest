export default class Slider {
  constructor(imgBlock, titleBlock) {
    this._imgBlock = imgBlock;
    this._titleBlock = titleBlock;
  }

  renderRareImg(prevPerson, person, nextPerson) {
    this._imgBlock.leftSlide.src = prevPerson.rareImg;
    this._imgBlock.centerSlide.src = person.rareImg;
    this._imgBlock.rightSlide.src = nextPerson.rareImg;
  }

  renderTitle(prevPerson, person, nextPerson) {
    this._titleBlock.leftTitle.textContent = prevPerson.fullName;
    this._titleBlock.centerTitle.textContent = person.fullName;
    this._titleBlock.rightTitle.textContent = nextPerson.fullName;
  }
}

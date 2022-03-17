export default class Slider {
  constructor(imgBlock, titleBlock) {
    this._imgBlock = imgBlock;
    this._titleBlock = titleBlock;
  }

  renderImg(prevPerson, person, nextPerson, rareBtnActive) {
    if (!rareBtnActive) {
      this._imgBlock.leftSlide.src = prevPerson.veryRareImg;
      this._imgBlock.centerSlide.src = person.veryRareImg;
      this._imgBlock.rightSlide.src = nextPerson.veryRareImg;
      return;
    }
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

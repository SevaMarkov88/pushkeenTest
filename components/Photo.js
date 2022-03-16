export default class Photo {
  constructor(items, imageBlock) {
    this._items = items;
    this._imageBlock = imageBlock;
  }

  renderPhoto() {
    for (let i = 0; i < this._items.length; i++) {
      this._imageBlock[i].src = this._items[i].src;
    }
  }
}

export default class Photo {
  constructor(items, imageBlock) {
    this._items = items;
    this._imageBlock = imageBlock;
  }

  addPhoto() {
    for (let i = 0; i < this._items.length; i++) {
      console.log(this._imageBlock[i], this._items[i]);
      this._imageBlock[i].src = this._items[i].src;
    }
  }
}

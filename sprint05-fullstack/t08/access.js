module.exports = class Access {
   constructor() {
    this._mark_LXXXV = undefined
   }

    set mark_LXXXV(mark) {
        this._mark_LXXXV = mark;
    }
    get mark_LXXXV() {
        if (this._mark_LXXXV === undefined) {
            return 'undefined';
        }
        if (this._mark_LXXXV == null) {
            return 'null';
        }
        return this._mark_LXXXV;
    }
}
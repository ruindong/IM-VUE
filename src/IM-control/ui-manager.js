
export default class UiManager {
    constructor(page) {
        this._page = page;
    }
    updateViewWhenReceive (msg) { //现在的UI渲染暂时性方法，后续考虑并发的处理
        this._page._data.chatItemList.push(msg);
    }
}

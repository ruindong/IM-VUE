export default class SystemManager {
    constructor(page) {
        this._page = page;
    }

    /**
     * 接收到消息时，通过UI类的管理进行渲染
     * @param msg
     */
    showMsg (msg) {
        //UI类是用于管理UI展示的类。对于并发要另外处理
        this._page.UI.updateViewWhenReceive(msg);
    }
}

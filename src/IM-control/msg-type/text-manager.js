export default class TextManager {
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

    /**
     * 发送消息时
     * @param content
     * @param type
     */
    async sendMsg (data) { //暂时采用输入组件直接封装提交数据，后续功能复杂再使用

    }
}

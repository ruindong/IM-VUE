import IMOperator from "./msg-type/im-operator";
import TextManager from "./msg-type/text-manager";
import SystemManager from "./msg-type/system-manager";
import ImageManager from "./msg-type/image-manager";

export default class MsgTypeManager {
    constructor(page) {
        this.operator = new IMOperator(page);
        this.textManager = new TextManager(page);
        this.systemManager = new SystemManager(page);
        this.imageManager = new ImageManager(page);
    }

    getMsgManager ({type}) {
        let tempManager = null;
        console.log("getMsgManager", type);
        switch (type) {
            case this.operator.SystemType:
                tempManager = this.systemManager;
                break;
            case this.operator.TextType:
                tempManager = this.textManager;
                break;
            case this.operator.ImageType:
                tempManager = this.imageManager;
                break;
        }
        return tempManager;
    }
    clear () {
        this.systemManager = null;
        this.textManager = null;
        this.imageManager = null;
    }
}

<template lang="html">
    <div class="get-message">
        <div class="chat-title">多人聊天房间--({{totalPeople}})人在线</div>
        <div class="msg-area" ref="scrollArea">
            <div class="scroll-area">
                <div v-for="(item,index) in chatItemList" :key="index">
                    <show-system-msg v-if="item.messageType==='system'" :content="item.content" :time="item.creatTime"></show-system-msg>
                    <show-text-photo-msg
                            v-if="item.messageType==='text' || item.messageType==='photo'"
                            :type="item.messageType"
                            :userName="item.userName"
                            :content="item.content"
                            :isSelf="item.userId === userId"
                            :imgUrl="item.content"
                    >
                    </show-text-photo-msg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import showSystemMsg from "@/components/show-system-msg";
    import showTextPhotoMsg from "@/components/show-text-photo-msg";
    import MsgTypeManager from "@/IM-control/msg-type-manager";
    import UiManager from "@/IM-control/ui-manager"
    export default {
        // 不要忘记了 name 属性
        name: "",
        // 组合其它组件
        extends: {},

        // 组件属性、变量
        props: {
            // 按字母顺序
        },
        // 变量
        data() {
            return {
                totalPeople: 0,
                chatItemList: [],
                userId: this.$store.state.userInfo.userId
            };
        },
        computed: {
        },

        asyncComputed: {},

        // 使用其它组件
        components: {
            showTextPhotoMsg, showSystemMsg
        },

        // 方法
        watch: {},
        methods: {},
        sockets: {
            connect (data) { //通信连接
                this.$socket.emit("login", this.$store.state.userInfo);
            },
            disconnect () { //检测断开连接
                //this.$socket.emit("login", this.$store.state.userInfo);
                this.$socket.emit("disconnect", this.$store.state.userInfo);
            },
            reconnect () { //重新连接
                this.$socket.emit("disconnect", this.$store.state.userInfo); //先退出
                this.$socket.emit("login", this.$store.state.userInfo); //在重新登陆
            },
            login (data) { //获取登陆后消息
                this.totalPeople = data.onlineCount;
                console.log(data);
            },
            logout (data) {
                this.totalPeople = data.onlineCount;
                console.log(data);
            },
            message (data) { //服务端所有消息的出口
                // {  //消息类型
                //     userId: obj.userId,
                //     userName: obj.userName,
                //     messageType: "system/text/photo",
                //     content: obj.userName+"退出了聊天室",
                //     creatTime: utils.trantDateToStr(new Date(), "datetime")
                // }
                const tempManager = this.msgTypeManager.getMsgManager({type: data.messageType});
                tempManager.showMsg(data);
            }
        },
        // 生命周期函数
        created() {
        },
        beforeCreate() {
        },
        mounted() {
            this.UI = new UiManager(this);
            this.msgTypeManager = new MsgTypeManager(this);
        },
        updated() {
            this.$refs.scrollArea.scrollTop = this.$refs.scrollArea.scrollHeight
        }
    };
</script>
<style lang="less">
    .get-message {
        width: 100%;
        height: calc(100vh - 200px);
        border: 10px solid #666666;
        overflow-y: hidden;
        .chat-title{
            width: 100%;
            height: 50px;
            background-color: #5D91F7;
            line-height: 50px;
            padding: 0 20px;
        }
        .msg-area {
            width: 100%;
            height: calc(100vh - 270px);
            overflow-y: auto;
            background-color: #EDEDED;
            .scroll-area {
                width: 100%;
                overflow-y: auto;
                padding: 20px;
            }
        }
    }
</style>

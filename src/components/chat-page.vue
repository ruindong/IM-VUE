<template lang="html">
    <div class="chat-page">
        <!--接收消息的组件-->
        <get-message></get-message>
        <!--发送消息的组件-->
        <send-message></send-message>
    </div>
</template>

<script>
    import getMessage from "@/components/get-message"
    import sendMessage from "@/components/send-message"
    import utils from "@/utils/utils.js"
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
                totalPeople: 0
            };
        },
        computed: {
        },

        asyncComputed: {},

        // 使用其它组件
        components: {
            getMessage, sendMessage
        },

        // 方法
        watch: {},
        methods: {},
        // 生命周期函数
        created () {
            // 初始化创建信息，按照常规创建用户应该是服务端做的...,为了方便demo
            this.$store.commit("setUserInfo", {
                userId: utils.generateUUID(),
                userName: utils.initNickName()
            });
            console.log("创建用户信息", this.$store.state.userInfo);
        },
        beforeCreate () {
        },
        mounted () {
        }
    };
</script>
<style lang="less" scoped>
    .chat-page{
        width: 100%;
        height: 100vh;
    }
</style>

<template lang="html">
    <div class="send-message">
        <div class="action-bar">
            <div class="action">
                <!--<div class="item">表情</div>-->
                <div class="item" @click="submitPhoto">图片</div>
                <!--<div class="item">视频</div>-->
            </div>
            <div class="submit" @click="submit">发送</div>
        </div>
        <div class="input-area">
            <textarea style="resize:none" v-model="inputMessage"/>
        </div>
    </div>
</template>

<script>
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
                inputMessage: ""
            };
        },
        computed: {},

        asyncComputed: {},

        // 使用其它组件
        components: {},

        // 方法
        watch: {},
        methods: {
            submitPhoto () {
                this.$socket.emit("message", {
                    ...this.$store.state.userInfo,
                    messageType: "photo",
                    content: "https://goss1.cfp.cn/creative/vcg/nowarter800/new/VCG41N898907298.jpg?x-oss-process=image/format,webp",
                    creatTime: utils.trantDateToStr(new Date(), "datetime")
                });
            },
            submit () {
                this.$socket.emit("message", {
                    ...this.$store.state.userInfo,
                    messageType: "text",
                    content: this.inputMessage,
                    creatTime: utils.trantDateToStr(new Date(), "datetime")
                });
                this.inputMessage = "";
            }
        },
        // 生命周期函数
        created() {
        },
        beforeCreate() {
        },
        mounted() {
        }
    };
</script>
<style lang="less" scoped>
    .send-message{
        width: 100%;
        height: 200px;
        .action-bar{
            width: 100%;
            height: 40px;
            background-color: #666;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            .action {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .item{
                    margin-right: 40px;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #ffffff;
                    font-size: 14px;
                    color: #ffffff;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 4px;
                    position: relative;
                    .photo-input{
                        position: absolute;
                        left: -1px;
                        right: -1px;
                        width: 40px;
                        height: 40px;
                        opacity: 0;
                        cursor: pointer;
                    }
                }
            }
            .submit{
                width: 100px;
                height: 36px;
                cursor: pointer;
                border-radius: 4px;
                background-color: #5D91F7;
                text-align: center;
                line-height: 36px;
                color: #ffffff;
            }
        }
        .input-area{
            width: 100%;
            height: 160px;
            border: 10px solid #666666;
            padding: 20px;
            textarea{
                width: 100%;
                height: 100px;
                font-size: 16px;
                padding: 10px;
            }
        }
    }
</style>

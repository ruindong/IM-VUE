<template lang="html">
    <div>
        <div class="msg-box-left" v-if="!isSelf">
            <div class="header"></div>
            <div class="content-box">
                <div class="name">{{userName}}</div>
                <div class="content" v-if="type==='text'">{{content}}</div>
                <div class="content" v-if="type==='photo'">
                    <img class="img-class" :src="content">
                </div>
            </div>
        </div>
        <div class="msg-box-right" v-if="isSelf">
            <div class="content-box">
                <div class="name">{{userName}}</div>
                <div class="content" v-if="type==='text'">{{content}}</div>
                <div class="content" v-if="type==='photo'">
                    <img class="img-class" :src="content">
                </div>
            </div>
            <div class="header"></div>
        </div>
    </div>
</template>

<script>
    export default {
        // 不要忘记了 name 属性
        name: "",
        // 组合其它组件
        extends: {},

        // 组件属性、变量
        props: {
            // 按字母顺序
            type: {
                type: String,
                default: "text"
            },
            userName: {
                type: String,
                default: "用户姓名"
            },
            content: {
                type: [String],
                default: "用户发送的消息"
            },
            isSelf: {
                type: Boolean,
                default: false
            }
        },
        // 变量
        data() {
            return {};
        },
        computed: {},

        asyncComputed: {},

        // 使用其它组件
        components: {},

        // 方法
        watch: {
            value (val) {
                this.$emit("input", val);
            }
        },
        methods: {},
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
    .msg-box-left {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 10px;
        .header {
            width: 30px;
            height: 30px;
            background-color: aqua;
            border-radius: 6px;
            margin-right: 10px;
        }
        .content-box{
            display: flex;
            flex-direction: column;
            max-width: 50%;
            .name {
                margin-bottom: 6px;
                font-size: 14px;
            }
            .content{
                padding: 10px;
                border-radius: 4px;
                background-color: #fff;
                font-size: 12px;
                color: #333;
                .img-class{
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
    .msg-box-right {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        margin-bottom: 10px;
        .header {
            width: 30px;
            height: 30px;
            background-color: aqua;
            border-radius: 6px;
        }
        .content-box{
            display: flex;
            flex-direction: column;
            margin-right: 10px;
            max-width: 50%;
            .name {
                margin-bottom: 6px;
                text-align: right;
                font-size: 14px;
            }
            .content{
                padding: 10px;
                border-radius: 4px;
                background-color: #fff;
                font-size: 12px;
                color: #333;
                .img-class{
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
</style>

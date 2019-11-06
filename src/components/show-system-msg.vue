<template lang="html">
    <div class="system-msg">
        <div>{{content}}</div>
        <div>{{time}}</div>
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
            content: {
                type: String,
                default: "系统消息"
            },
            time: {
                type: String,
                default: "系统消息"
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
<style lang="less">
    .system-msg {
        margin: 0 auto;
        text-align: center;
        padding: 10px;
        color: #999;
        font-size: 12px;
    }
</style>

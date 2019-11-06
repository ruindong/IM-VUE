<template lang="html">
    <!--<div class='test'>
        {{test}}
        <p class="title">IM-chat-vue  IM-chat-vue  </p>
        <img src="./images/image01.jpg">
        <div class="background-class"></div>
    </div>-->
    <chat-page></chat-page>
</template>

<script>
    import chatPage from "@/components/chat-page";
    export default {
        data(){
            return {
                test:"简单构建vue脚手架项目"
            }
        },
        components: {
            chatPage
        },
        methods: {
        }
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /*.test{
        color:red;
        .title{
            color:blue;
            transform: rotate(30deg);
            width: 200px;
            margin-top: 100px;
        }
        .background-class{
            width: 500px;
            height: 500px;
            background-image: url("./images/image01.jpg");
        }
    }*/
</style>

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var utils = require("../build/utils.js");

// app.get('/socket/client/index.html',function (req,res) {
//     res.send('<h1>welcome</h1>');
// })
//在线用户
var onlineUser={};
var onlineCount=0;

io.on('connection',function (socket) {
    //监听新用户加入
    socket.on('login',function (obj) {
        socket.userId = obj.userId;
        //检查用户在线列表
        if(!onlineUser.hasOwnProperty(obj.userId)){
            onlineUser[obj.userId] = obj.userName;
            //在线人数+1
            onlineCount++;
        }
        //广播消息
        io.emit('login',{ onlineUser:onlineUser,onlineCount:onlineCount,user:obj} );
        io.emit('message', {
            userId: obj.userId,
            userName: obj.userName,
            messageType: "system",
            content: obj.userName+"加入了聊天室",
            creatTime: utils.trantDateToStr(new Date(), "datetime")
        });
        console.log(obj.userName+"加入了聊天室");
    });

    //监听用户退出
    socket.on('disconnect',function () {
        //将退出用户在在线列表删除
        if(onlineUser.hasOwnProperty(socket.userId)){
            //退出用户信息
            var obj = { userId: socket.userId, userName: onlineUser[socket.userId] };
            //删除
            delete onlineUser[socket.userId];
            //在线人数-1
            onlineCount--;
            //广播消息
            io.emit('logout',{onlineUser:onlineUser,onlineCount:onlineCount,user:obj});
            io.emit('message', {
                userId: obj.userId,
                userName: obj.userName,
                messageType: "system",
                content: obj.userName+"退出了聊天室",
                creatTime: utils.trantDateToStr(new Date(), "datetime")
            });
            console.log(obj.userName+"退出了聊天室");
        }
    });

    //监听用户发布聊天内容
    socket.on('message', function(obj){
        //向所有客户端广播发布的消息
        io.emit('message', obj);
        console.log(obj.userName+"发了消息");
    });
});
http.listen(4000, function(){
    console.log('listening on *:4000');
});

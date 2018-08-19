var express=require('express');
var socket=require('socket.io');


//app setup
var app =express();
var server=app.listen(4000,function(){


   console.log('working');

});


//static files setup
app.use(express.static('public'));




//socket setup

var io=socket(server);

io.on('connection',function(socket){

 console.log('connetion made',socket.id);


     socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });
     
    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });


});
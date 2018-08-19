//make connection
var socket =io.connect('http://localhost:4000');


//Dom Traavrsel
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');
      feedback = document.getElementById('feedback');


// Emit events
btn.addEventListener('click', function(){
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
  message.value = "";
});

//listening for typing keypress event
message.addEventListener('keypress', function(){

	if(message.value!=''){

		socket.emit('typing', handle.value);
	}
    else{
    	feedback.innerHTML = '';
    }
});

/*
//listening for typing keyup event
message.addEventListener('keydown',typing_quit );


*/
// Listen for events
socket.on('chat', function(data){

	feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});      


//typing on other tabs
socket.on('typing', function(data){

	
  
                   
   feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>'; 
	
   
});



/*
function typing_quit(ev){

      console.log('function is called');

    console.log(message.value);

    if (message.value==''){

           feedback.innerHTML = '';

    }

};

*/
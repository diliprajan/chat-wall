var myDataRef = new Firebase('https://diliprajan.firebaseio.com/');

$('#messageInput').keypress(function (e) {
	if (e.keyCode == 13) {
	  var name = $('#nameInput').val();
	  var text = $('#messageInput').val();
	  myDataRef.push({name: name, text: text});
	  $('#messageInput').val('');
	}
});

$('#inputs > button').click(function () {
  console.log("clicked1!")
  var name = $('#nameInput').val();
  var text = $('#messageInput').val();
  myDataRef.push({name: name, text: text});
  $('#messageInput').val('');
});


myDataRef.on('child_added', function(snapshot) {
  console.log("Message received");
  var message = snapshot.val();
  addMessage(message.name, message.text);
});

$('.jumbotron > button').click(function () {
	console.log("clicked!");
	$('.jumbotron').animate({"margin-top": "0px"},600);
	$('.jumbotron > button').hide(600);
	$('hr').hide(600);
	$('#chat-section').slideDown(600);
	
})



function addMessage(name, text){
	var msg = "<div class='message'><em><b>"+name+":</em></b> "+text+"</div>";
	$('#chatStart').append(msg);
	$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
}
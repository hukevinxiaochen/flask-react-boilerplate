var keysTyped = 0;

$( document ).on("keyup", "textarea[name='mdeditor']", function( event ) {
	console.log(event.type);
	console.log(event.keyCode);
});

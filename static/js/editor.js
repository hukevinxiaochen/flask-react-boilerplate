// keyup event detector

$( document ).on("keyup", "textarea[name='mdeditor']", function( event ) {
	console.log(event.type);
	console.log(event.keyCode);
});

// change event detector
$( document ).on("change", "[name='mdeditor']", function (event) {
	console.log(event.type);
});

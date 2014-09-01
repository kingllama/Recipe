$(document).ready(function(){
	//Cross out ingredients from shopping list
	console.log("Script Included!")
	$("#ingredients").find('ul').find('li').on('click', function(){
		$(this).toggleClass('strikethrough');
	});
	//Hide and show pictures
	var show = "Show Pictures";
	var hide = "Hide Pictures";
	var n = 0;
	$('#textbutton').append(hide);
	$('#textbutton').on('click', function(){
		$('.pictures').toggle();
		$('#textbutton').empty();
		if(n === 0) {
			$('#textbutton').append(show);
			n = 1
		}
		else {
			$('#textbutton').append(hide);
			n = 0
		};
	});
	//Keep your position in the recipe
	var place = 1;
	console.log(place)
	function placeupdate() {
	$('#recipelist li:nth-child('+ place +')').css("font-weight","bold");
	$('#recipelist li:nth-child('+ place +')').css("color","#8f3b2c");
	$('#recipelist li:nth-child('+ place +')').siblings().css("font-weight","normal");
	$('#recipelist li:nth-child('+ place +')').siblings().css("color","#191710");
	};
	placeupdate();

	$(document).on('keydown', function(k) {
		if(k.keyCode === 39) {
			place += 1;
			console.log(place);
			placeupdate()
			if (place > 9) {
				place = 9;
				console.log(place)
			};
		};

		if(k.keyCode === 37) {
			place -= 1;
			console.log(place);
			placeupdate()
			if (place < 1) {
				place = 1;
				console.log(place);
			};
		};
	});
});
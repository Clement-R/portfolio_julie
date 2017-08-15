/*
	Show projects related to the chosen category on the main page	
*/
$("#main-projects-games").show();
$("#main-projects-ui").hide();

$(".main-menu-item").click(function(e){
	e.preventDefault();
	var label = $(this).data("label");


	console.log(label);

	if(label == "games") {
		$("#main-projects-games").show();
		$("#main-projects-ui").hide();
	} else if(label == "About") {
		$("#main-projects-games").hide();
		$("#main-projects-ui").show();
	}
});

$('.bg-modifier').on('mouseover', function() {

    var background = "url('" + $(this).attr('data-background') + "')";

    $('.background-changer').css('background-image', background)
});
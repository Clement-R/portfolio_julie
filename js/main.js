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
	} else if(label == "ui") {
		$("#main-projects-games").hide();
		$("#main-projects-ui").show();
	}
});
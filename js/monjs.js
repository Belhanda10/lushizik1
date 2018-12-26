$(function (){
        $("#afficher").click(function() {
          $("#afficher").hide();
          $(".alert").show("slow");
          });
          $(".close").click(function() {
            $(".alert").hide("slow");
            $("#afficher").show();
            });
        });
 function timer(n) {
 	$(".progress-bar").css("width", n + "%");
 	$("#pourcentage").text(n + "%");
 	if(n < 100) {
 		setTimeout(function() {
 			timer(n + 10);
 		}, 200);
 	}
 }
 $(function (){
 	$("#animer").click(function() {
 		timer(0);
 	});
 });

function timer(n) {
	$(".progress-bar").css("width", n + "%");
	if(n < 25) {
		setTimeout(function() {
			timer(n + 2.5);
		}, 200);
	}
}
$(function (){
	$("#anim").click(function() {
		timer(0);
	});
}); 
$('.dropdown-toggle').mouseover(function() {
	$(this).dropdown('toggle');
}); 

 $('.dropdown-toggle').mouseover(function() {
 	if( $('.btn-group').hasClass('open') ) $('.btn-group'). removeClass('open');
 	else $(this).dropdown('toggle');
 }); 

 $(function (){
 	$("#pop").popover();
 });

$(document).ready(function(){
  var nav = $("#menubar").offset().top; 
  $(window).bind('scroll', function() { 
    if ($(window).scrollTop() > nav) {  
      $('#menubar').addClass('fixed');  
    } 
    else {  
     $('#menubar').removeClass('fixed');    
    } 
  });
});

/* ============= navbar script ============= */


$(document).ready(function(){
	$(".scroll_down").click(function(){
		$("#header").scrollTop();
	});
});






/* ============== skill or progress bar script ============== */

$(document).ready(function(){
	$("#pills_botton1").click(function(){
		$(".web_design").show(1000);
		
	});
	$("#pills_botton1").click(function(){
		$(".web_develop").hide();
	});
	$("#pills_botton1").click(function(){
		$(".graphic_design").hide();
	});
	$("#pills_botton1").click(function(){
		$(".ms_office").hide();
	});
	$("#pills_botton2").click(function(){
		$(".web_develop").show(1000);
	});
	$("#pills_botton2").click(function(){
		$(".web_design").hide();
	});
	$("#pills_botton2").click(function(){
		$(".graphic_design").hide();
	});
	$("#pills_botton2").click(function(){
		$(".ms_office").hide();
	});
	$("#pills_botton3").click(function(){
		$(".graphic_design").show(1000);
	});
	$("#pills_botton3").click(function(){
		$(".web_design").hide();
	});
	$("#pills_botton3").click(function(){
		$(".web_develop").hide();
	});
	$("#pills_botton3").click(function(){
		$(".ms_office").hide();
	});
	$("#pills_botton4").click(function(){
		$(".ms_office").show(1000);
	});
	$("#pills_botton4").click(function(){
		$(".web_design").hide();
	});
	$("#pills_botton4").click(function(){
		$(".web_develop").hide();
	});
	$("#pills_botton4").click(function(){
		$(".graphic_design").hide();
	});
});

/* ================ progress bar script end ================ */

/* ============ Protfolio script start ============ */

$(document).ready(function(){
	$("#more_project").click(function(){
		$("#more_protfolio").fadeToggle(1000);
	});
});









